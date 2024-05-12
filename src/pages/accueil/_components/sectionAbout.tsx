"use client"
import styles from "@/pages/accueil/styles.module.scss";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Image from 'next/image';
import ImageAbout from '@/public/image6.jpg';
import ImageAbout2 from '@/public/image7.jpg';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

export default function SectionAbout(){

	const phrase = "Chez Jubilee Craft, nous somme reconnus pour notre grande sensibilité à percevoir et à créer la beauté en nous réinventant constamment."
	
	const text = useRef(null);

	const container = useRef(null);
	const isInView = useInView(container); //framer-motion hook
	// Variante de l'animation pour le texte Revealing
	const slideUpText = {
		initial: {y: "100%"},
		animate: (i: number) => ({y: 0 , transition: {duration: 0.8, delay: i * 0.04 + 1}}),
		hidden: {y: "100%"}
	}

	const image1 = useRef(null);
	const image2 = useRef(null);

	useGSAP(() => {
		gsap.to(image2.current, {
			yPercent: 100,
			duration: 1.2,
			scrollTrigger: {
				trigger: image2.current,
				start: "top center",
				end: "bottom bottom",
			}
		});
		gsap.to(image1.current, {
			yPercent: 100,
			duration: 1.2,
			scrollTrigger: {
				trigger: image1.current,
				start: "top-=60% center",
				end: "bottom bottom",
			}
		});
	})
	

	return ( 
		<section ref={container} className={`${styles.about} h-[130vh] lg:h-[200vh] overflow-hidden bg-skin-primary`}>
				<div className='py-10 lg:max-w-[800px]'>
					<h1 className='relative inline-flex overflow-hidden text-[2rem] pr-2 lg:text-[4rem]'>
						<motion.span variants={slideUpText} initial="initial" animate={isInView ? "animate" : "hidden"}  className=''>Artisans, Esthétiques</motion.span>
					</h1>
					<h1 className='relative inline-flex overflow-hidden text-[2rem] lg:text-[4rem]'>
						<motion.span variants={slideUpText} initial="initial" animate={isInView ? "animate" : "hidden"}  className=''>et Innovateurs</motion.span>
					</h1>
				</div>
				<div className='text-white font-telex md:text-xl lg:text-3xl md:mx-auto md:max-w-[1200px]'>
					<p ref={text} className="pb-6 lg:pb-16 lg:pl-[26rem]">
						{
							// Fonction JS pour séparer les mots et les animer. Chaque mot est un span
							phrase.split(" ").map((word, index) => {
								return <span key={index} className="mr-2 relative inline-flex overflow-hidden"><motion.span variants={slideUpText} initial="initial" animate={isInView ? "animate" : "hidden"} custom={index}>{word}</motion.span></span>
							})
						}
					</p>
					<div>
						<h2 data-scroll data-scroll-speed="0.1" className='pt-14 lg:pl-[35rem]'>À propos <iframe className="w-20 h-20" src="https://lottie.host/embed/c2cb0509-6959-4fad-8882-1ba69c93dfe3/EReLfnb8vo.json"></iframe></h2>
					</div>
				</div>
				<div className={`${styles.imgContainer}`}>
					<div data-scroll data-scroll-speed="0.2" className={`${styles.imgElement} relative overflow-hidden`}>
					<div ref={image1} className={`${styles.overlay} absolute top-0 left-0 w-full h-full bg-skin-primary opacity-100 z-10`}></div>
						<Image src={ImageAbout} fill alt="image-about" />
					</div>
					<div data-scroll data-scroll-speed="0.2" className={`${styles.imgElement} relative overflow-hidden`}>
					<div ref={image2} className={`${styles.overlay} absolute top-0 left-0 w-full h-full bg-skin-primary opacity-100 z-10`}></div>
						<Image src={ImageAbout2} fill alt="image-about" />
					</div>
				</div>
		</section>
		
	 );
}