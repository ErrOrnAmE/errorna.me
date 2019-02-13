import React from 'react'
import format from 'date-fns/format'

import { Card, Link } from 'components'

import './PostPreview.scss'

const PostPreview = ({
  post: { title, dateObject, categories, image, external, href, preview }
}) => (
  <Card className="post-preview">
    <div className="columns is-gapless">
      <div className="column is-one-third">
        <Link
          to={href}
          external={external}
          className="image"
          style={
            image
              ? {
                  backgroundImage: `url('${image}')`
                }
              : {}
          }
        />
      </div>
      <div className="column">
        <Link to={href} external={external} className="title">
          <h2>{title}</h2>
        </Link>
        <div className="meta">
          <div>{format(dateObject, 'MMMM d, yyyy')}</div>
          <div>|</div>
          <div className="categories">
            {categories.reduce((acc, cat) => {
              if (acc.length) acc.push(<span key={'before-' + cat}>,</span>)
              acc.push(
                <Link to={`/category/${cat}`} key={cat}>
                  {cat}
                </Link>
              )
              return acc
            }, [])}
          </div>
        </div>
        <div className="content">
          <p>{preview}</p>
          <Link to={href} external={external}>
            Read more...
          </Link>
        </div>
      </div>
    </div>
  </Card>
)

export default PostPreview
