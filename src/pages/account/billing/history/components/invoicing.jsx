import { useEffect, useMemo, useState } from 'react';
// import {
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from '@tanstack/react-table';
import { Download, Settings2, MessageCircleMore, Table, } from 'lucide-react';
// import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardFooter,
//   CardHeader,
//   CardTable,
//   CardHeading,
//   CardTitle,
//   CardToolbar,
// } from '@/components/ui/card';
// import {
//   Filter,
//   Info,
//   Search,
//   SquarePen,
//   Trash2,
//   X,
// } from 'lucide-react';
// import { Input } from '@/components/ui/input';
// import { DataGrid, useDataGrid } from '@/components/ui/data-grid';
// import { DataGridColumnHeader } from '@/components/ui/data-grid-column-header';
// import { DataGridColumnVisibility } from '@/components/ui/data-grid-column-visibility';
// import { DataGridPagination } from '@/components/ui/data-grid-pagination';
import { DropdownMenu2 } from '@/partials/dropdown-menu/dropdown-menu-2';
import { EllipsisVertical } from 'lucide-react';
// import {
//   DataGridTable,
//   DataGridTableRowSelect,
//   DataGridTableRowSelectAll,
// } from '@/components/ui/data-grid-table';
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ChatSheet } from '@/partials/topbar/chat-sheet';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
import {
  // Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
// import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router';
import React from 'react';


// // const data = [
// //   {
// //     id: '1', // Unique ID as a string
// //     invoice: 'John Doe',
// //     label: 'Active',
// //     status: 'success',
// //     date: 'Anderson',
// //     dueDate: 'ryan.mitchell@emailtest.com', // Changed to date
// //     amount: '19876543',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '2',
// //     invoice: 'Invoice-2024-rq857m',
// //     label: 'Active',
// //     status: 'success',
// //     date: '17 Jun, 2024',
// //     dueDate: '6 Aug, 2024',
// //     amount: '$29.99',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '3',
// //     invoice: 'John Doe',
// //     label: 'Active',
// //     status: 'success',
// //     date: 'Anderson',
// //     dueDate: 'ryan.mitchell@emailtest.com',
// //     amount: '19876543',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '4',
// //     invoice: 'Invoice-2024-hg234x',
// //     label: 'Inactive',
// //     status: 'destructive',
// //     date: '21 Apr, 2024',
// //     dueDate: '6 Aug, 2024',
// //     amount: '$6.59',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '5',
// //     invoice: 'Invoice-2024-lp098y',
// //     label: 'Active',
// //     status: 'success',
// //     date: '14 Mar, 2024',
// //     dueDate: '6 Aug, 2024',
// //     amount: '$79.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '6',
// //     invoice: 'Invoice-2024-q196l',
// //     label: 'Active',
// //     status: 'success',
// //     date: '08 Jan, 2024',
// //     dueDate: '6 Aug, 2024',
// //     amount: '$257.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '7',
// //     invoice: 'Invoice-2024-m113s',
// //     label: 'Upcoming',
// //     status: 'warning',
// //     date: '07 Nov, 2024',
// //     dueDate: 'Design Dept', // Changed to date
// //     amount: '$67.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '8',
// //     invoice: 'Invoice-2024-u859c',
// //     label: 'Inactive',
// //     status: 'destructive',
// //     date: '16 May, 2024',
// //     dueDate: '07 Nov, 2024',
// //     amount: '$494.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '9',
// //     invoice: 'Invoice-2024-m803g',
// //     label: 'Active',
// //     status: 'success',
// //     date: '16 Mar, 2024',
// //     dueDate: '16 Mar, 2024',
// //     amount: '$142.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '10',
// //     invoice: 'John Doe',
// //     label: 'Active',
// //     status: 'success',
// //     date: '25 Mar, 2024',
// //     dueDate: '25 Mar, 2024',
// //     amount: '$35.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '11',
// //     invoice: 'Invoice-2024-b907a',
// //     label: 'Active',
// //     status: 'success',
// //     date: '12 Feb, 2024',
// //     dueDate: '12 Feb, 2024',
// //     amount: '$59.99',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '12',
// //     invoice: 'Invoice-2024-n567k',
// //     label: 'Upcoming',
// //     status: 'warning',
// //     date: '01 Mar, 2024',
// //     dueDate: 'Marketing Dept', // Changed to date
// //     amount: '$150.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '13',
// //     invoice: 'Invoice-2024-k453j',
// //     label: 'Inactive',
// //     status: 'destructive',
// //     date: '03 Apr, 2024',
// //     dueDate: '03 Apr, 2024',
// //     amount: '$89.50',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '14',
// //     invoice: 'Invoice-2024-d981q',
// //     label: 'Active',
// //     status: 'success',
// //     date: '20 Feb, 2024',
// //     dueDate: '20 Feb, 2024',
// //     amount: '$200.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '15',
// //     invoice: 'Invoice-2024-p846y',
// //     label: 'Active',
// //     status: 'success',
// //     date: '15 May, 2024',
// //     dueDate: '15 May, 2024',
// //     amount: '$75.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '16',
// //     invoice: 'Invoice-2024-z190x',
// //     label: 'Upcoming',
// //     status: 'warning',
// //     date: '10 Jun, 2024',
// //     dueDate: 'Finance Dept', // Changed to date
// //     amount: '$130.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '17',
// //     invoice: 'Invoice-2024-l892v',
// //     label: 'Active',
// //     status: 'success',
// //     date: '25 Jan, 2024',
// //     dueDate: '25 Jan, 2024',
// //     amount: '$100.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '18',
// //     invoice: 'Invoice-2024-t675c',
// //     label: 'Inactive',
// //     status: 'destructive',
// //     date: '18 Jul, 2024',
// //     dueDate: '18 Jul, 2024',
// //     amount: '$45.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '19',
// //     invoice: 'Invoice-2024-w432r',
// //     label: 'Active',
// //     status: 'success',
// //     date: '09 Aug, 2024',
// //     dueDate: '09 Aug, 2024',
// //     amount: '$60.00',
// //     activity: '2 days ago'
// //   },
// //   {
// //     id: '20',
// //     invoice: 'Invoice-2024-e765n',
// //     label: 'Upcoming',
// //     status: 'warning',
// //     date: '12 Oct, 2024',
// //     dueDate: 'IT Dept', // Changed to date
// //     amount: '$500.00',
// //     activity: '2 days ago'
// //   },
// //   // Add the rest of the items in the same pattern...
// // ];

// const Invoicing = () => {

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [data, setData] = useState([]); // <- stores all agent data
//   const [errors, setErrors] = useState({});
//   const [form, setForm] = useState({});
//   const [selectedCounty, setSelectedCounty] = useState("");
//   const [selectedLanguage, setSelectedLanguage] = useState("");

//   useEffect(() => {
//     handleAutoFetch();
//   }, []);

//   const handleAutoFetch = async () => {
//     console.log("Fetching agents data...");
//     setLoading(true);
//     setMessage("");
//     setErrors({});

//     try {
//       const apiUrl = import.meta.env.VITE_API_URL;

//       const response = await fetch(`${apiUrl}/admin/agents/list`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });

//       const resData = await response.json(); // renamed from 'data'

//       if (!response.ok) {
//         if (resData.errors) {
//           setErrors(resData.errors);
//           setMessage(resData.message || "Validation failed");
//           console.log("Validation failed");
//         } else {
//           setMessage(resData.message || "Something went wrong");
//           console.log("Something went wrong");
//         }
//         return;
//       }

//       if (resData.data.agents.length > 0) {
//         const agentsArray = resData.data.agents;

//         const formattedData = agentsArray.map((agent, index) => ({
//           id: agent.id, // Unique ID
//           firstName: agent.firstName || 'N/A',
//           lastName: agent.lastName || 'N/A',
//           email: agent.email || 'N/A',
//           npn: agent.npn || 'N/A',
//           activity: agent.updatedAt ? formatDistanceToNow(new Date(agent.updatedAt), { addSuffix: true }) : 'N/A',
//           status: agent.status,

//         }));

//         setData(formattedData);
//       } else {
//         setMessage("No agents found.");
//         setData([]);
//       }

//       setMessage("Data loaded successfully!");
//     } catch (err) {
//       setMessage("An unexpected error occurred. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };



//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: 5,
//   });
//   const [rowSelection] = useState({});
//   const [sorting, setSorting] = useState([{ id: 'date', desc: true }]);

//   const ColumnInputFilter = ({ column }) => {
//     return (
//       <Input
//         placeholder="Filter..."
//         value={column.getFilterValue() ?? ''}
//         onChange={(event) => column.setFilterValue(event.target.value)}
//         size="sm"
//         className="max-w-40"
//       />
//     );
//   };

//   const columns = useMemo(
//     () => [
//       {
//         id: 'firstName',
//         accessorFn: (row) => row.firstName,
//         header: ({ column }) => (
//           <DataGridColumnHeader
//             title="First Name"
//             filter={<ColumnInputFilter column={column} />}
//             column={column}
//           />
//         ),

//         cell: (info) => {
//           return info.row.original.firstName;
//         },
//         enableSorting: true,
//         size: 120,
//         meta: {
//           cellClassName: 'px-7',
//         },
//       },

//       {
//         id: 'lastName',
//         accessorFn: (row) => row.lastName,
//         header: ({ column }) => (
//           <DataGridColumnHeader title="Last Name" column={column} />
//         ),

//         cell: (info) => {
//           return info.row.original.lastName;
//         },
//         enableSorting: true,
//         size: 120,
//         meta: {
//           cellClassName: 'px-7',
//         },
//       },
//       {
//         id: 'email',
//         accessorFn: (row) => row.email,
//         header: ({ column }) => (
//           <DataGridColumnHeader title="Email" column={column} />
//         ),

//         cell: (info) => {
//           console.log("info", info.row.original);
//           return info.row.original.email;
//         },
//         enableSorting: true,
//         size: 240,
//         meta: {
//           cellClassName: 'px-7',
//         },
//       },
//       {
//         id: 'npn',
//         accessorFn: (row) => row.npn,
//         header: ({ column }) => (
//           <DataGridColumnHeader title="NPN" column={column} />
//         ),

//         cell: (info) => {
//           return info.row.original.npn;
//         },
//         enableSorting: true,
//         size: 80,
//         meta: {
//           cellClassName: 'px-7',
//         },
//       },
//       {
//         id: 'actions',
//         // header: () => '',
//         enableSorting: false,
//         header: ({ column }) => (
//           <DataGridColumnHeader title="Chat" column={column} />
//         ),
//         cell: () => {
//           return (
//             <ChatSheet
//               trigger={
//                 <Button
//                   onClick={(e) => e.stopPropagation()}
//                   variant="ghost"
//                   mode="icon"
//                   shape="circle"
//                   className="size-9 hover:bg-primary/10 hover:[&_svg]:text-primary"
//                 >
//                   <MessageCircleMore className="size-4.5!" />
//                 </Button>
//               }
//             />
//           );
//         },
//         size: 70,
//         meta: {
//           cellClassName: 'px-6',
//         },
//       },
//       {
//         id: 'activity',
//         // header: () => '',
//         accessorFn: (row) => row.amount,
//         enableSorting: true,
//         header: ({ column }) => (
//           <DataGridColumnHeader title="Activity" column={column} />
//         ),
//         cell: (info) => {
//           return info.row.original.activity;
//         },
//         size: 110,
//         meta: {
//           cellClassName: 'px-7',
//         },
//       },
//       {
//         id: 'status',
//         accessorFn: (row) => row.status,
//         header: ({ column }) => (
//           <DataGridColumnHeader title="Status" column={column} />
//         ),

//         cell: (info) => {
//           const variant = info.row.original.status === 'active' ? 'success' : info.row.original.status === 'inactive' ? 'destructive' : 'warning';

//           return (
//             <Badge variant={variant} appearance="light">
//               {info.row.original.status}
//             </Badge>
//           );
//         },
//         enableSorting: true,
//         size: 90,
//         meta: {
//           cellClassName: 'px-7',
//         },
//       },
//       {
//         accessorKey: 'id',
//         accessorFn: (row) => row.id,
//         header: (''),
//         cell: (info) => {
//           return (
//             // <TableRow>
//             // <TableCell className="text-start">
//             <DropdownMenu2
//               rowID={info.row.id}
//               trigger={
//                 <Button variant="ghost" mode="icon">
//                   <EllipsisVertical />
//                 </Button>
//               }
//             />
//             // {/* </TableCell> */}
//             // </TableRow>
//           );
//         },
//         enableSorting: false,
//         enableHiding: false,
//         enableResizing: false,
//         size: 76,
//         meta: {
//           cellClassName: 'px-7',
//         },
//       },
//     ],

//     [],
//   );

//   const filteredData = useMemo(() => data, [data]);

//   useEffect(() => {
//     const selectedRowIds = Object.keys(rowSelection);

//     if (selectedRowIds.length > 0) {
//       toast(`Total ${selectedRowIds.length} are selected.`, {
//         description: `Selected row IDs: ${selectedRowIds}`,
//         action: {
//           label: 'Undo',
//           onClick: () => console.log('Undo'),
//         },
//       });
//     }
//   }, [rowSelection]);

//   const table = useReactTable({
//     columns,
//     data: filteredData,
//     pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
//     getRowId: (row) => row.id,
//     state: {
//       pagination,
//       sorting,
//     },
//     onPaginationChange: setPagination,
//     onSortingChange: setSorting,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//   });

//   const Toolbar = () => {
//     const { table } = useDataGrid();

//     return (
//       <CardToolbar>
//         <CardHeader className="py-4">
//           <CardHeading>
//             <div className="relative">
//               <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
//               <Input
//                 placeholder="Search Agents"
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="ps-9 w-40"
//               />

//               {/* {searchQuery.length > 0 && (
//                 <Button
//                   mode="icon"
//                   variant="ghost"
//                   className="absolute end-1.5 top-1/2 -translate-y-1/2 h-6 w-6"
//                   onClick={() => setSearchQuery('')}
//                 >
//                   <X />
//                 </Button>
//               )} */}
//             </div>
//           </CardHeading>
//         </CardHeader>
//         <Select defaultValue="active">
//           <SelectTrigger className="w-28">
//             <SelectValue placeholder="Select" />
//           </SelectTrigger>
//           <SelectContent className="w-32">
//             <SelectItem value="active">Active</SelectItem>
//             <SelectItem value="disabled">Disabled</SelectItem>
//             <SelectItem value="pending">Pending</SelectItem>
//           </SelectContent>
//         </Select>
//         <Select defaultValue="Latest">
//           <SelectTrigger className="w-28 mx-3">
//             <SelectValue placeholder="Select" />
//           </SelectTrigger>
//           <SelectContent className="w-32">
//             <SelectItem value="Latest">Latest</SelectItem>
//             <SelectItem value="disabled">Disabled</SelectItem>
//             <SelectItem value="pending">Pending</SelectItem>
//           </SelectContent>
//         </Select>
//         <DataGridColumnVisibility
//           table={table}
//           trigger={
//             <Button variant="outline">
//               <Settings2 />
//               Filters
//             </Button>
//           }
//         />
//       </CardToolbar>
//     );
//   };

//   return (
//     <DataGrid
//       table={table}
//       recordCount={filteredData?.length || 0}
//       tableLayout={{
//         columnsPinnable: true,
//         columnsMovable: true,
//         columnsVisibility: true,
//         cellBorder: true,
//       }}
//     >
//       <Card>
//         <CardHeader>
//           <CardTitle>Showing 10 of 49,053 users</CardTitle>
//           <Toolbar />
//         </CardHeader>
//         <CardTable>
//           <ScrollArea>
//             <DataGridTable />
//             <ScrollBar orientation="horizontal" />
//           </ScrollArea>
//         </CardTable>
//         <CardFooter>
//           <DataGridPagination />
//         </CardFooter>
//       </Card>
//     </DataGrid>
//   );
// };

// export { Invoicing };
import DataTable from 'react-data-table-component';
import { formatDistanceToNow } from 'date-fns';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';





const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled(Button)`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const customStyles = {
  rows: {
    style: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#f5f5f5',
      },
    },
  },
};
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Search Agents"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);


const columns = [
  {
    name: 'ID',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'First Name',
    selector: row => row.firstName,
    sortable: true,
    width: 80,
    meta: {
      cellClassName: 'px-7',
    },
  },
  {
    name: 'Last Name',
    selector: row => row.lastName,
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
    width: '20rem',
  },
  {
    name: 'NPN',
    selector: row => row.npn,
    sortable: true,
  },
  {
    name: 'Chat',
    cell: (row) => {
      const variant =
        row.status === 'active'
          ? 'success'
          : row.status === 'inactive'
            ? 'destructive'
            : 'warning';

      return (
        <ChatSheet
          trigger={
            <Button
              onClick={(e) => e.stopPropagation()}
              variant="ghost"
              mode="icon"
              shape="circle"
              className="size-9 hover:bg-primary/10 hover:[&_svg]:text-primary"
            >
              <MessageCircleMore className="size-4.5!" />
            </Button>
          }
        />
      );
    },
  },
  {
    name: 'Activity',
    selector: row => row.activity,
    sortable: true,
  },
  {
    name: 'Status',
    cell: (row) => {
      const variant =
        row.status === 'active'
          ? 'success'
          : row.status === 'inactive'
            ? 'destructive'
            : 'warning';

      return (
        <Badge variant={variant}>
          {row.status}
        </Badge>
      );
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {

    accessorKey: 'id',
    accessorFn: (row) => row.id,
    header: (''),
    cell: (row) => {
      return (
        <TableRow>
          <TableCell className="text-start">
            <DropdownMenu2
              rowID={row.id}
              trigger={
                <Button variant="ghost" mode="icon">
                  <EllipsisVertical />
                </Button>
              }
            />
          </TableCell>
        </TableRow>
      );
    },
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
    size: 76,
    meta: {
      cellClassName: 'px-7',
    },
  }
];


function Invoicing() {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]); // <- stores all agent data
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    handleAutoFetch();
  }, []);

  const handleAutoFetch = async () => {
    console.log("Fetching agents data...");
    setLoading(true);
    setMessage("");
    setErrors({});

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const response = await fetch(`${apiUrl}/admin/agents/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const resData = await response.json(); // renamed from 'data'

      if (!response.ok) {
        if (resData.errors) {
          setErrors(resData.errors);
          setMessage(resData.message || "Validation failed");
          console.log("Validation failed");
        } else {
          setMessage(resData.message || "Something went wrong");
          console.log("Something went wrong");
        }
        return;
      }

      if (resData.data.agents.length > 0) {
        const agentsArray = resData.data.agents;

        const formattedData = agentsArray.map((agent, index) => ({
          id: agent.id, // Unique ID
          firstName: agent.firstName || 'N/A',
          lastName: agent.lastName || 'N/A',
          email: agent.email || 'N/A',
          npn: agent.npn || 'N/A',
          activity: agent.updatedAt ? formatDistanceToNow(new Date(agent.updatedAt), { addSuffix: true }) : 'N/A',
          status: agent.status,

        }));

        setData(formattedData);
      } else {
        setMessage("No agents found.");
        setData([]);
      }
      console.log("Data loaded successfully:", data);
      setMessage("Data loaded successfully!");
    } catch (err) {
      setMessage("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = data.filter(item => {
    const term = filterText.toLowerCase();
    return (
      (item.firstName && item.firstName.toLowerCase().includes(term)) ||
      (item.lastName && item.lastName.toLowerCase().includes(term)) ||
      (item.email && item.email.toLowerCase().includes(term)) ||
      (item.npn && item.npn.toLowerCase().includes(term))
    );
  });

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };
    return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);
  return <DataTable  columns={columns} data={filteredItems} pagination paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
    subHeader subHeaderComponent={subHeaderComponentMemo} persistTableHead customStyles={customStyles} onRowClicked={(row) => { navigate(`/admin/agent/detail/${row.id}`)}}/>;


  // return (style={{cursor: 'pointer'}}/
  //   <DataTable
  //     title="Contact List"
  //     columns={columns}
  //     data={data}
  //     pagination
  //     paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
  //     subHeader
  //     subHeaderComponent={subHeaderComponentMemo}
  //     selectableRows
  //     persistTableHead
  //   />
  // );
};
export { Invoicing }