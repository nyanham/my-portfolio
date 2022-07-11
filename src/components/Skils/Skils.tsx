import styles from './Skils.module.css'

import mongo from '../../assets/mongo.svg'
import c from '../../assets/c.svg'
import cshap from '../../assets/csharp.svg'
import nodejs from '../../assets/nodejs.svg'
import plus from '../../assets/plus.svg'
import react from '../../assets/react.svg'
import python from '../../assets/python.svg'
import photoshop from '../../assets/photoshop.svg'
import illustrator from '../../assets/illustrator.svg'

export function Skils() {
  return (
    <section id='skils' className={styles.section}>
      <h2 className={styles.h2}>Skils</h2>
      <div className={styles.row}>
        <div className={styles.item}>
          <img src={react} alt="logo html" />
        </div>
        <div className={styles.item}>
          <img src={nodejs} alt="logo html" />
        </div>
        <div className={styles.item}>
          <img src={mongo} alt="logo html" />
        </div>
        <div className={styles.item}>
          <img src={photoshop} alt="logo html" />
        </div>
        <div className={styles.item}>
          <img src={illustrator} alt="logo html" />
        </div>
      </div>
      <div className={styles.rowReverse}>
        <div className={styles.item}>
          <img src={c} alt="logo html" />
        </div>
        <div className={styles.item}>
          <img src={cshap} alt="logo html" />
        </div>
        <div className={styles.item}>
          <img src={plus} alt="logo html" />
        </div>
        <div className={styles.item}>
          <img src={python} alt="logo html" />
        </div>
      </div>
    </section>
  )
}