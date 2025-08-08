import { Link, Outlet } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Card, CardContent } from '@/components/ui/card';

export function BrandedLayout() {
  return (
    <>
      <style>
        {`
          .branded-bg {
            background-color: red;
            }
          .dark .branded-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/1-dark.png')}');
          }
        `}
      </style>
      <div className="grid lg:grid-cols-2 grow">
        <div className="flex justify-center items-center p-8 lg:p-10 order-2 lg:order-1">
          <Card className="w-full max-w-[400px]">
            <CardContent className="p-6">
              <Outlet />
            </CardContent>
          </Card>
        </div>

        <div className="lg:rounded-xl lg:border lg:border-border lg:m-5 order-1 lg:order-2 bg-top xxl:bg-center xl:bg-cover bg-no-repeat branded-bg">
          <div className="flex flex-col p-8 lg:p-16 gap-4">
            <Link to="/">
              <img
                src={toAbsoluteUrl('/media/app/logo.svg')}
                className="h-[108px] max-w-none"
                alt=""
              />
            </Link>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold text-mono" style={{ color: '#fff' }}>
                Secure Dashboard Access
              </h3>
              <div className="text-base font-medium text-secondary-foreground" style={{ color: '#fff' }}>
                A robust authentication gateway ensuring
                <br /> secure&nbsp;
                <span className="">
                  efficient user access
                </span>
                &nbsp;to the Metronic
                <br /> Dashboard interface.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
