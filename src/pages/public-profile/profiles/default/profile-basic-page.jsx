import { Fragment } from 'react';
import { PageMenu } from '@/pages/public-profile';
import { UserHero } from '@/partials/common/user-hero';
import { DropdownMenu9 } from '@/partials/dropdown-menu/dropdown-menu-9';
import { Navbar, NavbarActions } from '@/partials/navbar/navbar';
import {
  EllipsisVertical,
  Luggage,
  Mail,
  MapPin,
  MessageSquareText,
  Users,
} from 'lucide-react';
import { Invoicing } from '.';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/container';
import { ProfileDefaultContent } from '.';
import { useState, useEffect } from 'react';
import { formatDate, formatDistanceToNow } from 'date-fns';
import { FormattedDate } from 'react-intl';
import { id } from 'date-fns/locale/id';
import { useParams } from 'react-router-dom';

export function ProfileDefaultPage() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");


  const { id } = useParams();

  useEffect(() => {

    handleAutoFetch();
  }, []);

  const handleAutoFetch = async () => {
    setLoading(true);
    setMessage("");
    setErrors({}); // clear previous errors

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const token = localStorage.getItem("authToken", "17|4kFMlcEYgIVlT6JlwddrLDUkVfeKwcZF6CPldcDf5ef2ea7b");

      const response = await fetch(`${apiUrl}/admin/agent/id/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json(); // ✅ capture response data

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
          setMessage(result.message || "Validation failed");
        } else {
          setMessage(result.message || "Something went wrong");
        }
        return;
      }

      // ✅ Success
      setData(result.data?.agent); // set after checking ok
      setMessage("User found successfully");
      // console.log("User found:", data.npn);
    } catch (err) {
      console.error(err);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [rowSelection] = useState({});
  const [sorting, setSorting] = useState([{ id: 'date', desc: true }]);



  return (
    <Fragment>
      <UserHero
        name={data.firstName || "Jenny"}
        image={data.profile}
        info={[
          { label: data.phoneNumber || "N/A", icon: Luggage },
          { label: data.country, icon: MapPin },
          { email: data.email, icon: Mail },
        ]}
      />

      <Container>
        <Navbar>
          <PageMenu />
          <NavbarActions>
            <Button>
              <Users /> Add agent
            </Button>
            <Button>
              <Users /> Add Policies
            </Button>
            <Button variant="outline" mode="icon">
              <MessageSquareText />
            </Button>
            <DropdownMenu9
              trigger={
                <Button variant="outline" mode="icon">
                  <EllipsisVertical />
                </Button>
              }
            />
          </NavbarActions>
        </Navbar>
      </Container>
      <Container>
        <ProfileDefaultContent />
        <Invoicing />
      </Container>
    </Fragment>
  );
}
