"use client";

import styles from "@/pages/accueil/styles.module.scss";
import { useRef, useState } from 'react';
import Image from 'next/image'

import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useInView } from 'framer-motion';


export default function SectionExpertise() {

	const events = [
		{
				title: "Conception et création",
				src: "music-concert-unsplash.jpg"
		},
		{
				title: "Production et animation",
				src: "couleur-art-unsplash.jpg"
		},
		{
				title: "Identité visuelle et design",
				src: "glacier-unsplash.jpg"
		},
		{
				title: "Animation et divertissement",
				src: "camping-unsplash.jpg"
		},
	]

		const [hoverEvents, setHoverEvents] = useState(0);
    const imageContainer = useRef(null);
		const expertiseSection = useRef(null);

		useGSAP(() => {
			gsap.registerPlugin(ScrollTrigger);
			ScrollTrigger.create({
				trigger: imageContainer.current,
				start: '-350px',
				end: '.expertise',
				pin: true,
				// markers: true,
			})
		})

		const container = useRef(null);
		const isInView = useInView(container); //framer-motion hook

		const slideUpText = {
			initial: {y: "100%"},
			animate: (i: number) => ({y: 0 , transition: {duration: 0.4, delay: i * 0.02}}),
			hidden: {y: "100%"}
		}


	return ( 
		<section ref={expertiseSection} className={`${styles.expertise} h-[120vh] w-full pb-12 bg-skin-secondary text-white`}>
			<div ref={container}>
				<h1 className="font-trirong font-black text-4xl lg:text-7xl max-auto my-16 max-w-[1200px relative inline-flex overflow-hidden"><motion.span variants={slideUpText} initial="initial" animate={isInView ? "animate" : "hidden"}>Nos Expertise</motion.span></h1>
			</div>
			<div className={`${styles.expertiseDes}`}>
				<div ref={imageContainer} className={`${styles.imageContainer} hidden md:block`}>
					<Image
						src={`/${events[hoverEvents].src}`}
						fill={true}
						alt={events[hoverEvents].title}
					/>
				</div>
				<div data-scroll data-scroll-speed="0.1" className={`${styles.column}  md:text-xl lg:text-2xl`}>
					<p>Jubilee Craft excelle dans la planification stratégique d&apos;événements, offrant des festivals immersifs où chaque détail est méticuleusement façonné pour captiver vos participants.</p>
        </div>
				<div data-scroll data-scroll-speed="0.2" className={`${styles.column}  md:text-xl lg:text-2xl`}>
					<p>Jubilee Craft, plongez dans l&apos;univers des festivals exceptionnels, où la créativité fusionne avec une exécution impeccable, créant ainsi des moments magiques et des souvenirs durables.</p>
				</div>
			</div>
			<div className={`${styles.expertiseList} lg:pt-[4rem] lg:mb-[12rem]`}>
				{
					events.map((event, index) => {
						return <div onMouseOver={() => {setHoverEvents(index)}} className={`${styles.expertiseEl} flex justify-start border-t  uppercase font-black cursor-pointer md:justify-end`} key={`p_${index}`}>
							<p className={`${styles.expertTitle} text-xl p-4 md:text-2xl lg:text-3xl`}>{event.title}</p>
							</div>
					})
				}
			</div>
		</section>
	 );
}
 