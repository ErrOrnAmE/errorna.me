import React from 'react'
import { Helmet } from 'react-helmet'

import { Link } from 'components'

const Content = () => (
  <>
    <Helmet>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
    </Helmet>
    <p>
      This week-end (23-24 March), the 2019 edition of{' '}
      <Link to="https://hackbordeaux.com/" external>
        HackBordeaux
      </Link>{' '}
      was held in the city of Bordeaux. Listed as an official{' '}
      <Link to="https://mlh.io/" external>
        Major League Hacking
      </Link>{' '}
      event, more than 120 participants (including international teams) worked literally around the
      clock (24h non-stop) to build their best projects!
    </p>
    <p>
      For the second year, my friend Pierre (
      <Link to="https://twitter.com/PJoubert_" external>
        @PJoubert_
      </Link>
      ) invited me to Bordeaux to join a team of other Enseirb studentss. Last year, we won the
      Meritis challenge. And this year, we were there to win again! 😎
    </p>
    <h2>The challenges</h2>
    <p>This edition offered 4 challenges, announced at the beggining of the event:</p>
    <ul>
      <li>
        <i>"Children, beginners, grand-parents... How to become the best developer on Earth ?"</i>{' '}
        sponsored by Meritis
      </li>
      <li>
        <i>"How technology can answer healthcare main challenges."</i> sponsored by Capgemini
      </li>
      <li>
        <i>"Try not to die"</i> sponsored by Ekino.
      </li>
      <li>
        <i>"The pillbox of the future"</i> sponsored by Eirlab
      </li>
    </ul>
    <p>Those challenges were completed with 3 additional MLH sponsored challenges:</p>
    <ul>
      <li>
        <i>"Best use of Google Cloud Platform"</i>
      </li>
      <li>
        <i>"Best Domain Registered with Domain.com"</i>
      </li>
      <li>
        <i>"Best IoT Hack using a Qualcomm Device"</i>
      </li>
    </ul>
    <p>
      Finally, there was the grand-prize of the jury that would be awarded to the best overall
      project.
    </p>
    <h2>The project</h2>
    <p>
      As soon as we heard about the challenges, we imagined a project in two parts. The first part (
      <i>"Blocky"</i>) was physical 3D-printed{' '}
      <Link to="https://en.wikipedia.org/wiki/Scratch_(programming_language)" external>
        scratch-like
      </Link>{' '}
      blocks that would create a program on a{' '}
      <Link to="https://hackbordeaux-2019.firebaseapp.com/" external>
        live web application
      </Link>
      . The second part (<i>"Wheely"</i>) was a controlled vehicule that was moving based on the
      program on the same live web application.
    </p>
    <p>
      The idea behind this project was to create an interactive toy for computer-illiterate people
      to learn about algorithms. The workflow of the use would be:
    </p>
    <ol>
      <li>Manually connect the physical blocs to create a program</li>
      <li>See the program on the live web application</li>
      <li>Push the button on the "Run" block</li>
      <li>Watch the vehicule move based on your program</li>
    </ol>
    <p>
      If you want to learn more on the respective project, you can read our slides from the end of
      the Hackathon:
    </p>
    <ul>
      <li>
        Blockly:{' '}
        <Link
          to="https://docs.google.com/presentation/d/1xvQAQuLYk5JhYZZ9u39AFoA5hPpV367OFwIiq2wvykc/edit?usp=sharing"
          external
        >
          Google Slides
        </Link>
      </li>
      <li>
        Wheely:{' '}
        <Link
          to="https://onedrive.live.com/view.aspx?resid=E80077900DF73159!8235&ithint=file%2cpptx&authkey=!AAUYe8esnFazP_c"
          external
        >
          PowerPoint Online
        </Link>
      </li>
    </ul>
    <h2>End of the Hackathon</h2>
    <p>
      After 24h long hours, and some sleep missing, the Hackathon was officially over. We presented
      to each jury and waited for the results...
    </p>
    <p>
      Long story short: We won{' '}
      <span role="img" aria-label="grinning-face-with-star-eyes">
        🤩
      </span>
      <span role="img" aria-label="party-popper">
        🎉
      </span>
      . Not only one prize, but multiple prizes by different sponsors! We won:
    </p>
    <ul>
      <li>
        "Best use of Google Cloud Platform" for the Firebase usage in our live web application
      </li>
      <li>"Best IoT Hack using a Qualcomm Device" for the usage of a Qualcomm Device in Wheely</li>
      <li>
        And most importantly, <b>we won the grand prize!</b>
      </li>
    </ul>
    <p>
      We were aggreably surprised for such acknowledgement our work. I'm really proud of the work we
      achieved as a team. Each of us was exactly at the perfect place to build a great project!
    </p>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-dnt="true"
        data-theme="light"
      >
        <p lang="en" dir="ltr">
          Well, we did it team!{' '}
          <span role="img" aria-label="party-popper">
            🎉
          </span>{' '}
          <a href="https://twitter.com/hashtag/hackbdx19?src=hash&amp;ref_src=twsrc%5Etfw">
            #hackbdx19
          </a>{' '}
          Lot of work in only 24h, really proud of what we built!{' '}
          <span role="img" aria-label="hugging-face">
            🤗
          </span>{' '}
          <a href="https://t.co/KwsvJ6lDJT">pic.twitter.com/KwsvJ6lDJT</a>
        </p>
        &mdash; Errorname (@errorname_){' '}
        <a href="https://twitter.com/errorname_/status/1109854785153523712?ref_src=twsrc%5Etfw">
          March 24, 2019
        </a>
      </blockquote>
      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-dnt="true"
        data-theme="light"
      >
        <p lang="en" dir="ltr">
          We built a physical scratch-like project to teach algorithms to computer novices{' '}
          <a href="https://t.co/MMpe6TeGap">pic.twitter.com/MMpe6TeGap</a>
        </p>
        &mdash; Errorname (@errorname_){' '}
        <a href="https://twitter.com/errorname_/status/1109855426777178113?ref_src=twsrc%5Etfw">
          March 24, 2019
        </a>
      </blockquote>
      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-dnt="true"
        data-theme="light"
      >
        <p lang="en" dir="ltr">
          We also had a live interface which would show the current order of the program built by
          the player, and the execution of this program{' '}
          <a href="https://t.co/CZsvstbWud">pic.twitter.com/CZsvstbWud</a>
        </p>
        &mdash; Errorname (@errorname_){' '}
        <a href="https://twitter.com/errorname_/status/1109856251930951680?ref_src=twsrc%5Etfw">
          March 24, 2019
        </a>
      </blockquote>
      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-dnt="true"
        data-theme="light"
      >
        <p lang="en" dir="ltr">
          Thank you <a href="https://twitter.com/hackbordeaux?ref_src=twsrc%5Etfw">@hackbordeaux</a>{' '}
          and <a href="https://twitter.com/MLHacks?ref_src=twsrc%5Etfw">@MLHacks</a> for the great
          event! 👩‍💻👨‍💻
        </p>
        &mdash; Errorname (@errorname_){' '}
        <a href="https://twitter.com/errorname_/status/1109876568040620033?ref_src=twsrc%5Etfw">
          March 24, 2019
        </a>
      </blockquote>
    </div>
  </>
)

export default Content
