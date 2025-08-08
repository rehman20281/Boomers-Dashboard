// import { AvatarInput } from '@/partials/common/avatar-input';
// import { SquarePen } from 'lucide-react';
// import { Link } from 'react-router';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const LicensingInfo = () => {

//   const [data, setData] = useState([]);

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const { id } = useParams();
//   const [errors, setErrors] = useState({});
//   useEffect(() => {

//       handleAutoFetch();
//     }, []);
  
//     const handleAutoFetch = async () => {
//       setLoading(true);
//       setMessage("");
//       setErrors({}); // clear previous errors
  
//       try {
//         const apiUrl = import.meta.env.VITE_API_URL;
//         const token = localStorage.getItem("authToken", "17|4kFMlcEYgIVlT6JlwddrLDUkVfeKwcZF6CPldcDf5ef2ea7b");
  
//         const response = await fetch(`${apiUrl}/admin/agent/id/${id}`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });
  
//         const result = await response.json(); // ✅ capture response data
  
//         if (!response.ok) {
//           if (result.errors) {
//             setErrors(result.errors);
//             setMessage(result.message || "Validation failed");
//           } else {
//             setMessage(result.message || "Something went wrong");
//           }
//           return;
//         }
  
//         // ✅ Success
//         setData(result.data?.agent); // set after checking ok
//         setMessage("User found successfully");
//         // console.log("User found:", result);
//       } catch (err) {
//         console.error(err);
//         setMessage("An unexpected error occurred. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
  

//   return (
//     <Card className="min-w-full">
//       <CardHeader>
//         <CardTitle>Licensing Info</CardTitle>
//       </CardHeader>
//       <CardContent className="kt-scrollable-x-auto pb-3 p-0">
//         <Table className="align-middle text-sm text-muted-foreground">
//           <TableBody>
//             <TableRow>
//               <TableCell className="py-2 text-secondary-foreground font-normal">
//                 National Producer Number
//               </TableCell>
//               <TableCell className="py-2 text-foreground font-normaltext-sm">
//                 {data.npn || 'N/A'}
//               </TableCell>
//               <TableCell className="py-2 text-center">
//                 <Button variant="ghost" mode="icon">
//                   <SquarePen size={16} className="text-blue-500" />
//                 </Button>
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="py-3 text-secondary-foreground font-normal">
//                 Social Security Number
//               </TableCell>
//               <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
//                 {data.ssn || 'N/A'}
//               </TableCell>
//               <TableCell className="py-3 text-center">
//                 <Button variant="ghost" mode="icon">
//                   <SquarePen size={16} className="text-blue-500" />
//                 </Button>
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="py-3 text-secondary-foreground font-normal">
//                 Resident License State
//               </TableCell>
//               <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
//                 {data.rls || 'N/A'}
//               </TableCell>
//               <TableCell className="py-3 text-center">
//                 <Button variant="ghost" mode="icon">
//                   <SquarePen size={16} className="text-blue-500" />
//                 </Button>
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="py-3 text-secondary-foreground font-normal">
//                 Other States I\'m Licensed In (if applicabe)
//               </TableCell>
//               <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
//                 {data.osli || 'N/A'}
//               </TableCell>
//               <TableCell className="py-3 text-center">
//                 <Button variant="ghost" mode="icon">
//                   <SquarePen size={16} className="text-blue-500" />
//                 </Button>
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="py-3 text-secondary-foreground font-normal">
//                 Are you working with an immediate upline?
//               </TableCell>
//               <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
//                 {data.upline || 'N/A'}
//               </TableCell>
//               <TableCell className="py-3 text-center">
//                 <Button variant="ghost" mode="icon">
//                   <SquarePen size={16} className="text-blue-500" />
//                 </Button>
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="py-3 text-secondary-foreground font-normal">
//                 Do you have an active E&O policy?
//               </TableCell>
//               <TableCell className="py-3 text-secondary-foreground text-sm font-normal">
//                 {data.eo || 'N/A'}
//               </TableCell>
//               <TableCell className="py-3 text-center">
//                 <Button variant="ghost" mode="icon">
//                   <SquarePen size={16} className="text-blue-500" />
//                 </Button>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   );
// };

// export { LicensingInfo };
