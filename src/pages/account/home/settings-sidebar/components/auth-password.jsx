import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const AuthPassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Card>
      <CardHeader id="auth_password">
        <CardTitle>Documents and Links</CardTitle>
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
            <Label className="flex w-full max-w-56">Attached Files & Links</Label>
            <div className="flex justify-center items-center min-h-[25rem] bg-gray-50">
              <div className="w-[30rem] mx-30 rounded-lg border border-dashed border-gray-300 bg-white shadow-sm flex flex-col items-center justify-center p-6 text-center">

                  {/* Illustration */}
                  <div className="mb-4">
                    <img
                      src="/media/app/download.png" // replace with your illustration
                      alt="Upload Illustration"
                      className="w-32 h-32 mx-auto"
                    />
                  </div>

                  {/* Upload Button */}
                  <button
                    type="button"
                    className="px-5 py-2 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
                  >
                    📎 Upload Your File
                  </button>
              </div>
            </div>
            {/* <Input
              type="password"
              placeholder="Your current password"
              defaultValue={currentPassword}
              className='py-15'
              onChange={(e) => setCurrentPassword(e.target.value)}
            /> */}
          </div>
        </div>
        <div className="flex justify-end pt-2.5">
          <Button>Reset Password</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { AuthPassword };
