import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import '../GlobalStyles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 "
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
