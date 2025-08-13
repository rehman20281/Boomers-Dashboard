import { AvatarInput } from '@/partials/common/avatar-input';
import { SquarePen } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HexagonBadge } from '@/partials/common/hexagon-badge';
import { MessagesSquare, Truck, Volleyball, Zap } from 'lucide-react';
import { getAgentById } from '@/utils/agentService';
import { updateAgent } from '@/utils/agentService';

const handleChange = (e) => {
  const { name, value } = e.target;
  setData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const PersonalInfo = () => {
  const [update, setUpdate] = useState(false)
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    phoneNumber: '',
    npn: '',
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [errors, setErrors] = useState({});

  // const [file, setFile] = useState(null);

  // const handleFileChange = (e) => {
  //   // e.target.files is a FileList, we take the first file
  //   setFile(e.target.files[0]);
  // };


  useEffect(() => {
    // console.log("Hello world")
    handleAutoFetch();
  }, []);
  const handleAutoFetch = async () => {
    console.log("Fetching agents data...");
    setLoading(true);
    setMessage("");
    setErrors({});


    getAgentById(id)
      .then((response) => {
        const agentsArray = response.data.agent;
        setData(agentsArray || []);
      })
      .catch((err) => console.error("Error fetching users:", err));

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setUpdate(true);
  };

  // console.log("Data to update:", data);
  const handleSave = async () => {
    console.log("Updating agent data...");
    setLoading(true);
    setMessage("");
    setErrors({});

    try {
      const apiUrl = import.meta.env.VITE_API_URL; // or your base API URL
      const token = localStorage.getItem("token");
      const agentId = data.id; // assuming you have agentId in data

      // Create FormData
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("npn", data.npn);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("profile", data.profile); // This should be a File object
      formData.append("_method", "PUT"); // tell backend it's a PUT request
      formData.forEach((value, key) => {
        console.log(key, value);
      });

      updateAgent(formData, agentId)
        .then((response) => {
          console.log("Agent updated successfully:", response.data);
          setMessage("Agent updated successfully");
        })
        .catch((error) => {
          console.error("Error updating agent:", error);
          setErrors({ general: error.message });
        });

    } catch (err) {
      console.error("Error updating user:", err);
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  // console.log("Fetched agents data:", data);
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Personal Info</CardTitle>
        { update ? 
          <Button  onClick={handleSave} className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer ">Update</Button> 
            :
          <Button disabled className="bg-gray-500 text-white">Update</Button>
        }
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto pb-3 p-0">
        <Table className="align-middle text-sm text-muted-foreground">
          <TableBody>
            <TableRow>
              <TableCell className="py-2 min-w-28 text-secondary-foreground font-normal">
                Photo
              </TableCell>
              <TableCell className="py-2 text-gray700 font-normal min-w-32 text-sm">
                150x150px JPEG, PNG Image
              </TableCell>
              <TableCell className="py-2 text-center">
                <div className="flex justify-center items-center">
                  <AvatarInput />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                First Name
              </TableCell>
              <TableCell className="py-2 text-foreground font-normaltext-sm">
                <input type="text" value={data.firstName ?? 'N/A'} name='firstName' onChange={handleChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Last Name
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                <input type="text" value={data.lastName ?? 'N/A'} name='lastName' onChange={handleChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Birthday
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                <input
                  type="date"
                  name="birthday"
                  value={data.birthday || ""}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Gender
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                <input type="text" value={data.gender ?? 'N/A'} name='gender' onChange={handleChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Phone
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                <input type="tel" value={data.phoneNumber ?? 'N/A'} name='phoneNumber' onChange={handleChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                NPN
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                <input type="tel" value={data.npn ?? 'N/A'} name='npn' onChange={handleChange} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const LicensingInfo = () => {
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState({
    ssn: '',
    rls: '',
    osli: '',
    upline: '',
    eo: '',
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [errors, setErrors] = useState({});




  useEffect(() => {
    // console.log("Hello world")
    handleAutoFetch();
  }, []);
  const handleAutoFetch = async () => {
    console.log("Fetching agents data...");
    setLoading(true);
    setMessage("");
    setErrors({});


    getAgentById(id)
      .then((response) => {
        const agentsArray = response.data.agent;
        setData(agentsArray || []);
      })
      .catch((err) => console.error("Error fetching users:", err));

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setUpdate(true);
  };

  // console.log("Data to update:", data);
  const handleSave = async () => {
    console.log("Updating agent data...");
    setLoading(true);
    setMessage("");
    setErrors({});

    try {
      const apiUrl = import.meta.env.VITE_API_URL; // or your base API URL
      const token = localStorage.getItem("token");
      const agentId = data.id; // assuming you have agentId in data

      // Create FormData
      const formData = new FormData();
      formData.append("ssn", data.ssn);
      formData.append("rls", data.rls);
      formData.append("osli", data.osli);
      formData.append("upline", data.upline);
      formData.append("eo", data.eo);
      formData.append("_method", "PUT"); // tell backend it's a PUT request
      formData.forEach((value, key) => {
        console.log(key, value);
      });

      updateAgent(formData, agentId)
        .then((response) => {
          console.log("Agent updated successfully:", response.data);
          setMessage("Agent updated successfully");
        })
        .catch((error) => {
          console.error("Error updating agent:", error);
          setErrors({ general: error.message });
        });

    } catch (err) {
      console.error("Error updating user:", err);
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };
  console.log("Profile:", data.profile);
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Licensing Info</CardTitle>
        { update ? 
          <Button  onClick={handleSave} className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer ">Update</Button> 
            :
          <Button disabled className="bg-gray-500 text-white">Update</Button>
        }
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto pb-3 p-0">
        <Table className="align-middle text-sm text-muted-foreground">
          <TableBody>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Social Security Number
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                <input type="text" value={data.ssn ?? 'N/A'} name='ssn' onChange={handleChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Resident License State
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                <input type="text" value={data.rls ?? 'N/A'} name='rls' onChange={handleChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Other States I\'m Licensed In (if applicabe)
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                <input type="text" value={data.osli ?? 'N/A'} name='osli' onChange={handleChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Are you working with an immediate upline?
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                <input type="text" value={data.upline ?? 'N/A'} name='upline' onChange={handleChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Do you have an active E&O policy?
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                <input type="text" value={data.eo ?? 'N/A'} name='eo' onChange={handleChange} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const Bio = () => {
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    phoneNumber: '',
    npn: '',
    profile: '', // Use the actual File object
    description: '',
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [errors, setErrors] = useState({});

  // const [file, setFile] = useState(null);

  // const handleFileChange = (e) => {
  //   // e.target.files is a FileList, we take the first file
  //   setFile(e.target.files[0]);
  // };


  useEffect(() => {
    // console.log("Hello world")
    handleAutoFetch();
  }, []);
  const handleAutoFetch = async () => {
    console.log("Fetching agents data...");
    setLoading(true);
    setMessage("");
    setErrors({});


    getAgentById(id)
      .then((response) => {
        const agentsArray = response.data.agent;
        setData(agentsArray || []);
      })
      .catch((err) => console.error("Error fetching users:", err));

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setUpdate(true);
  };

  // console.log("Data to update:", data);
  const handleSave = async () => {
    console.log("Updating agent data...");
    setLoading(true);
    setMessage("");
    setErrors({});

    try {
      const apiUrl = import.meta.env.VITE_API_URL; // or your base API URL
      const token = localStorage.getItem("token");
      const agentId = data.id; // assuming you have agentId in data

      // Create FormData
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("npn", data.npn);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("profile", data.profile); // This should be a File object
      formData.append("description", data.description);
      formData.append("_method", "PUT"); // tell backend it's a PUT request
      formData.forEach((value, key) => {
        console.log(key, value);
      });

      updateAgent(formData, agentId)
        .then((response) => {
          console.log("Agent updated successfully:", response.data);
          setMessage("Agent updated successfully");
        })
        .catch((error) => {
          console.error("Error updating agent:", error);
          setErrors({ general: error.message });
        });

    } catch (err) {
      console.error("Error updating user:", err);
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  const WORD_LIMIT = 150;
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Bio</CardTitle>
        { update ? 
          <Button  onClick={handleSave} className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer ">Update</Button> 
            :
          <Button disabled className="bg-gray-500 text-white">Update</Button>
        }
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto pb-3 p-0">
        <Table className="align-middle text-sm text-muted-foreground">
          <TableBody>
            <TableRow>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                <textarea
                  value={data.description ?? "N/A"}
                  name="description"
                  onChange={(e) => {
                    const words = e.target.value.trim().split(/\s+/);
                    if (words.length <= WORD_LIMIT) {
                      handleChange(e); // ✅ your existing change handler
                    }
                  }}
                  style={{
                    width: "100%",
                    minHeight: "100px",
                    resize: "none",
                    overflow: "hidden"
                  }}
                  rows={1}
                  onInput={(e) => {
                    e.target.style.height = "auto"; // Reset height
                    e.target.style.height = e.target.scrollHeight + "px"; // Set new height
                  }}
                />
                <p>
                  {data.description
                    ? data.description.trim().split(/\s+/).length
                    : 0}{" "}
                  / {WORD_LIMIT} words
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const CommunityBadges = ({ title }) => {
  const items = [
    {
      stroke: 'stroke-blue-200 dark:stroke-blue-950',
      fill: 'fill-blue-50 dark:fill-blue-950/30',
      icon: Volleyball,
      iconColor: 'text-blue-500',
    },
    {
      stroke: 'stroke-orange-200 dark:stroke-orange-950',
      fill: 'fill-orange-50 dark:fill-orange-950/30',
      icon: Zap,
      iconColor: 'text-orange-500',
    },
    {
      stroke: 'stroke-green-200 dark:stroke-green-950',
      fill: 'fill-green-50 dark:fill-green-950/30',
      icon: MessagesSquare,
      iconColor: 'text-green-500',
    },
    {
      stroke: 'stroke-violet-200 dark:stroke-violet-950',
      fill: 'fill-violet-50  dark:fill-violet-950/30',
      icon: Truck,
      iconColor: 'text-violet-500',
    },
  ];

  const renderItem = (item, index) => {
    return (
      <HexagonBadge
        key={index}
        stroke={item.stroke}
        fill={item.fill}
        size="size-[50px]"
        badge={<item.icon className={`text-xl ps-px ${item.iconColor}`} />}
      />

    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-7.5">
        <div className="flex items-center flex-wrap gap-3 lg:gap-4">
          {/* {items.map((item, index) => {
            return renderItem(item, index);
          })} */}
          <img
            src="/media/app/logo-academy.svg"
            style={{ width: '5rem', stroke: 'stroke-orange-200 dark:stroke-orange-950' }}
            alt=""
          />
          <img src="/media/app/logo-insurance.svg" style={{ width: '5rem' }} alt="" />
        </div>
      </CardContent>
    </Card>
  );
};

const LoginInfo = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // console.log("Hello world")
    handleAutoFetch();
  }, []);
  const handleAutoFetch = async () => {
    console.log("Fetching agents data...");
    setLoading(true);
    setMessage("");
    setErrors({});


    getAgentById(id)
      .then((response) => {
        const agentsArray = response.data.agent;
        setData(agentsArray || []);
      })
      .catch((err) => console.error("Error fetching users:", err));

  };
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Licensing Info</CardTitle>
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto pb-3 p-0">
        <Table className="align-middle text-sm text-muted-foreground">
          <TableBody>
            <TableRow>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                Email
              </TableCell>
              <TableCell className="py-2 text-foreground font-normaltext-sm">
                {data.email || 'N/A'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Password
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                {data.password || 'N/A'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const BankInfo = () => {
  const [data, setData] = useState({
    name: '',
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    accountType: '',
    address: '',
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // console.log("Hello world")
    handleAutoFetch();
  }, []);
  const handleAutoFetch = async () => {
    console.log("Fetching agents data...");
    setLoading(true);
    setMessage("");
    setErrors({});


    getAgentById(id)
      .then((response) => {
        const agentsArray = response.data.agent;
        setData(agentsArray || []);
      })
      .catch((err) => console.error("Error fetching users:", err));

  };
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Bank Info</CardTitle>
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto pb-3 p-0">
        <Table className="align-middle text-sm text-muted-foreground">
          <TableBody>
            <TableRow>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                Account Holder:
              </TableCell>
              <TableCell className="py-2 text-foreground font-normaltext-sm">
                {data.name || 'N/A'}
              </TableCell>
              <TableCell className="py-2 text-center">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Bank Name:
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                {data.bankName || 'N/A'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Account Number:
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                {data.accountNumber || 'N/A'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Routing Number:
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                {data.routingNumber || 'N/A'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Account Type:
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                {data.accountType || 'N/A'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Address:
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
                {data.address || 'N/A'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};




export { PersonalInfo, LicensingInfo, Bio, CommunityBadges, LoginInfo, BankInfo };
