import styles from './Projects.module.css'

import zephyrus from '../../assets/login.png'
import app from '../../assets/app.png'
import secot from '../../assets/secot.png'

export function Projects() {
  return (
    <section id='projects' className={styles.section}>
      <h2 className={styles.h2}>Projects</h2>
      <div className={styles.container}>
        <div className={styles.project}>
          <a href='https://github.com/YuutaDragon/zephyrus'>
            <div className={styles.image}>
              <img src={zephyrus} alt="" />
            </div>
          </a>
        </div>
        <div className={styles.project}>
          <a href='https://github.com/YuutaDragon/ToDoApp'>
            <div className={styles.image}>
              <img src={app} alt="" />
            </div>
          </a>
        </div>
        <div className={styles.project}>
          <a href='https://www.figma.com/file/Ro8lkz3UwCU4N0dJEhXGDW/SeCoT?node-id=910%3A2698'>
            <div className={styles.image}>
              <img src={secot} alt="" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}