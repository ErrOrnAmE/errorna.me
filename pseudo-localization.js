/*
  Pseudo-localization created by Tryggvi Gylfason (https://github.com/tryggvigy/pseudo-localization)

  Adapted for easy use in browser by Thibaud Courtoison (https://errorna.me)

  MIT License

  Copyright (c) 2018 Tryggvi Gylfason

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

;(() => {
  const ACCENTED_MAP = {
    a: 'ȧ',
    A: 'Ȧ',
    b: 'ƀ',
    B: 'Ɓ',
    c: 'ƈ',
    C: 'Ƈ',
    d: 'ḓ',
    D: 'Ḓ',
    e: 'ḗ',
    E: 'Ḗ',
    f: 'ƒ',
    F: 'Ƒ',
    g: 'ɠ',
    G: 'Ɠ',
    h: 'ħ',
    H: 'Ħ',
    i: 'ī',
    I: 'Ī',
    j: 'ĵ',
    J: 'Ĵ',
    k: 'ķ',
    K: 'Ķ',
    l: 'ŀ',
    L: 'Ŀ',
    m: 'ḿ',
    M: 'Ḿ',
    n: 'ƞ',
    N: 'Ƞ',
    o: 'ǿ',
    O: 'Ǿ',
    p: 'ƥ',
    P: 'Ƥ',
    q: 'ɋ',
    Q: 'Ɋ',
    r: 'ř',
    R: 'Ř',
    s: 'ş',
    S: 'Ş',
    t: 'ŧ',
    T: 'Ŧ',
    v: 'ṽ',
    V: 'Ṽ',
    u: 'ŭ',
    U: 'Ŭ',
    w: 'ẇ',
    W: 'Ẇ',
    x: 'ẋ',
    X: 'Ẋ',
    y: 'ẏ',
    Y: 'Ẏ',
    z: 'ẑ',
    Z: 'Ẑ',
  }

  const BIDI_MAP = {
    a: 'ɐ',
    A: '∀',
    b: 'q',
    B: 'Ԑ',
    c: 'ɔ',
    C: 'Ↄ',
    d: 'p',
    D: 'ᗡ',
    e: 'ǝ',
    E: 'Ǝ',
    f: 'ɟ',
    F: 'Ⅎ',
    g: 'ƃ',
    G: '⅁',
    h: 'ɥ',
    H: 'H',
    i: 'ı',
    I: 'I',
    j: 'ɾ',
    J: 'ſ',
    k: 'ʞ',
    K: 'Ӽ',
    l: 'ʅ',
    L: '⅂',
    m: 'ɯ',
    M: 'W',
    n: 'u',
    N: 'N',
    o: 'o',
    O: 'O',
    p: 'd',
    P: 'Ԁ',
    q: 'b',
    Q: 'Ò',
    r: 'ɹ',
    R: 'ᴚ',
    s: 's',
    S: 'S',
    t: 'ʇ',
    T: '⊥',
    u: 'n',
    U: '∩',
    v: 'ʌ',
    V: 'Ʌ',
    w: 'ʍ',
    W: 'M',
    x: 'x',
    X: 'X',
    y: 'ʎ',
    Y: '⅄',
    z: 'z',
    Z: 'Z',
  }

  const strategies = {
    accented: {
      prefix: '',
      postfix: '',
      map: ACCENTED_MAP,
      elongate: true,
    },
    bidi: {
      // Surround words with Unicode formatting marks forcing
      // right-to-left directionality of characters
      prefix: '\u202e',
      postfix: '\u202c',
      map: BIDI_MAP,
      elongate: false,
    },
  }

  const pseudoLocalizeString = (string, { strategy = 'accented' } = {}) => {
    let opts = strategies[strategy]

    let pseudoLocalizedText = ''
    for (let character of string) {
      if (opts.map[character]) {
        const cl = character.toLowerCase()
        // duplicate "a", "e", "o" and "u" to emulate ~30% longer text
        if (opts.elongate && (cl === 'a' || cl === 'e' || cl === 'o' || cl === 'u')) {
          pseudoLocalizedText += opts.map[character] + opts.map[character]
        } else pseudoLocalizedText += opts.map[character]
      } else pseudoLocalizedText += character
    }

    // If this string is from the DOM, it should already contain the pre- and postfix
    if (pseudoLocalizedText.startsWith(opts.prefix) && pseudoLocalizedText.endsWith(opts.postfix)) {
      return pseudoLocalizedText
    }
    return opts.prefix + pseudoLocalizedText + opts.postfix
  }

  const pseudoLocalization = (() => {
    const opts = {
      blacklistedNodeNames: ['STYLE'],
    }

    // Observer for dom updates. Initialization is defered to make parts
    // of the API safe to use in non-browser environments like nodejs
    let observer = null
    const observerConfig = {
      characterData: true,
      childList: true,
      subtree: true,
    }

    const textNodesUnder = (element) => {
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, (node) => {
        const isAllWhitespace = !/[^\s]/.test(node.nodeValue)
        if (isAllWhitespace) return NodeFilter.FILTER_REJECT

        const isBlacklistedNode = opts.blacklistedNodeNames.includes(node.parentElement.nodeName)
        if (isBlacklistedNode) return NodeFilter.FILTER_REJECT

        return NodeFilter.FILTER_ACCEPT
      })

      let currNode
      const textNodes = []
      while ((currNode = walker.nextNode())) textNodes.push(currNode)
      return textNodes
    }

    const isNonEmptyString = (str) => str && typeof str === 'string'

    const pseudoLocalize = (element) => {
      const textNodesUnderElement = textNodesUnder(element)
      for (let textNode of textNodesUnderElement) {
        const nodeValue = textNode.nodeValue
        if (isNonEmptyString(nodeValue)) {
          textNode.nodeValue = pseudoLocalizeString(nodeValue, opts)
        }
      }
    }

    const domMutationCallback = (mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Turn the observer off while performing dom manipulation to prevent
          // infinite dom mutation callback loops
          observer.disconnect()
          // For every node added, recurse down it's subtree and convert
          // all children as well
          mutation.addedNodes.forEach(pseudoLocalize)
          observer.observe(document.body, observerConfig)
        } else if (mutation.type === 'characterData') {
          const nodeValue = mutation.target.nodeValue
          const isBlacklistedNode = opts.blacklistedNodeNames.includes(
            mutation.target.parentElement.nodeName
          )
          if (isNonEmptyString(nodeValue) && !isBlacklistedNode) {
            // Turn the observer off while performing dom manipulation to prevent
            // infinite dom mutation callback loops
            observer.disconnect()
            // The target will always be a text node so it can be converted
            // directly
            mutation.target.nodeValue = pseudoLocalizeString(nodeValue, opts)
            observer.observe(document.body, observerConfig)
          }
        }
      }
    }

    const start = ({
      strategy = 'accented',
      blacklistedNodeNames = opts.blacklistedNodeNames,
    } = {}) => {
      opts.blacklistedNodeNames = blacklistedNodeNames
      opts.strategy = strategy
      // Pseudo localize the DOM
      pseudoLocalize(document.body)
      // Start observing the DOM for changes and run
      // pseudo localization on any added text nodes
      observer = new MutationObserver(domMutationCallback)
      observer.observe(document.body, observerConfig)
    }

    const stop = () => {
      observer && observer.disconnect()
    }

    return {
      start,
      stop,
      localize: pseudoLocalizeString,
    }
  })()

  window.pseudoLocalization = pseudoLocalization
})()
