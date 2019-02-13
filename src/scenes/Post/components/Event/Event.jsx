import React from 'react'

import { markdown } from 'helpers'

import { CalendarDay, Link } from 'components'

import './Event.scss'

const Event = ({ event }) => (
  <div className="event">
    <CalendarDay date={event.dateObject} />
    <div className="content">
      <h3>{event.name}</h3>
      <div className="meta">
        <div className="location">
          {markdown.emoji(':round_pushpin:')} {event.location}
        </div>
        <div className="website">
          <Link to={event.url} external={true}>
            {markdown.emoji(':globe_with_meridians:')} Website
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Event
