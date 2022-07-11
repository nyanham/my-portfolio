import styles from './Footer.module.css'


import lin from '../../assets/in.svg'
import git from '../../assets/git.svg'
import insta from '../../assets/insta.svg'
import logo from '../../assets/logo.png'

export function Footer() {
  const scrollTo = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img onClick={() => scrollTo()}
          src={logo}
          className={styles.logo}
          alt="Girl Anime" />
        <div className={styles.socials}>
          <a href='https://www.linkedin.com/in/rafael-jyo-kondo/'><img className={styles.social} src={lin} alt="" /></a>
          <a href='https://github.com/nyanham'><img className={styles.social} src={git} alt="" /></a>
          <a href='https://www.instagram.com/nyan_nyan_kun_kun/'><img className={styles.social} src={insta} alt="" /></a>
        </div>
      </div>
      <span className={styles.copy}>&copy; Nyanham 2022</span>
    </footer>
  )
}