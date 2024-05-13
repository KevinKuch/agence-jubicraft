"use client";

import styles from "@/pages/accueil/styles.module.scss";
import Image from 'next/image'
import Image1 from '@/public/image1.jpg'
import Image2 from '@/public/image2.jpg'
import Image3 from '@/public/image3.jpg'
import Image4 from '@/public/image4.jpg'
import Image5 from '@/public/image5.jpg'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { useScroll, useTransform, motion } from 'framer-motion'
import Lottie from 'react-lottie';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";





export default function SectionImage() {

	// Lenis scroll animation pour un effect de smooth
	// https://github.com/darkroomengineering/lenis
	useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time: number) {
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
	const scaleHeading = useTransform(scrollYProgress, [0, 1], [0.5, 2]);
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
        scale: scaleImage3
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
	useEffect(() => {
    // Ensure ScrollTrigger is only added once
		gsap.registerPlugin(ScrollTrigger);

    // Animation gsap pour ouvrir et fermer les overlay avec scrolltrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top center',
        end: 'top top+=10%', 
        scrub: true, 
        // markers: true 
      }
    });
    tl.to('.overlay.left', { width: 0, duration: 1 }, 0)
      .to('.overlay.right', { width: 0, duration: 1 }, 0);

    // Tuer l'animation pour éviter les fuites de mémoire
    return () => {
      tl.kill(); 
    };
  }, []);

	

	return ( 
		<div ref={container} className={`${styles.container} h-300 bg-skin-primary`}>

			{/* Overlay qui permet de faire l'ouverture ou fermature */}
			<div className="overlay left absolute top-0 left-0 w-1/2 h-full bg-skin-base z-[1] overflow-hidden"></div>
      <div className="overlay right absolute top-0 right-0 w-1/2 h-full bg-skin-base z-[1] overflow-hidden"></div>

			<div className={styles.sticky}>
				<Link href="/projets">
					<motion.h2  style={{ scale: scaleHeading }} className="absolute right-50 left-[30%] translate-x-[-50%] top-96 lg:right-50 lg:left-[43%] lg:translate-x-[-50%] lg:top-80 z-[100] underline font-bold">Voir nos projets</motion.h2>
				</Link>
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
								sizes='(max-width: 768px) 100vw, 768px'
							/>
						</div>
					</motion.div>
					})
				}
			</div>
		</div>
	 );
}
 