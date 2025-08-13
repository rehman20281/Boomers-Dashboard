import { useState } from 'react';
import { CardProject, CardProjectRow } from '@/partials/cards';
import { LayoutGrid, List } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Projects2 = () => {
  const [activeView, setActiveView] = useState('cards');

  const projects = [
    // {
    //   logo: 'visa.svg',
    //   title: 'Aetna',
    //   email: 'Health Insurance Plans',
    //   label: true,
    // },
    {
      logo: 'visa.svg',
      name: 'Aetna',
      description: 'Health Insurance Plans',
      status: {
        label: 'true',
        variant: 'success',
      },
      state: 'California',
    },
    {
      logo: 'visa.svg',
      name: 'Aetna',
      description: 'Health Insurance Plans',
      status: {
        label: 'true',
        variant: 'success',
      },
      state: 'California',
    },
    {
      logo: 'visa.svg',
      name: 'Aetna',
      description: 'Health Insurance Plans',
      status: {
        label: 'true',
        variant: 'success',
      },
      state: 'California',
    },
    {
      logo: 'visa.svg',
      name: 'Aetna',
      description: 'Health Insurance Plans',
      status: {
        label: 'true',
        variant: 'success',
      },
      state: 'California',
    },
    {
      logo: 'visa.svg',
      name: 'Aetna',
      description: 'Health Insurance Plans',
      status: {
        label: 'true',
        variant: 'success',
      },
      state: 'California',
    },
    {
      logo: 'visa.svg',
      name: 'Aetna',
      description: 'Health Insurance Plans',
      status: {
        label: 'true',
        variant: 'success',
      },
      state: 'California',
    },
  ];

  const renderProject = (project, index) => {
    return (
      <CardProject
        logo={project.logo}
        name={project.name}
        description={project.description}
        state={project.state}
        // startDate={project.startDate}
        // endDate={project.endDate}
        status={project.status}
        // progress={project.progress}
        team={project.team}
        key={index}
      />
    );
  };

  const renderItem = (item, index) => {
    return (
      <CardProjectRow
        logo={item.logo}
        name={item.name}
        description={item.description}
        status={item.status}
        progress={item.progress}
        team={item.team}
        key={index}
      />
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-mono font-semibold">
          {projects.length} Projects
        </h3>
        <ToggleGroup
          type="single"
          variant="outline"
          value={activeView}
          onValueChange={(value) => {
            if (value) setActiveView(value);
          }}
        >
          <ToggleGroupItem value="cards">
            <LayoutGrid size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="list">
            <List size={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {activeView === 'cards' && (
        <div id="projects_cards">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
            {projects.map((project, index) => {
              return renderProject(project, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="#">Show more projects</Link>
            </Button>
          </div>
        </div>
      )}
      {activeView === 'list' && (
        <div id="projects_list">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            {projects.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="#">Show more projects</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Projects2 };
