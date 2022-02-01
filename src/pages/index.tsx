import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'

const IndexPage = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
    </Head>

    <Layout />
  </>
)

export default IndexPage
