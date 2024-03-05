"use client";

import styles from './style.module.scss'
import Image from 'next/image'
import Image1 from '../../../public/image1.jpg'
import Image2 from '../../../public/image2.jpg'
import Image3 from '../../../public/image3.jpg'
import Image4 from '../../../public/image4.jpg'
import Image5 from '../../../public/image5.jpg'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { useScroll, useTransform, motion } from 'framer-motion'




const Section2 = () => {

	// Lenis scroll animation pour un effect de smooth
	// https://github.com/darkroomengineering/lenis
	useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])

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
	// [1, 4] est la plage de transformation en scale, on peut mettre n'importe quelle valeur
	const scaleImage1 = useTransform(scrollYProgress, [0, 1], [1, 4])
	const scaleImage2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scaleImage3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scaleImage4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scaleImage5 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	// On crée un tableau d'images avec leur scale
	const images = [
		{
				src: Image1,
				scale: scaleImage1
		},
    {
        src: Image2,
        scale: scaleImage1
    },
    {
        src: Image3,
        scale: scaleImage2
    },
		{
				src: Image4,
				scale: scaleImage5
		},
		{
				src: Image5,
				scale: scaleImage4
		}

]

	return ( 
		<div ref={container} className={`${styles.container} h-300 bg-white`}>
			<div className={styles.sticky}>
				{
					// On map les images pour les afficher
					images.map(({src, scale}, index) => {
						// On utilise motion.div pour animer les images
						// On utilise scale pour animer le scale de l'image sur les parents
						return <motion.div style={{scale}} key={index} className={styles.element}>
						<div className={styles.imageContainer}>
							<Image
								src={src}
								fill
								alt='images'
								placeholder='blur'
							/>
						</div>
					</motion.div>
					})
				}
			</div>
		</div>
	 );
}
 
export default Section2;