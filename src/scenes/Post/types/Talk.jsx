import React from 'react'
import isBefore from 'date-fns/isBefore'

import { markdown } from 'helpers'

import { Event } from '../components'

const Talk = ({ post: { abstract, events = [] } }) => {
  const [past, next] = events.reduce(
    (acc, event) => {
      if (isBefore(event.dateObject, new Date())) {
        acc[0].push(event)
      } else {
        acc[1].push(event)
      }
      return acc
    },
    [[], []]
  )

  return (
    <>
      <h2 className="first-h2">Abstract</h2>
      {markdown.html(abstract)}
      <h2>Next events</h2>
      <div>
        {next.length > 0 ? (
          next.map(event => <Event key={event.name} event={event} />)
        ) : (
          <div className="none">No events scheduled, yet!</div>
        )}
      </div>
      <h2>Past events</h2>
      <div>
        {past.length > 0 ? (
          past.map(event => <Event key={event.name} event={event} />)
        ) : (
          <div className="none">No past events...</div>
        )}
      </div>
    </>
  )
}

export default Talk
