import React from 'react'
import cn from 'classnames'

import { featuredPosts } from 'data'

import { Card, Link } from 'components'

import './Profile.scss'

const Profile = ({ className }) => (
  <div className={cn('profile', className)}>
    <Card className="profile-content">
      <img
        className="circle-profile"
        alt="profile"
        src="/img/profile/original_3_cropped_small.jpg"
      />
      <p className="description">
        Hi, my name is <b>Thibaud Courtoison</b> and I am a full-stack developer and JavaScript
        enthusiast, currently working at <b>Zenika</b>.<br />
      </p>
      <div className="grey-rule" />
      <h2 className="small-heading">Featured posts:</h2>
      <div className="featured-posts">
        {featuredPosts.map(({ type, title, slug, url }) => (
          <Link to={url || `/post/${slug}`} external={!!url} key={title}>
            [<span className="type">{type}</span>] {title}
          </Link>
        ))}
      </div>
      <div className="grey-rule" />
      <div className="icons">
        <a
          href="https://github.com/Errorname"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
          aria-label="Github profile"
        >
          <i className="fab fa-github-square fa-2x" />
        </a>
        <a
          href="https://twitter.com/Errorname_"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
          aria-label="Twitter profile"
        >
          <i className="fab fa-twitter-square fa-2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/thibaud-courtoison"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
          aria-label="Linkedin profile"
        >
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a
          href="https://stackoverflow.com/users/10721492/errorname"
          target="_blank"
          rel="noopener noreferrer"
          className="stackoverflow"
          aria-label="Stack-Overflow profile"
        >
          <i className="fab fa-stack-overflow fa-2x" />
        </a>
        <a
          href="https://www.npmjs.com/~errorname"
          target="_blank"
          rel="noopener noreferrer"
          className="npm"
          aria-label="NPM profile"
        >
          <i className="fab fa-npm fa-2x" />
        </a>
        {/*<a
          href="https://medium.com/@errorname"
          target="_blank"
          rel="noopener noreferrer"
          className="medium"
        >
          <i className="fab fa-medium fa-2x" />
        </a>*/}
      </div>
      <p className="footer">
        <Link to="/contact">Let's talk!</Link>
      </p>
    </Card>
  </div>
)

export default Profile
