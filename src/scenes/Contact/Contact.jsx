import React from 'react'

import { Card, Link } from 'components'

import './Contact.scss'

const Contact = () => (
  <Card className="contact">
    <h2 className="title">Contact</h2>

    <p className="text">
      If you wanna talk about stuff I did, articles I wrote, talks I gave, or even for an
      opportunity, don't hesitate to contact me using one of the following options:
    </p>

    <div className="contacts">
      <Link to="tel:+3367706770028" external="true" target="_blank" className="contact-item phone">
        <div className="logo">
          <img src="/img/contact/phone.svg" alt="phone" />
        </div>
        <div className="value">
          <p>+33 (0)6 77 06 00 28</p>
        </div>
      </Link>
      <Link
        to="mailto:thibaudcourtoison@gmail.com"
        external="true"
        target="_blank"
        className="contact-item email"
      >
        <div className="logo">
          <img src="/img/contact/email.svg" alt="email" />
        </div>
        <div className="value">
          <p>thibaud.courtoison@gmail.com</p>
        </div>
      </Link>
      <Link
        href="https://www.linkedin.com/in/thibaud-courtoison/"
        external="true"
        target="_blank"
        className="contact-item linkedin"
      >
        <div className="logo">
          <img src="/img/contact/linkedin.svg" alt="linkedin" />
        </div>
        <div className="value">
          <p>Thibaud Courtoison</p>
        </div>
      </Link>
      <Link
        to="https://github.com/Errorname"
        external="true"
        target="_blank"
        className="contact-item github"
      >
        <div className="logo">
          <img src="/img/contact/github.svg" alt="github" />
        </div>
        <div className="value">
          <p>@Errorname</p>
        </div>
      </Link>
      <Link
        to="https://twitter.com/Errorname_"
        external="true"
        target="_blank"
        className="contact-item twitter"
      >
        <div className="logo">
          <img src="/img/contact/twitter.svg" alt="twitter" />
        </div>
        <div className="value">
          <p>@Errorname_</p>
        </div>
      </Link>
    </div>
  </Card>
)

export default Contact
