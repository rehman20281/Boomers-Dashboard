import React from 'react'
import { Calendar } from '@/components/ui/calendar';

const EventCalender = () => {

    const [tempDateRange, setTempDateRange] = useState(date);
    const handleDateRangeApply = () => {
        setDate(tempDateRange); // Save the temporary date range to the main state
        setIsOpen(false); // Close the popover
    };
    const handleDateRangeReset = () => {
        setTempDateRange(undefined); // Reset the temporary date range
    };

    return (
        <>
            <Calendar
                initialFocus
                mode="range"
                defaultMonth={tempDateRange?.from || defaultStartDate}
                selected={tempDateRange}
                onSelect={setTempDateRange}
                numberOfMonths={1}
            />
        </>
    )
}

export default EventCalender
