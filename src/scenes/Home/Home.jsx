import React from 'react'

import { allPosts } from 'data'

import { PostPreview } from 'components'

import './Home.scss'

const Home = () => (
  <>
    <h2 className="home-title">Posts</h2>
    <div className="list-posts">
      {allPosts.map(post => (
        <PostPreview key={post.title} post={post} />
      ))}
    </div>
  </>
)

export default Home
