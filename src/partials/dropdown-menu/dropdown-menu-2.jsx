import { CloudCog, FileInput, Settings, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

export function DropdownMenu2({ trigger, rowID }) {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]" side="bottom" align="end">
        {/* <DropdownMenuItem asChild>
          <Link to="/account/home/settings-enterprise">
            <Settings />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/account/members/import-members">
            <FileInput />
            <span>Import</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/account/activity">
            <CloudCog />
            <span>Activity</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="#">
            <ThumbsDown />
            <span>Report</span>
          </Link>
        </DropdownMenuItem> */}
        <DropdownMenuItem asChild>
          <div onClick={(e) => { e.stopPropagation(); navigate(`/admin/agent/detail/edit/${rowID}`);}}>
            <FileInput />
            <span>Edit</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/account/activity">
            <CloudCog />
            <span>Email Verification</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
