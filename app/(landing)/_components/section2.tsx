"use client";

import styles from './style.module.scss'
import Image from 'next/image'
import Image1 from '../../../public/image1.jpg'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'




const SectionImages = () => {

	const container = useRef(null)
	// On utilise useScroll (framer-motion) pour observer le défilement de la page
	const { scrollYProgress } = useScroll({
		// Spécification de la cible à observer pour le défilement
		target: container,
		// Définition des offsets pour le début et la fin du défilement
		offset: ['start start', 'end end']
	})

	// L'image est de 25vw et 25vh, donc on le multiplie par 4 pour qu'elle prenne toute la hauteur de l'écran
	// [0, 1] est la plage de défilement
	// [1, 4] est la plage de transformation en scale
	const scaleCenterImage = useTransform(scrollYProgress, [0, 1], [1, 4])

	return ( 
		<div ref={container} className={`${styles.container} h-300 bg-red-800`}>
			<div className={styles.sticky}>
				<div className={styles.element}>
					<motion.div style={{scale: scaleCenterImage}} className={styles.imageContainer}>
						<Image
							src={Image1}
							fill
							alt='image1'
							placeholder='blur'
						/>
					</motion.div>
				</div>
			</div>
		</div>
	 );
}
 
export default SectionImages;