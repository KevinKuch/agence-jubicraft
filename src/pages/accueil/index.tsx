"use client";

import styles from '@/pages/accueil/styles.module.scss';
import  Hero  from './_components/hero';
import SectionImage from './_components/sectionImage';
import SectionAbout from './_components/sectionAbout';
import SectionExpertise from './_components/sectionExpertise';
import { useEffect } from 'react';




export default function Accueil() {

	useEffect( () => {
    (
      async () => {
        //@ts-ignore
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []) 

	return (
		<section className={`${styles.accueil}`}>
			<Hero />
			<SectionImage />
			<SectionAbout />
			<SectionExpertise />
		</section>
	)
}