import React from 'react'
import format from 'date-fns/format'

import './CalendarDay.scss'

const CalendarDay = ({ date }) => (
  <div className="calendar-day">
    <span className="binds" />
    <span className="month">{format(date, 'MMMM yyyy')}</span>
    <span className="day">{format(date, 'd')}</span>
  </div>
)

export default CalendarDay
