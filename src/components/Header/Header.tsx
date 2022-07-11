import styles from './Header.module.css'
import logo from '../../assets/logo.png'


export function Header() {
  const scrollTo = (id: string) => {
    let element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  return (
    <header id='home'>
      <nav className={styles.nav}>
        <img onClick={() => scrollTo('home')}
          src={logo}
          className={styles.logo}
          alt="Girl Anime" />
        <ul className={styles.menu}>
          <li onClick={() => scrollTo('home')} className={styles.menuItem}>Home</li>
          <li onClick={() => scrollTo('skils')} className={styles.menuItem}>Skils</li>
          <li onClick={() => scrollTo('projects')} className={styles.menuItem}>Projects</li>
        </ul>
        <a href='mailto:rafaeljkey@gmail.com'>
          <button className={styles.button} type="button">Hire Me</button>
        </a>
      </nav>
    </header>
  )
}