import React from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

const UpcomingEvents = () => {
  const items = [
    { month: 'Apr', date: '10', image: '7.jpg', label: 'Webinar Series', title: 'Digital Marketing Mastery Series', desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.' },
    { month: 'Apr', date: '18', image: '8.jpg', label: 'Webinar Series', title: 'Digital Marketing Mastery Series', desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.' },
    { month: 'Aug', date: '29', image: '9.jpg', label: 'Tech Conference', title: 'Future Tech Exploration', desc: 'Delve into tech innovations and emerging trends at this influential conference for tech enthusiasts.' },
    { month: 'Apr', date: '21', image: '7.jpg', label: 'Webinar Series', title: 'Digital Marketing Mastery Series', desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.' },
    { month: 'Apr', date: '28', image: '9.jpg', label: 'Webinar Series', title: 'Digital Marketing Mastery Series', desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.' },
    { month: 'Apr', date: '18', image: '8.jpg', label: 'Webinar Series', title: 'Digital Marketing Mastery Series', desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.' },
    { month: 'Aug', date: '29', image: '9.jpg', label: 'Tech Conference', title: 'Future Tech Exploration', desc: 'Delve into tech innovations and emerging trends at this influential conference for tech enthusiasts.' },
    { month: 'Apr', date: '21', image: '8.jpg', label: 'Webinar Series', title: 'Digital Marketing Mastery Series', desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.' },
    { month: 'Apr', date: '28', image: '7.jpg', label: 'Webinar Series', title: 'Digital Marketing Mastery Series', desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.' },
  ];

  const [calendar, setCalendar] = useState(false);
  const [displayDate, setdisplayDate] = useState(); // month index (0–11)
  const [displayDay, setdisplayDay] = useState(); // day of month (1–31)
  const [year, setYear] = useState(new Date().getFullYear());

  const handleCalendar = (month, targetDate) => {
    setdisplayDate(month);
    setdisplayDay(null); // ✅ Reset selected day

    setCalendar(true);

    const monthNames = ['jan', 'feb', 'march', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
    const monthIndex = typeof month === 'string' ? monthNames.indexOf(month.toLowerCase()) : month;

    if (monthIndex >= 0 && monthIndex <= 11) {
      setdisplayDate(monthIndex);
      setdisplayDay(parseInt(targetDate));
      console.log('Showing calendar for month:', monthIndex);
    } else {
      alert('Invalid month');
    }
  };

  const today = new Date();

  const renderItem = (item, index) => {
    return (
      <React.Fragment key={index}>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex items-center gap-5 shrink-0">
            <div className="border border-orange-200 dark:border-orange-950 rounded-lg" onClick={() => handleCalendar(item.month, item.date)}>
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
            <Link to="#" className="text-sm font-medium text-orange-400 leading-[14px] hover:text-primary-active mb-px">
              {item.label}
            </Link>
            <Link to="#" className="text-base font-medium hover:text-primary text-mono leading-4">
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
              {items.map((item, index) => renderItem(item, index))}
            </div>
          </CardContent>
        </Card>
      </div>

      {calendar && displayDate !== undefined && (
        <div className="mt-4 border p-4 rounded shadow max-w-m">
          {/* Month & Year Controls */}
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => {
                if (displayDate === 0) {
                  setdisplayDate(11);
                  setYear((prev) => prev - 1);
                } else {
                  setdisplayDate((prev) => prev - 1);
                }
              }}
              className="text-sm px-2 py-1 bg-gray-200 rounded"
            >
              &lt;-
            </button>

            <div className="text-center font-semibold">
              {new Date(year, displayDate).toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </div>

            <button
              onClick={() => {
                if (displayDate === 11) {
                  setdisplayDate(0);
                  setYear((prev) => prev + 1);
                } else {
                  setdisplayDate((prev) => prev + 1);
                }
              }}
              className="text-sm px-2 py-1 bg-gray-200 rounded"
            >
              -&gt;
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="font-bold w-30">{day}</div>
            ))}

            {Array.from({ length: new Date(year, displayDate, 1).getDay() }).map((_, i) => (
              <div key={'empty-' + i}></div>
            ))}

            {Array.from({ length: new Date(year, displayDate + 1, 0).getDate() }).map((_, i) => {
              const date = i + 1;

              const isToday =
                Number(date) === Number(displayDay) &&
                // Number(month) === Number(displayDate) &&
                Number(year) === today.getFullYear();
              console.log(isToday);
              return (
                <div
                  key={date}
                  className={`px-2 py-5 rounded h-30 w-30 ${isToday ? 'bg-orange-400 text-white font-bold' : 'bg-gray-100'}`}
                >
                  {date}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export { UpcomingEvents };
