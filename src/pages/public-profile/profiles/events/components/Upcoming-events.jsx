import React from 'react';
import { Link, Links } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

const UpcomingEvents = () => {
  const items = [
    {
      month: 'Apr',
      date: '10',
      image: '7.jpg',
      label: 'Webinar Series',
      title: 'Digital Marketing Mastery Series',
      desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.',
    },
    {
      month: 'Apr',
      date: '18',
      image: '8.jpg',
      label: 'Webinar Series',
      title: 'Digital Marketing Mastery Series',
      desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.',
    },
    {
      month: 'Aug',
      date: '29',
      image: '9.jpg',
      label: 'Tech Conference',
      title: 'Future Tech Exploration',
      desc: 'Delve into tech innovations and emerging trends at this influential conference for tech enthusiasts.',
    },
    {
      month: 'Apr',
      date: '21',
      image: '7.jpg',
      label: 'Webinar Series',
      title: 'Digital Marketing Mastery Series',
      desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.',
    },
    {
      month: 'Apr',
      date: '28',
      image: '9.jpg',
      label: 'Webinar Series',
      title: 'Digital Marketing Mastery Series',
      desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.',
    },
    {
      month: 'Apr',
      date: '18',
      image: '8.jpg',
      label: 'Webinar Series',
      title: 'Digital Marketing Mastery Series',
      desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.',
    },
    {
      month: 'Aug',
      date: '29',
      image: '9.jpg',
      label: 'Tech Conference',
      title: 'Future Tech Exploration',
      desc: 'Delve into tech innovations and emerging trends at this influential conference for tech enthusiasts.',
    },
    {
      month: 'Apr',
      date: '21',
      image: '8.jpg',
      label: 'Webinar Series',
      title: 'Digital Marketing Mastery Series',
      desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.',
    },
    {
      month: 'Apr',
      date: '28',
      image: '7.jpg',
      label: 'Webinar Series',
      title: 'Digital Marketing Mastery Series',
      desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.',
    },
  ];

  const [calendar, setCalendar] = useState(false);
  const handleCalendar = () => {
    setCalendar(!calendar);
  };
  const renderItem = (item, index) => {
    return (
      <React.Fragment key={index}>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex items-center gap-5 shrink-0">
            <div className="border border-orange-200 dark:border-orange-950 rounded-lg" onClick={handleCalendar}>
              <div className="flex items-center justify-center border-b border-orange-200 bg-orange-100 dark:border-orange-950 dark:bg-orange-950/30 rounded-t-lg">
                <span className="text-sm text-orange-400 fw-medium p-2">
                  {item.month}
                </span>
              </div>
              <div className="flex items-center justify-center size-12">
                <span className="font-medium text-foreground text-xl tracking-tight">
                  {item.date}
                </span>
              </div>
            </div>
            <img
              src={toAbsoluteUrl(`/media/images/600x400/${item.image}`)}
              className="rounded-lg max-h-[120px] max-w-full"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to="#"
              className="text-sm font-medium text-orange-400 leading-[14px] hover:text-primary-active mb-px"
            >
              {item.label}
            </Link>
            <Link
              to="#"
              className="text-base font-medium hover:text-primary text-mono leading-4"
            >
              {item.title}
            </Link>
            <p className="text-sm text-foreground leading-[22px]">
              {item.desc}
            </p>
          </div>
        </div>
        <div className="not-last:border-b border-b-border"></div>
      </React.Fragment>
    );
  };

  return (
    <>
      <div style={calendar ? { display: 'none' } : {}}>
        <Card>
          <CardHeader>
            <CardTitle>Recent Events</CardTitle>
            <Button mode="link" underlined="dashed" asChild>
              <Link to="/public-profile/works">View All</Link>
            </Button>
          </CardHeader>
          <CardContent className="lg:pt-7 pt-5 pb-2">
            <div className="grid gap-3.5">
              {items.map((item, index) => {
                return renderItem(item, index);
              })}
            </div>
          </CardContent>
        </Card>
      </div>
      <div style={calendar ? {} : { display: 'none' }}>
        {items.map((item, index) => (
          <Calendar
            key={index}
            initialFocus
            mode="range"
            defaultMonth={new Date(`${item.month} 1, 2024`)} // convert to Date object
            selected={item.date}
            onSelect={() => { }}
            numberOfMonths={1}
          />
        ))}
      </div>
    </>
  );
};

export { UpcomingEvents };
