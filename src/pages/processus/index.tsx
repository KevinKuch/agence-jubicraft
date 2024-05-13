"use client"

import Transition from "@/components/transition";
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'
import { useScroll } from 'framer-motion';
import styles from "@/pages/processus/styles.module.scss";
import Card from "@/components/card/index";
import Gallery from "@/components/gallery/index";
import arrowRight from "@/public/arrow-right.svg";
import { projects } from '../../components/code/data';

export default function Processus() {

	const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

	useEffect( () => {
    (
      async () => {
				//@ts-ignore
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

	return (
		<Transition>
			<section className="pt-20 px-10 bg-skin-base">
				<h1>Processus tout au long du Projet</h1>

				<div className={styles.gallery}>
					<div className="gallery-title flex gap-5 pt-20">
						<Image src={arrowRight} alt="arrow-right" className="w-[3rem] transition-transform hover:translate-x-3"/>
						<h2 className="underline">Mes inspirations pour débuter le projet</h2>
					</div>
					<Gallery />
				</div>
				<div ref={container} className={styles.card}>
					<div className="code-title flex gap-5 items-center">
						<Image src={arrowRight} alt="arrow-right" className="w-[3rem] transition-transform hover:translate-x-3"/>
						<h2>Quelques codes...</h2>
					</div>
					{
						projects.map( (project, i) => {
							const targetScale = 1 - ( (projects.length - i) * 0.05);
							// @ts-ignore
							return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
						})
					}
      </div>
			<div className="conclusion pt-24 pb-32">
					<h1 className="text-center">! Exploration et Case study !</h1>
			</div>
			</section>
		</Transition>
		
	)
	
}