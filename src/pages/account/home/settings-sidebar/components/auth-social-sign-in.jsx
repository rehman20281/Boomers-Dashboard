import { Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Container } from '@/components/common/container';

const AuthSocialSignIn = () => {
  const items = [
    {
      logo: 'google.svg',
      title: 'Google',
      email: 'jasontatum@ktstudio.io',
      checkbox: true,
    },
    {
      logo: 'linkedin.svg',
      title: 'Linkedin',
      email: 'jasontt@keenthemes.co',
      checkbox: false,
    },
  ];

  const blocks = [
    {
      logo: 'apple-black.svg',
      logoDark: 'apple-white.svg',
      title: 'Sign in with Apple',
    },
    {
      logo: 'microsoft-5.svg',
      title: 'Sign in with Microsoft',
    },
    {
      logo: 'facebook.svg',
      title: 'Sign in with Facebook',
    },
  ];

  const renderItem = (item, index) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 px-3.5 py-2.5"
      >
        <div className="flex items-center flex-wrap gap-3.5">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
            className="size-6 shrink-0"
            alt="image"
          />

          <div className="flex flex-col gap-0.5">
            <Link
              to="#"
              className="text-sm font-medium text-mono hover:text-primary-active"
            >
              {item.title}
            </Link>
            <Link
              to="#"
              className="text-sm text-secondary-foreground hover:text-primary-active"
            >
              {item.email}
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Switch
            defaultChecked={item.checkbox}
            size="sm"
            value={item.checkbox ? '1' : '2'}
          />

          <Button variant="ghost" mode="icon">
            <Trash2 />
          </Button>
        </div>
      </div>
    );
  };

  const renderBlock = (block, index) => {
    return (
      <Button key={index} variant="outline">
        {block.logoDark ? (
          <>
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${block.logo}`)}
              className="dark:hidden size-5"
              alt="image"
            />

            <img
              src={toAbsoluteUrl(`/media/brand-logos/${block.logoDark}`)}
              className="light:hidden size-5"
              alt="image"
            />
          </>
        ) : (
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${block.logo}`)}
            className="size-5"
            alt="image"
          />
        )}
        {block.title}
      </Button>
    );
  };

  return (
    <Card>
      <CardHeader id="auth_social_sign_in">
        <CardTitle>Social Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6">
            {/* Header */}
            <div className="flex justify-end mb-4">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                + Add Leads
              </button>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Coverage Type</label>
                  <input
                    type="text"
                    placeholder="Coverage type"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Carrier</label>
                  <input
                    type="text"
                    placeholder="Carrier"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Effective Date</label>
                  <input
                    type="date"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">App Submit Date</label>
                  <input
                    type="date"
                    placeholder="Submit date"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Policy No</label>
                  <input
                    type="text"
                    placeholder="123243535"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Product</label>
                  <input
                    type="text"
                    placeholder="21224342"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Renewal Date</label>
                  <input
                    type="text"
                    placeholder="Daniela"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Agent/Agency</label>
                  <input
                    type="text"
                    placeholder="Daniela"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Member ID</label>
                  <input
                    type="text"
                    placeholder="Daniela"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                <span className="mr-4">Create Date: 04/15/2025 10:29 AM</span>
                <span>Last Update: 04/15/2025 10:29 AM</span>
              </p>
              <button className="mt-4 md:mt-0 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                Save Update
              </button>
            </div>
          </div>
        </Container>
      </CardContent>
    </Card>
  );
};

export { AuthSocialSignIn };
