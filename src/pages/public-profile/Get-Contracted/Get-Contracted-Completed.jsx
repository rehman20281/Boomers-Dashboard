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

const GetContractedCompleted = () => {



    return (
        <Fragment>
            <Steps currentStep={4} />

            <Container>
                <Card className="p-8 my-3 lg:p-12">
                    <CardContent>
                        <div className="grid justify-center py-5">
                            <img
                                src={toAbsoluteUrl('/media/illustrations/getcontracted-completed.png')}
                                className="dark:hidden max-h-[170px]"
                                alt="image"
                            />

                            <img
                                src={toAbsoluteUrl('/media/illustrations/getcontracted-completed.png')}
                                className="light:hidden max-h-[170px]"
                                alt="image"
                            />
                        </div>
                        <div className="text-lg font-medium text-mono text-center">
                            <h1>
                                Data Submited
                            </h1>
                            <h1>
                                Successfully
                            </h1>
                        </div>
                        <div className="text-lg font-medium text-mono text-center my-4">
                            <Link to={"/agent/my-contracts"}>
                                <Button className='px-8'>
                                    My Contracts
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </Fragment>
    );
};

export { GetContractedCompleted };
