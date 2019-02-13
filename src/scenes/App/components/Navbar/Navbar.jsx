import React, { Component } from 'react'
import cn from 'classnames'
import { Link, NavLink } from 'react-router-dom'

import { ReactComponent as Burger } from './burger.svg'

import './Navbar.scss'

class Navbar extends Component {
  state = {
    active: false
  }

  toggleActive = active => this.setState({ active })

  render() {
    const { active } = this.state

    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar-items">
            <Link to="/" className="brand">
              Errorname
            </Link>
            <nav className={cn('menu', { active })}>
              <NavLink to="/" exact onClick={() => this.toggleActive(false)}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => this.toggleActive(false)}>
                About
              </NavLink>
              <NavLink to="/contact" onClick={() => this.toggleActive(false)}>
                Contact
              </NavLink>
            </nav>
            <div
              className={cn('menu-button', { active })}
              onClick={() => this.toggleActive(!active)}
            >
              <div className="burger">
                <Burger alt="Menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
