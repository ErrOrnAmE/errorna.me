import React from 'react'
import cn from 'classnames'
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'

import { Navbar, Profile } from './components'

import Home from 'scenes/Home'
import About from 'scenes/About'
import Contact from 'scenes/Contact'
import Category from 'scenes/Category'
import Post from 'scenes/Post'

import './App.scss'

const App = ({ location }) => (
  <>
    <Navbar />
    <div className="container">
      <div className="main">
        <div className={cn('columns', { 'is-home': location.pathname === '/' })}>
          <Profile className="column is-one-quarter" />
          <div className="column">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/category/:name" component={Category} />
              <Route path="/post/:slug" component={Post} />
              <Route render={() => '404 Error'} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default withRouter(App)
