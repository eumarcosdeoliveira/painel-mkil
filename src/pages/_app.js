// src/pages/_app.js
import '../styles/globals.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ngen</title>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
