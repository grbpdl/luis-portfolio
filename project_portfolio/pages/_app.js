import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Magic By Luis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Magic By Luis" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
