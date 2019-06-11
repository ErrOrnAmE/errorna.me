import React from 'react'
import format from 'date-fns/format'

import { postBySlug } from 'data'

import { Card, Link } from 'components'

import types from './types'

import 'react-mde/lib/styles/css/react-mde-all.css'

import './Post.scss'

const Post = ({ match }) => {
  const post = postBySlug(match.params.slug)
  const { type, title, dateObject, categories, image } = post

  const TypeRender = types[type] || types['default']

  return (
    <Card className="post">
      <div
        className="featured-image"
        style={
          image
            ? {
                backgroundImage: `url('${image}')`
              }
            : {}
        }
      >
        <Link to="/" className="back-button">
          Back
        </Link>
      </div>
      <div className="post-content">
        <h1>{title}</h1>
        <div className="meta">
          <div>{format(dateObject, 'MMMM d, yyyy')}</div>
          <div>|</div>
          <div className="categories">
            {categories.reduce((acc, cat) => {
              if (acc.length) acc.push(<span key={'before-' + cat}>, </span>)
              acc.push(
                <Link to={`/category/${cat}`} key={cat}>
                  {cat}
                </Link>
              )
              return acc
            }, [])}
          </div>
        </div>
        <div className="grey-rule" />
        <TypeRender post={post} />
      </div>
    </Card>
  )
}

export default Post
