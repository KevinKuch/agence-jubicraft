'use client'

import styles from './style.module.scss'

export default function Button({isActive, setIsActive}) {

  return (
    <div className={styles.btnContainer}>
        <div onClick={() => {setIsActive(!isActive)}} className={`${styles.button} ${isActive ? styles.active : ""}`}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
    </div>
  )
}