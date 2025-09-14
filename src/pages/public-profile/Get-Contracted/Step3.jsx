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

const Step3 = () => {

    const [submit, setSubmit] = useState(true);


    return (
        <Fragment>
            <Steps currentStep={2} />

            <Container>
                <h2 className="text-gray-950">Licensing Information</h2>
                <p className="text-gray-600">Click on the carrier logo below to select your carrier(s), then scroll down and click “NEXT” to continue.</p>

                <Card className="p-8 my-3 lg:p-12">
                    <CardContent>
                        <div className="flex justify-between py-5">
                            <div className='flex'>
                                <div style={{ width: '5rem', fontSize: '15px', lineHeight: '15px', marginTop: '1rem' }}>First Name</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', marginLeft: '2rem' }} placeholder='First Name' />
                            </div>
                            <div className='flex'>
                                <div style={{ width: '5rem', fontSize: '15px', lineHeight: '15px', marginTop: '1rem' }}>Last Name</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', marginLeft: '2rem' }} placeholder='Last Name' />
                            </div>
                        </div>
                        <div className="flex justify-between py-5">
                            <div className='flex'>
                                <div style={{ width: '5rem', fontSize: '15px', lineHeight: '15px', marginTop: '1rem' }}>Title</div>
                                <input className='px-4' type="text" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', marginLeft: '2rem' }} placeholder='Title' />
                            </div>
                            <div className='flex'>
                                <div style={{ width: '5rem', fontSize: '15px', lineHeight: '15px', marginTop: '1rem' }}>Phone</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', marginLeft: '2rem' }} placeholder='Enter you number' />
                            </div>
                        </div>
                        <div className="flex justify-between py-5">
                            <div className='flex' style={{ width: '100%' }}>
                                <div style={{ width: '5rem', fontSize: '15px', lineHeight: '15px', marginTop: '1rem' }}>Email</div>
                                <input className='px-4' type="text" style={{ width: '100%', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', marginLeft: '2rem' }} placeholder='example@gmail.com' />
                            </div>
                        </div>
                        <div className="flex justify-between py-5">
                            <div className='flex' style={{ width: '100%' }}>
                                <div style={{ width: '5rem', fontSize: '15px', lineHeight: '15px', marginTop: '1rem' }}>Address</div>
                                <input className='px-4' type="text" style={{ width: '100%', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', marginLeft: '2rem' }} placeholder='Enter your address' />
                            </div>
                        </div>
                        <div className="flex justify-between py-5">
                            <div className='flex'>
                                <div style={{ width: '5rem', fontSize: '15px', lineHeight: '15px', marginTop: '1rem' }}>City</div>
                                <input className='px-4' type="text" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', marginLeft: '2rem' }} placeholder='Enter your city' />
                            </div>
                            <div className='flex'>
                                <div style={{ width: '5rem', fontSize: '15px', lineHeight: '15px', marginTop: '1rem' }}>State</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', marginLeft: '2rem' }} placeholder='Enter your state' />
                            </div>
                        </div>
                        <div className="flex justify-between py-5">
                            <div className='flex'>
                                <div style={{ width: '5rem', fontSize: '15px', lineHeight: '15px', marginTop: '1rem' }}>Coutny</div>
                                <input className='px-4' type="text" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', marginLeft: '2rem' }} placeholder='Enter your country' />
                            </div>
                            <div className='flex'>
                                <div style={{ width: '5rem', fontSize: '15px', lineHeight: '15px', marginTop: '1rem' }}>Zip Code</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', marginLeft: '2rem' }} placeholder='City zip code' />
                            </div>
                        </div>
                        <div className="flex grow justify-end pt-5 lg:pt-7.5">
                            <Link to={'/agent/get-contracted/step-2'}>
                                <Button className='px-12 mx-4  py-5 bg-gray-500 text-white'>
                                    Previous
                                </Button>
                            </Link>
                            <Link to={'/agent/get-contracted/completed'}>
                                <Button className={submit ? 'px-13' : 'hidden'} >
                                    Next
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </Fragment>
    );
};

export { Step3 };
