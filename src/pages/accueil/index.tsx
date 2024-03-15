import styles from '@/pages/accueil/styles.module.scss';
import { Hero } from './_components/hero';




export default function Accueil() {
	return (
		<section className={`${styles.accueil}`}>
			<Hero />
		</section>
	)
}