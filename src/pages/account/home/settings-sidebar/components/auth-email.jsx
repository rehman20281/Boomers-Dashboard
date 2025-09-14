import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Container } from '@/components/common/container';

const AuthEmail = () => {
  const [emailInput, setEmailInput] = useState('jason@studio.io');

  return (
    <Card className="pb-2.5">
      <CardHeader id="auth_email">
        <CardTitle>Edit Lead Details (#2388604)</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5 pt-7.5">
        {/* <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <Label className="flex w-full max-w-56">Email</Label>
            <div className="flex flex-col items-start grow gap-7.5 w-full">
              <Input
                className="input"
                type="text"
                defaultValue={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />

              <div className="flex items-center gap-7.5">
                <Label
                  htmlFor="auto-update"
                  className="text-foreground text-sm"
                >
                  Active
                </Label>
                <Switch defaultChecked size="sm" />
                <Label
                  htmlFor="auto-update"
                  className="text-foreground text-sm"
                >
                  Primary
                </Label>
                <Switch size="sm" />
              </div>
              <span className="form-info text-foreground text-sm font-normal">
                Input your email, designate as primary for priority updates.
                Toggle to seamlessly customize your communication preferences
              </span>
            </div>
          </div>
        </div> */}
        <Container>
          <div className='my-12'>
            <div className="max-w-6xl mx-auto bg-white p-6  rounded-xl">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Title */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter your number"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-1">Address Type</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Select City */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Select City</label>
                  <select className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Enter your city</option>
                  </select>
                </div>

                {/* Select State */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Select State</label>
                  <select className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Enter your state</option>
                  </select>
                </div>

                {/* Country */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Country</label>
                  <select className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Enter your country</option>
                  </select>
                </div>

                {/* Zip Code */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  <input
                    type="text"
                    placeholder="City zip code"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </form>
            </div>
          </div>
        </Container>
            <div>Important Dates</div>
        <div className="flex justify-between">
          <div className='flex'>
            <div><span>Create Date: </span>04/15/2025 10:29 AM</div>
            <div className='mx-3'><span>Last Update: </span>04/15/2025 10:29 AM</div>
          </div>
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { AuthEmail };
