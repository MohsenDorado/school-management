"use client"
import React, { useState } from 'react'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css";

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);
    const localizer = momentLocalizer(moment)
    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
      };
  return (
    <div>


<Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      onView={handleOnChangeView}

      style={{ height: "98%" }}
      min={new Date(2024, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
    </div>
  )
}

export default BigCalendar