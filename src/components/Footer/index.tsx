import { GitHubIcon, TwitterIcon } from '../../Icons'
import styles from './index.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis
          cras sed felis eget velit aliquet. Ultricies integer quis auctor elit
          sed vulputate. Vulputate enim nulla aliquet porttitor lacus luctus
          accumsan tortor.
        </p>
      </div>
      <div className={styles.footerIcons}>
        <a target="_blank" href="https://github.com/VTramon">
          <GitHubIcon height={50} width={50} />
        </a>
        <a target="_blank" href="https://twitter.com/vitorr29">
          <TwitterIcon height={50} width={50} />
        </a>
      </div>
    </footer>
  )
}
export { Footer }
