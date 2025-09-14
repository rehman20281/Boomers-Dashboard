import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Empty = () => {
  return (
    <Fragment>
      <Card className="p-8 my-3 lg:p-12">
        <CardContent>
          <div className="grid justify-center py-5">
            <img
              src={toAbsoluteUrl('/media/illustrations/36.png')}
              className="dark:hidden max-h-[170px]"
              alt="image"
            />

            <img
              src={toAbsoluteUrl('/media/illustrations/36.png')}
              className="light:hidden max-h-[170px]"
              alt="image"
            />
          </div>
          <div className="text-lg font-medium text-mono text-center">
            <Link to={"/agent/get-contracted/step-1"}>
              <Button >
                Get Contracted
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className="p-8 lg:p-2">
        <CardContent>
          <div className="text-lg font-medium text-mono text-start">
            Please Note:
          </div>
          <div className="text-sm text-secondary-foreground text-start gap-1">
            <p>Contracting with The Brokerage means you agree to receive communications about our products and services. We will not sell your information.</p>
            <p>Some carriers charge fees for non-resident appointments. For more information, please email contracting@thebrokerageinc.com.</p>
            <p>If you need to know which carriers you are currently appointed with, please email contracting@thebrokerageinc.com.</p>
            <p>Uplines (if applicable) must be appointed in any state you are in, or the appointment may be denied.</p>
          </div>
        </CardContent>
      </Card>      

    </Fragment>
  );
};

export { Empty };
