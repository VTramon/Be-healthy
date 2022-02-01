import type { AppProps /*, AppContext */ } from 'next/app'
import '../Styles/GlobalStyles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
