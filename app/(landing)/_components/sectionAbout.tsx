"use client"
import styles from './style.module.scss';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import Image from 'next/image';
import ImageAbout from '../../../public/image-6.jpg';
import ImageAbout2 from '../../../public/image7.jpg';

const About = () => {

	const textes = ["Chez Jubilee Craft, votre succès est la nôtre", "créativité débordante et expertise", "Nous mettons en œuvre notre intelligence créative collective à chaque projet pour atteindre cet objectif commun", "Vivez une expériences mémorables"]
	
	const text = useRef(null);
	
	useGSAP(() => {
		gsap.from(text.current, {
				scrollTrigger: {
						trigger: '.about-split-text',
						start: 'top center',
						end: 'bottom center%',
						scrub: true,
						markers: true,
				},
				opacity: 0.2,
				stagger: 0.1,
				duration: 2,
		});
});

	return ( 
		<section className={`${styles.about} h-[200vh] bg-[#613870] overflow-hidden`}>
			<div className='text-white font-trirong font-black text-4xl lg:text-7xl pt-24 pb-12 mx-auto max-w-[1200px]'>
				<h1>Artisans, Esthétiques</h1>
				<h1>et Innovateurs</h1>
			</div>
			<div className='text-white font-telex md:text-xl lg:text-3xl md:mx-auto md:max-w-[1200px]'>
				<h1 ref={text} className="pb-6 lg:pb-16 lg:pl-[35rem]">Chez Jubilee Craft, nous somme reconnus pour notre grande sensibilité à percevoir et à créer la beauté en nous réinventant constamment.</h1>
				<h2 data-scroll data-scroll-speed="0.1" className='pb-16 lg:pl-[35rem]'>À propos <span className='underline'>logo</span></h2>
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