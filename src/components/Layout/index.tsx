import { Header } from '../Header'
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
      </main>
    </>
  )
}
export { Layout }
