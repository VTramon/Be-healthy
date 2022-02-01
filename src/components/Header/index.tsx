import styles from './style.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentHeader}>
        <img src="/background.webp" alt="imagem de alimentos saudaveis" />
        <h1>Be helthy</h1>
      </div>
    </header>
  )
}

export { Header }
