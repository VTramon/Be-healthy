import Image from 'next/image'
import styles from './style.module.scss'
import HeaderImg from '../../../public/pic-1.jpg'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <img src="/pic-1.jpg" alt="imagem de alimentos saudaveis" />
        <h1>Be helthy</h1>
      </div>
    </div>
  )
}

export { Header }
