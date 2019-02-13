import rawPosts from './posts.json'
import toDate from 'date-fns/toDate'
import compare from 'date-fns/compareDesc'

const parser = posts =>
  posts.map(post => {
    if (post.type === 'talk') {
      post = { ...post, content: post.abstract }
    }

    if (post.events) {
      const events = post.events.map(ev => ({
        ...ev,
        dateObject: toDate(ev.date)
      }))
      post = { ...post, events }
    }

    let preview = post.content.split('[...]')
    preview = preview.length > 1 ? preview[0] + '...' : post.content
    const postUrl = post.url || `/post/${post.slug}`

    const dateObject = toDate(post.date)

    return {
      ...post,
      preview,
      dateObject,
      href: postUrl
    }
  })

const posts = parser(rawPosts)

const sortByDate = posts => posts.sort((a, b) => compare(a.dateObject, b.dateObject))

export const allPosts = sortByDate(posts)

export const featuredPosts = posts.filter(p => p.featured).sort((a, b) => a.featured - b.featured)

export const postsByCategory = cat => sortByDate(posts.filter(p => p.categories.includes(cat)))

export const postBySlug = slug => posts.find(p => p.slug === slug)
