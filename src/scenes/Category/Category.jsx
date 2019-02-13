import React from 'react'
import { Link } from 'react-router-dom'

import { postsByCategory } from 'data'

import { Card, PostPreview } from 'components'

import './Category.scss'

const Category = ({ match }) => (
  <>
    <Card className="category">
      <Link to="/" className="button">
        ← All posts
      </Link>
      <h2 className="title">
        <span className="label">Posts:</span>
        <span className="type">{match.params.name}</span>
      </h2>
    </Card>
    <div className="list-posts">
      {postsByCategory(match.params.name).map(post => (
        <PostPreview key={post.title} post={post} />
      ))}
    </div>
  </>
)

export default Category
