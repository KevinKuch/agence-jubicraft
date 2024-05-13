"use client"

import Transition from "@/components/transition";
import { useState, useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { useScroll } from 'framer-motion';
import styles from "@/pages/processus/styles.module.scss";
import Card from "@/components/card/index";
import Gallery from "@/components/gallery/index";
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
					<h2 className="mt-20 mx-auto underline">1 &#41; Mes inspirations pour débuter le projet</h2>
					<Gallery />
				</div>
				<div ref={container} className={styles.card}>
					<h2>Quelques codes...</h2>
					{
						projects.map( (project, i) => {
							const targetScale = 1 - ( (projects.length - i) * 0.05);
							// @ts-ignore
							return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
						})
					}
      </div>
			</section>
		</Transition>
		
	)
	
}