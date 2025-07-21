
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

const CalendarComponent = () => {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
        </div>
    )
}
        
export default CalendarComponent;
