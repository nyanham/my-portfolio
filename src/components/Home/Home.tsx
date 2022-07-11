import styles from './Home.module.css'
import Typewriter from 'typewriter-effect';

import astroner from '../../assets/astroner.svg'
import lin from '../../assets/in.svg'
import git from '../../assets/git.svg'
import insta from '../../assets/insta.svg'


export function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <h1 className={styles.h1}>Hey, <br /> I'm
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Nyanham')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Kondo Jyo')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          /></h1>
        <p className={styles.p}>I'm a programmer, musician, illustrator and editor!</p>
      </div>
      <div className={styles.div}>
        <img className={styles.img} src={astroner} />
      </div>
      <div className={styles.socials}>
        <a href='https://www.linkedin.com/in/rafael-jyo-kondo/'><img className={styles.social} src={lin} alt="" /></a>
        <a href='https://github.com/nyanham'><img className={styles.social} src={git} alt="" /></a>
        <a href='https://www.instagram.com/nyan_nyan_kun_kun/'><img className={styles.social} src={insta} alt="" /></a>
      </div>
    </section>
  )
}