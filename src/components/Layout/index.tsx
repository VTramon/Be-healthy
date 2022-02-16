import { Footer } from '../Footer'
import { Header } from '../Header'
import { LoseFat } from '../LoseFat'
import { Tips } from '../Tips'
import { Welcome } from '../Welcome'
import styles from './style.module.scss'

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />

      <hr />
      <main className={styles.main}>
        <Welcome />
        <Tips />
        <LoseFat />

        <Footer />
      </main>
    </>
  )
}
export { Layout }
