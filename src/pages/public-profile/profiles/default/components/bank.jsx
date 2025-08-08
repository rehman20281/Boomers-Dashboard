import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Bank = () => {

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
      // console.log("User found:", result);
    } catch (err) {
      console.error(err);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const tables = [
    { status: 'Account Holder:', info: data.firstName || 'N/A' },
    { status: 'Bank Name:', info: data.bankName || 'N/A' },
    { status: 'Account Number:', info: data.accountNumber || 'N/A' },
    { status: 'Routing Number:', info: data.routingNumber || 'N/A' },
    { status: 'Account Type:', info: data.accountType || 'N/A' },
    { status: 'Address:', info:  data.address || 'N/A' },
  ];

  const renderTable = (table, index) => {
    return (
      <TableRow key={index} className="border-0">
        <TableCell className="text-sm text-secondary-foreground py-2">
          {table.status}
        </TableCell>
        <TableCell className="text-sm text-mono py-2">{table.info}</TableCell>
      </TableRow>
    );
  };

  return (
    <Card>
      <CardHeader className="ps-8">
        <CardTitle>Bank Info</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {tables.map((table, index) => {
              return renderTable(table, index);
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export { Bank };
