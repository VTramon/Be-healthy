import type { AppProps /*, AppContext */ } from 'next/app'
import '../GlobalStyles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
