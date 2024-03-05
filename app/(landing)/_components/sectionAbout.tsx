"use client"
import styles from './style.module.scss';

import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { motion, useInView } from 'framer-motion';

import Image from 'next/image';
import ImageAbout from '../../../public/image-6.jpg';
import ImageAbout2 from '../../../public/image7.jpg';

const About = () => {

	const textes = ["Chez Jubilee Craft, votre succès est la nôtre", "créativité débordante et expertise", "Nous mettons en œuvre notre intelligence créative collective à chaque projet pour atteindre cet objectif commun", "Vivez une expériences mémorables"]

	const phrase = "Chez Jubilee Craft, nous somme reconnus pour notre grande sensibilité à percevoir et à créer la beauté en nous réinventant constamment."
	
	const text = useRef(null);
	
	useGSAP(() => {
		gsap.from(text.current, {
				scrollTrigger: {
						trigger: '.about-split-text',
						start: 'top center',
						end: 'bottom center%',
						scrub: true,
						// markers: true,
				},
				opacity: 0.2,
				stagger: 0.1,
				duration: 2,
		});
});

	const container = useRef(null);
	const isInView = useInView(container); //framer-motion hook
	const slideUpText = {
		initial: {y: "100%"},
		animate: (i: number) => ({y: 0 , transition: {duration: 0.4, delay: i * 0.02}}),
		hidden: {y: "100%"}
	}

	return ( 
		<section ref={container} className={`${styles.about} h-[200vh] bg-[#613870] overflow-hidden`}>
			<div className='text-white font-trirong font-black text-4xl lg:text-7xl pt-24 pb-12 mx-auto max-w-[1200px]'>
				<h1>Artisans, Esthétiques</h1>
				<h1>et Innovateurs</h1>
			</div>
			<div className='text-white font-telex md:text-xl lg:text-3xl md:mx-auto md:max-w-[1200px]'>
				<p ref={text} className="pb-6 lg:pb-16 lg:pl-[35rem]">
					{
						phrase.split(" ").map((word, index) => {
							return <span key={index} className="mr-2 relative inline-flex overflow-hidden"><motion.span variants={slideUpText} initial="initial" animate={isInView ? "animate" : "hidden"} custom={index}>{word}</motion.span></span>
						})
					}
				</p>
				<div>
					<h2 data-scroll data-scroll-speed="0.1" className='pb-16 lg:pl-[35rem]'>À propos <iframe className="w-20 h-20" src="https://lottie.host/embed/c2cb0509-6959-4fad-8882-1ba69c93dfe3/EReLfnb8vo.json"></iframe></h2>
				</div>
			</div>
			<div className={`${styles.imgContainer}`}>
				<div data-scroll data-scroll-speed="0.2" className={`${styles.imgElement}`}>
					<Image src={ImageAbout} fill alt="image-about" />
				</div>
				<div data-scroll data-scroll-speed="0.3" className={`${styles.imgElement} `}>
					<Image src={ImageAbout2} fill alt="image-about" />
				</div>
			</div>
		</section>
		
	 );
	 
}
 
export default About;