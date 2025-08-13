import { Fragment } from 'react';
import { PageMenu } from '@/pages/public-profile';
import { UserHero } from '@/partials/common/user-hero';
import { DropdownMenu9 } from '@/partials/dropdown-menu/dropdown-menu-9';
import { Navbar, NavbarActions } from '@/partials/navbar/navbar';
import {
  EllipsisVertical,
  Mail,
  MapPin,
  MessagesSquare,
  Users,
  Zap,
} from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/container';
import { Projects2 } from './components';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function ProjectColumn3Page() {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-1.png')}
      className="rounded-full border-3 border-green-500 h-[100px] shrink-0"
      alt="image"
    />
  );

  return (
    <Fragment>
      {/* <UserHero
        name="Jenny Klabber"
        image={image}
        info={[
          { label: 'KeenThemes', icon: Zap },
          { label: 'SF, Bay Area', icon: MapPin },
          { email: 'jenny@kteam.com', icon: Mail },
        ]}
      /> */}
      <Container className="mb-10">
        <h5>
          Carriers
        </h5>
        <p className="text-secondary-foreground">
          400+ Carriers
        </p>
      </Container>

      <Container>
        <Navbar>
          <PageMenu />
          <NavbarActions>
            <div className="relative">
              <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
              <Input
                placeholder="Search Agents"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ps-9 w-40"
              />
            </div>
            <Button>
              New Carrier
            </Button>
          </NavbarActions>
        </Navbar>
      </Container>
      <Container>
        <Projects2 />
      </Container>
    </Fragment>
  );
}
