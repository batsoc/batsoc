// Helper functions
//
// Check page's meta at https://metatags.io/ (might need to encode url=... part)
// Twitter: https://cards-dev.twitter.com/validator
// LinkedIn: https://www.linkedin.com/post-inspector/inspect/
// Facebook needs login
//
// Example https://github.com/code-tribe/nuxt-netlify-cms-starter/blob/ac9addf0868717cb47f461d0b3d039e8adc2c778/pages/blog/_slug.vue
//

const metaFromCMS = (pageData, routePath, routeQuery) => {
  // convert CMS data (as defined in cms-admin/config.yml x-meta) to head meta collection
  return {
    title: pageData.metaData.title,
    link: [
      {
        rel: 'canonical',
        href: getCanonicalUrl(routePath),
      },
    ],
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: pageData.metaData.title || '',
      },
      {
        hid: 'description',
        name: 'description',
        content: pageData.metaData.description,
      },
      {
        hid: 'article:published_time',
        property: 'article:published_time',
        content: pageData.metaData.published_at,
      },
      {
        hid: 'article:modified_time',
        property: 'article:modified_time',
        content: pageData.metaData.updated_at,
      },
      {
        hid: 'og:updated_time',
        property: 'og:updated_time',
        content: pageData.metaData.updated_at,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: pageData.metaData.og_title || pageData.metaData.title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          pageData.metaData.og_description || pageData.metaData.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          imgUrl(pageData.metaData.og_image) ||
          getThumIOURL(routePath, routeQuery),
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: pageData.metaData.og_title || pageData.metaData.title,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: getCanonicalUrl(routePath),
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: pageData.metaData.twitter_title || pageData.metaData.title,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          pageData.metaData.twitter_description ||
          pageData.metaData.description,
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content:
          imgUrl(
            pageData.metaData.twitter_image || pageData.metaData.og_image
          ) || getThumIOURL(routePath, routeQuery),
      },
      {
        hid: 'twitter:image:alt',
        property: 'twitter:image:alt',
        content: pageData.metaData.og_title || pageData.metaData.title,
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: getCanonicalUrl(routePath),
      },
    ],
  }
}

const getCanonicalUrl = (routePath, slug) => {
  if (!routePath && slug) {
    routePath = `/${slug}/`
  }

  const slash = routePath.endsWith('/') ? '' : '/'
  return `${process.env.URL}${routePath}${slash}`
}

// local path
const imgUrl = (img) => {
  return img ? `${process.env.URL}/img/${img}` : undefined
}

// Doc https://www.thum.io/documentation/api/url
const getThumIOURL = (routePath, routeQuery, crop = 627) => {
  return (
    `https://image.thum.io/get/noanimate/maxAge/24/width/1200/crop/${crop}/?url=` +
    encodeURIComponent(
      getCanonicalUrl(routePath) + getQueryLine(routeQuery, true)
    )
  )
}
// build query string, adding screenshot if isScreenshot=true
const getQueryLine = (routeQuery, isScreenshot = false) => {
  const allowedQueryKeys = ['d', 's', 'l', 'screenshot']

  var esc = encodeURIComponent
  var params = Object.assign({}, routeQuery)

  if (isScreenshot) {
    params.screenshot = 1
  }

  var query = Object.keys(params)
    .map((k) => {
      if (allowedQueryKeys.includes(k)) {
        return esc(k) + '=' + esc(params[k])
      }
    })
    .join('&')

  return `?${query}`
}

export { metaFromCMS }
