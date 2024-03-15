import styles from '@/pages/accueil/styles.module.scss';
import  Hero  from './_components/hero';
import SectionImage from './_components/sectionImage';
import { useEffect } from 'react';




export default function Accueil() {

	return (
		<section className={`${styles.accueil}`}>
			<Hero />
			<SectionImage />
		</section>
	)
}