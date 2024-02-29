'use client'
import styles from './style.module.scss'
import { useState } from 'react';

import Nav from './menu/index'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './button';

export default function Menu() {

  const [isActive, setIsActive] = useState(false);

  const variants = {
    open: { // open est le nom de la variable qui va définir l'état de l'animation. Grosseur du Menu
        width: 460,
        height: 650,
        top: "0px",
        right: "0px",
        backgroundColor: "#fff",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
        
        
    },
    closed: { // closed est le nom de la variable qui va définir l'état de l'animation. Grosseur du burger
        width: 60,
        height: 60,
        top: "20px",
        right: "20px",
        transition: {duration: 0.75, delay: 0.3,ease: [0.76, 0, 0.24, 1]}
    }

  }

  return (
    <nav className={styles.header}>
        <motion.div 
        className={styles.menu}
        variants={variants} // Chercher la variable variants
        animate={isActive ? "open" : "closed"} // Chercher la variable open ou closed. animate est la variable qui va définir l'état de l'animation de framer-motion
        initial="closed" // Valeur initial de l'animation
        >

        {/* AnimatePresence est une fonction de framer-motion qui permet de gérer la présence d'un élément dans le DOM et activer l'animation*/}
        <AnimatePresence>  
            {isActive && <Nav />}
        </AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
    </nav>
  )
}