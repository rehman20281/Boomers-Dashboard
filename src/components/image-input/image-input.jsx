import React, { useCallback, useRef, useState } from 'react';
import { getAcceptTypeString, getListFiles, openFileDialog } from './utils';
import { updateAgent } from '@/utils/agentService';
import { useParams } from 'react-router-dom';

export const DEFAULT_NULL_INDEX = -1;
export const DEFAULT_DATA_URL_KEY = 'dataURL';

const ImageInput = ({
  value,
  acceptType,
  inputProps,
  multiple,
  children,
  onChange,
}) => {
  const inValue = value || [];
  const inputRef = useRef(null);
  const [keyUpdate, setKeyUpdate] = useState(DEFAULT_NULL_INDEX);
  const [isDragging, setIsDragging] = useState(false);

  const [data, setData] = useState({
    profile: '', // Use the actual File object
  });
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const onImageRemoveAll = useCallback(() => {
    onChange?.([]);
  }, [onChange]);

  const handleClickInput = useCallback(() => {
    openFileDialog(inputRef);
  }, [inputRef]);

  const onImageUpload = useCallback(() => {
    handleClickInput();
  }, [handleClickInput]);

  const onInputChange = async (e) => {
    await handleChange(e.target.files);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleChange = async (files) => {
    if (!files) return;
    const fileList = await getListFiles(files, DEFAULT_DATA_URL_KEY);
    if (!fileList.length) return;
    let updatedFileList;
    const updatedIndexes = [];
    if (keyUpdate > DEFAULT_NULL_INDEX) {
      const [firstFile] = fileList;
      updatedFileList = [...inValue];
      updatedFileList[keyUpdate] = firstFile;
      updatedIndexes.push(keyUpdate);
    } else if (multiple) {
      updatedFileList = [...inValue, ...fileList];
      for (let i = inValue.length; i < updatedFileList.length; i += 1) {
        updatedIndexes.push(i);
      }
    } else {
      updatedFileList = [fileList[0]];
      updatedIndexes.push(0);
    }
    onChange?.(updatedFileList, updatedIndexes);
    console.log('Updated file list:', updatedFileList);
    try {
      const apiUrl = import.meta.env.VITE_API_URL; // Your base API URL
      const token = localStorage.getItem("token");
      const agentId = id; // From route params or state

      // Make sure we have at least one file
      if (!updatedFileList || !updatedFileList[0] || !updatedFileList[0].file) {
        console.error("No file selected for upload.");
        setErrors({ profile: "Please select a profile image" });
        return;
      }


      // Create FormData
      const formData = new FormData();
      formData.append("profile", updatedFileList[0].dataURL); // Send the actual File object
      formData.append("_method", "PUT"); // Laravel needs this for PUT via POST

      // Debug log: show all form data
      formData.forEach((value, key) => {
        console.log(key, value);
      });

      setData({
        profile: updatedFileList[0].dataURL, // Store the data URL for display
      });
      console.log("Submitting form data:", agentId);

      // API call
      updateAgent(data, agentId)
        .then((response) => {
          console.log("Agent updated successfully:", response.data);
          setMessage("Agent updated successfully");
        })
        .catch((error) => {
          console.error("Error updating agent:", error.response?.data || error.message);
          setErrors({ general: error.response?.data?.message || error.message });
        });

    } catch (error) {
      console.error("Unexpected error:", error);
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }

  };

  const onImageRemove = (index) => {
    const updatedList = [...inValue];
    if (Array.isArray(index)) {
      index.forEach((i) => {
        updatedList.splice(i, 1);
      });
    } else {
      updatedList.splice(index, 1);
    }
    onChange?.(updatedList);
  };

  const onImageUpdate = (index) => {
    setKeyUpdate(index);
    handleClickInput();
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleChange(e.dataTransfer.files);
    }
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.clearData();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={getAcceptTypeString(acceptType)}
        multiple={multiple}
        onChange={(e) => {
          onInputChange(e);
        }}
        style={{ display: 'none' }}
        {...inputProps}
      />

      {children?.({
        fileList: inValue,
        onImageUpload,
        onImageRemove,
        onImageUpdate,
        onImageRemoveAll,
        dragProps: {
          onDrop: handleDrop,
          onDragEnter: handleDragIn,
          onDragLeave: handleDragOut,
          onDragOver: handleDrag,
          onDragStart: handleDragStart,
        },
        isDragging,
      })}
    </>
  );
};

export { ImageInput };
