import React from 'react';
import styles from './style.module.scss'
import { Links } from './data'
import { footerLinks } from './data';
import { motion } from 'framer-motion';


const conditions = {
    initial: {
        opacity: 0,
        translateY: 20
    },
    animate: (index) => ({
        opacity: 1,
        translateY: 0,
        transition: {
            delay: 0.5 + (index * 0.1)
        }
    }),
    exit: {
        opacity: 0,
    }

}

export default function Menu () {
    
    return (
        <div className={styles.links}>
            <div className={styles.body}>
                {
                    Links.map( (link, index) => {
                        return (
                            <motion.div 
                            key={index}
                            custom={index}
                            variants={conditions}
                            animate="animate"
                            initial="initial"
                            >
                                <a href={link.href}>{link.title}</a>
                            </motion.div>
                        )
                    })
                }
            </div>

            <div className={styles.footer}>
                {
                    footerLinks.map( (link, index) => {
                        return (
                            <motion.div 
                            key={index}
                            custom={index}
                            variants={conditions}
                            animate="animate"
                            initial="initial"
                            >
                                <a href={link.href}>{link.title}</a>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}