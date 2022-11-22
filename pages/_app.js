import React from 'react';
import Head from 'next/head';

// components
import Layout from '../ui/components/Layout/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Sheikh Rashed || Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;