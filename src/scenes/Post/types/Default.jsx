import React from 'react'

import { markdown } from 'helpers'
import { contents } from 'data'

const Default = ({ post: { slug, content } }) => {
  const Content = contents[slug]

  if (Content) {
    return <Content />
  }

  return markdown.html(content)
}

export default Default
