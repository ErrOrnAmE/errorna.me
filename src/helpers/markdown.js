import React from 'react'
import { Converter } from 'showdown'
import XSSFilter from 'showdown-xss-filter'
import emojis from 'emojilib/simplemap.json'

class Markdown {
  constructor() {
    this.showdown = new Converter({
      openLinksInNewWindow: true,
      backslashEscapesHTMLTags: true,
      extensions: [XSSFilter]
    })

    this.showdown.setFlavor('github')
  }

  html(text) {
    text = this.emoji(text)
    text = text.replace('[...]', '')

    return (
      <div className="mde-preview">
        <div
          className="mde-preview-content"
          style={{
            marginTop: '0',
            padding: '0',
            border: '0'
          }}
          dangerouslySetInnerHTML={{
            __html: this.showdown.makeHtml(text)
          }}
        />
      </div>
    )
  }

  paragraph(text) {
    text = this.emoji(text)
    text = text.replace('[...]', '')

    return (
      <span
        dangerouslySetInnerHTML={{
          __html: this.showdown.makeHtml(text)
        }}
      />
    )
  }

  emoji(text) {
    let emoticons = {
      ':)': ':slightly_smiling_face:',
      ':(': ':slightly_frowning_face:',
      ':/': ':confused:',
      ':p': ':stuck_out_tongue:',
      ':P': ':stuck_out_tongue:',
      ':D': ':smiley:',
      ';)': ':wink:'
    }

    // Ascii emoticons to :emoji:
    text = Object.keys(emoticons).reduce((text, emoticon) => {
      return text.split(emoticon + ' ').join(emoticons[emoticon] + ' ')
    }, text)

    // :emoji: to unicode emojis
    return text.replace(/:(\w+):/gi, (str, name) => emojis[name] || str)
  }
}

const markdown = new Markdown()

export default markdown
