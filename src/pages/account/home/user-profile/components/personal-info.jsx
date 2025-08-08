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

const handleChange = (e) => {
  const { name, value } = e.target;
  setData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const PersonalInfo = (data) => {
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Personal Info</CardTitle>
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

const LicensingInfo = (data) => {
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
                National Producer Number
              </TableCell>
              <TableCell className="py-2 text-foreground font-normaltext-sm">
                <input type="text" value={data.npn ?? 'N/A'} name='npn' onChange={handleChange} />
              </TableCell>
            </TableRow>
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
  const [data, setData] = useState([]);
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Bio</CardTitle>
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto pb-3 p-0">
        <Table className="align-middle text-sm text-muted-foreground">
          <TableBody>
            <TableRow>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                Lorem ipsum dolor sit amet consectetur. Iaculis scelerisque nunc tellus lacus vitae odio. Lobortis at senectus adipiscing donec cras mauris risus nulla elementum. In sit posuere eget ut. Donec facilisis erat eu molestie. Est blandit sit orci commodo velit faucibus. Lorem malesuada ornare auctor nam viverra amet platea sollicitudin enim.
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

const LoginInfo = (data) => {
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

const BankInfo = (data) => {
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
