import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAgentById } from '@/utils/agentService';
const Licensing = () => {
  const [data, setData] = useState([]);
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
        console.log("Agents data fetched:", agentsArray);
        setData(agentsArray || []);
      })
      .catch((err) => console.error("Error fetching users:", err));

  };
  const tables = [
    { status: 'National Producer Number', info: data.npn },
    { status: 'Social Security Number', info: data.ssn || 'N/A' },
    { status: 'Resident License State', info: data.rls || 'N/A' },
    { status: 'Other States I\'m Licensed In (if applicabe)', info: data.osli || 'N/A' },
    { status: 'Are you working with an immediate upline?', info: data.upline || 'N/A' },
    { status: 'Do you have an active E&O policy?', info: data.eo || 'N/A' },
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
        <CardTitle>Licensing Info</CardTitle>
      </CardHeader>
      <CardContent style={{ paddingBottom: '17rem' }}>
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

export { Licensing };
