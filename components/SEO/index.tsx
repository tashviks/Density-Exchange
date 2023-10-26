import React from 'react';
import Head from 'next/head';

type Props = {
  description?: string;
  author?: string;
  meta?: any;
  title: string;
}

export default function SEO({
  author = 'Tashvik Srivastava',
  meta,
  title = 'Density Exchange: Trade in future',
}: Props) {
  const metaData = [
    {
      property: `og:title`,
      content: 'Density Exchange: Trade in future',
    },
    {
      property: `og:description`,
      content: 'Find all the tools, libraries, and code snippets you need for your next big project at Lazyweb Rocks. Our collection of useful resources is constantly updated to help you save time and focus on building great things.',
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: 'Tashvik Srivastava',
    },
    {
      name: `twitter:title`,
      content: 'Density Exchange: Trade in future',
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link rel="icon" href="assets/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

