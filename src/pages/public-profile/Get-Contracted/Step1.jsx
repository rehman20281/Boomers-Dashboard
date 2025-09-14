import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Steps } from '../empty/components/steps';
import { useState, useEffect } from 'react';
import { CardProject, CardProjectRow } from '@/partials/cards';
import { LayoutGrid, List } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Container } from '@/components/common/container';

const Step1 = () => {

    const [activeView, setActiveView] = useState('cards');
    const [selectedProjects, setSelectedProjects] = useState([]);
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (selectedProjects.length > 0) {
            setSubmit(true);
        } else {
            setSubmit(false);
        }
    }, [selectedProjects]);

    const toggleSelect = (index) => {
        setSelectedProjects((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index) // remove if already selected
                : [...prev, index] // add if not selected
        );
    };

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
        const isSelected = selectedProjects.includes(index);

        return (
            <div
                key={index}
                onClick={() => toggleSelect(index)}
                className={`cursor-pointer rounded-xl border p-2 transition ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
                    }`}
            >
                <CardProject
                    logo={project.logo}
                    name={project.name}
                    description={project.description}
                    state={project.state}
                    status={project.status}
                    team={project.team}
                />
            </div>
        );
    };


    const renderItem = (item, index) => {
        const isSelected = selectedProjects.includes(index);

        return (
            <div
                key={index}
                onClick={() => toggleSelect(index)}
                className={`cursor-pointer rounded-lg border p-2 transition ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
                    }`}
            >
                <CardProjectRow
                    logo={item.logo}
                    name={item.name}
                    description={item.description}
                    status={item.status}
                    progress={item.progress}
                    team={item.team}
                />
            </div>
        );
    };


    return (
        <Fragment>
            <Steps currentStep={0} />

            <Container>
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
                                <Button className={submit ? 'hidden' : 'px-13 bg-gray-500 text-white'}>
                                    Next
                                </Button>
                                <Link to={'/agent/get-contracted/step-2'}>
                                    <Button className={submit ? 'px-13' : 'hidden'} >
                                        Next
                                    </Button>
                                </Link>
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
                                <Button className={submit ? 'hidden' : 'px-13 bg-gray-500 text-white'}>
                                    Next
                                </Button>
                                <Link to={'/agent/get-contracted/step-2'}>
                                    <Button className={submit ? 'px-13' : 'hidden'} >
                                        Next
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </Fragment>
    );
};

export { Step1 };
