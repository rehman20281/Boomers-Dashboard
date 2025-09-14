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
import { fa } from '@faker-js/faker';

const Step2 = () => {
    const [submit, setSubmit] = useState(true);

    const [upline, setUpline] = useState('');
    const [askUpline, setAskUpline] = useState(false);
    const [policy, setPolicy] = useState('');
    const handleUpline = (event) => {
        setUpline(event.target.value);
        if (upline === 'Yes') {
            setAskUpline(true)
        }else if (upline === 'No') {
            setAskUpline(false)
        }
    };
    const handlePolicy = (event) => {
        setPolicy(event.target.value);
    };

console.log(askUpline)
    return (
        <Fragment>
            <Steps currentStep={1} />

            <Container>
                <h2 className="text-gray-950">Licensing Information</h2>
                <p className="text-gray-600">Click on the carrier logo below to select your carrier(s), then scroll down and click “NEXT” to continue.</p>

                <Card className="p-8 my-3 lg:p-12">
                    <CardContent>
                        <div className="flex justify-between py-5">
                            <div className='flex'>
                                <div style={{ width: '9rem', fontSize: '15px', lineHeight: '15px' }}>National Producer Number (NPN)</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px'}} placeholder='8927289' />
                            </div>
                            <div className='flex'>
                                <div style={{ width: '9rem', fontSize: '15px', lineHeight: '15px' }}>Social Security Number</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px',}} placeholder='Enter you number' />
                            </div>
                        </div>
                        <div className="flex justify-between py-5">
                            <div className='flex'>
                                <div style={{ width: '9rem', fontSize: '15px', lineHeight: '15px' }}>Resident License State</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px', }} placeholder='8927289' />
                            </div>
                            <div className='flex'>
                                <div style={{ width: '9rem', fontSize: '15px', lineHeight: '15px' }}>Other States I'm Licensed In (if applicable)</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px',}} placeholder='Enter you number' />
                            </div>
                        </div>
                        <div className="flex justify-between py-5">
                            <div className='flex'>
                                <div style={{ width: '9rem', fontSize: '15px', lineHeight: '15px' }}>Are you working with an immediate upline?</div>
                                <div className="flex justify-content-center my-2 mx-4" style={{ width: '26rem',}}>
                                    <label className='flex'>
                                        <input type="radio" value="Yes" checked={upline === 'Yes'} onChange={handleUpline} />
                                        <div style={{ marginLeft: '0.5rem',}}>Yes</div>
                                    </label>
                                    <label className='flex' style={{ marginLeft: '1rem' }}>
                                        <input type="radio" value="No" checked={upline === 'No'} onChange={handleUpline} />
                                        <div style={{ marginLeft: '0.5rem',}}>No</div>
                                    </label>
                                </div>
                            </div>
                            <div className='flex'>
                                <div style={{ width: '9rem', fontSize: '15px', lineHeight: '15px' }}>Do you have an active E&O policy?</div>
                                <div className="flex justify-content-center my-2 mx-4" style={{ width: '26rem',}}>
                                    <label className='flex'>
                                        <input type="radio" value="Yes" checked={policy === 'Yes'} onChange={handlePolicy} />
                                        <div style={{ marginLeft: '0.5rem',}}>Yes</div>
                                    </label>
                                    <label className='flex' style={{ marginLeft: '1rem' }}>
                                        <input type="radio" value="No" checked={policy === 'No'} onChange={handlePolicy} />
                                        <div style={{ marginLeft: '0.5rem',}}>No</div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={askUpline ? "hidden":"flex justify-between py-5"}>
                            <div className='flex'>
                                <div style={{ width: '9rem', fontSize: '15px', lineHeight: '15px' }}>Upline Name</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px',}} placeholder='8927289' />
                            </div>
                            <div className='flex'>
                                <div style={{ width: '9rem', fontSize: '15px', lineHeight: '15px' }}>Other States I'm Licensed In (if applicable)</div>
                                <input className='px-4' type="numbers" style={{ width: '25rem', height: '3rem', border: '2px solid #d4cdcdff', borderRadius: '8px',}} placeholder='Enter you number' />
                            </div>
                        </div>
                        <div className="flex justify-between pt-22">
                            <p className='text-gray-600'>Get our discounted Calsurance policy here. Recommended amount: $1MM/$3MM </p>
                        </div>
                        <div className="flex grow justify-end pt-5 lg:pt-7.5">
                            <Link to={'/agent/get-contracted/step-1'}>
                                <Button className='px-12 mx-4  py-5 bg-gray-500 text-white'>
                                    Previous
                                </Button>
                            </Link>
                            <Link to={'/agent/get-contracted/step-3'}>
                                <Button className={submit ? 'px-13 py-5 ' : 'hidden'} >
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

export { Step2 };
