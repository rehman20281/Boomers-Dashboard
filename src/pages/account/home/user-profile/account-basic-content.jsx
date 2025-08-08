import { RecentUploads } from '@/pages/public-profile/profiles/default';
import {
  BasicSettings,
  CalendarAccounts,
  CommunityBadges,
  Connections,
  PersonalInfo,
  LicensingInfo,
  StartNow,
  Work,
  BankInfo,
  Bio,
  LoginInfo
} from './components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function AccountUserProfileContent() {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  useEffect(() => {

    handleAutoFetch();
  }, []);
  const handleAutoFetch = async () => {
    setLoading(true);
    setMessage("");
    setErrors({});

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const token = localStorage.getItem("authToken");

      const response = await fetch(`${apiUrl}/admin/agent/id/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data), // send updated data here
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
          setMessage(result.message || "Validation failed");
        } else {
          setMessage(result.message || "Something went wrong");
        }
        return;
      }

      setMessage("User updated successfully");
      // Optionally refresh data or UI
    } catch (err) {
      console.error(err);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">

          <p><button onClick={handleAutoFetch}>Save</button></p>
          <PersonalInfo data={data} />
          <LicensingInfo data={data} />
          <Bio />
          {/* <BasicSettings title="Basic Settings" /> */}
          {/* <Work /> */}
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <CommunityBadges title="Community Badges" />
          <LoginInfo data={data} />
          <BankInfo data={data} />
          {/* <StartNow />
          <CalendarAccounts />
          <Connections url="#" />
          <RecentUploads title="My Files" /> */}
        </div>
      </div>
    </div>
  );
};