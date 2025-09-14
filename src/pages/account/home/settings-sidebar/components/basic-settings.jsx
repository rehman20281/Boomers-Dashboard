import { useState } from 'react';
import { AvatarInput } from '@/partials/common/avatar-input';
import { format } from 'date-fns';
import { CalendarDays, CalendarIcon, Clock3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DateInput, TimeField } from '@/components/ui/datefield';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input, InputAddon, InputGroup } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

const BasicSettings = () => {
  const [date, setDate] = useState(new Date(1984, 0, 20));
  const [nameInput, setNameInput] = useState('Jason Tatum');
  const [companyInput, setCompanyInput] = useState('KeenThemes');
  const [phoneInput, setPhoneInput] = useState('');

  // Docs: https://www.reui.io/docs/date-picker#date--time
  const today = new Date();
  const [availabilityDate, setAvailabilityDate] = useState(today);

  return (
    <Card className="pb-2.5">
      <CardHeader id="basic_settings">
        <CardTitle>Notes & Conversations</CardTitle>
        <div className='flex items-baseline flex-wrap lg:flex-nowrap gap-2.5'>
          <Input
            placeholder="Search Agents"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ps-9 w-40"
          />
          <Select defaultValue="active">
            <SelectTrigger className="w-28">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="w-32">
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="disabled">Disabled</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="Latest">
            <SelectTrigger className="w-28 mx-3">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="w-32">
              <SelectItem value="Latest">Latest</SelectItem>
              <SelectItem value="disabled">Disabled</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="grid gap-5">
        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <Label className="flex w-full items-center gap-1 max-w-56">
              Notes
            </Label>
            <Input
              type="text"
              defaultValue={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="h-45"
            />
          </div>
        </div>
        <div className="flex justify-end pt-2.5">
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { BasicSettings };
