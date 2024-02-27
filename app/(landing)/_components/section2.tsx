"use client";

import styles from './style.module.scss'
import Image from 'next/image'
import Image1 from '../../../public/image1.jpg'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'




const SectionImages = () => {

	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end']
	})

	// L'image est de 25vw et 25vh, donc on le multiplie par 4 pour qu'elle prenne toute la hauteur de l'écran
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