import Head from 'next/head'

import site from '@/site.json'

export function Seo ({
  title = site.title,
  description = site.description,
  keywords = site.keywords,
  url = site.url,
  image = ''
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <meta name='author' content={site.author} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join()} />
      <meta name='image' content={image} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={url} />
      {/* <meta property="og:type" content="article" /> */}

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image_alt' content={description} />

      <link rel='canonical' href={url} />
    </Head>
  )
}
