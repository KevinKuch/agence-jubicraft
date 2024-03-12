import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "../public/twitter-logo.svg";
import TransitionLink from "./TransitionLink";

 const Footer = () => {
	return (
		<footer className="w-full relative">
			<div className="mx-2 md:mx-6 lg:mx-12">
				<div className="flex justify-between items-center">
					<h1 className="font-trirong font-black pt-16 pb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Débuter un projet</h1>
					<iframe src="https://lottie.host/embed/eb5080f1-ffcf-45ee-9451-c16f0869313c/Gk7Nwyy57u.json"></iframe>
				</div>
				<hr className="bg-white h-px my-8 border-0"/>
				<div className="flex justify-between">
					<ul className="text-xl md:text-3xl lg:text-4xl flex flex-col items-start gap-8">
						<TransitionLink href="/projets" label="Projets"/>
						<TransitionLink href="/contact" label="Contact"/>
						<TransitionLink href="/presentation" label="Presentation"/>
					</ul>
					<div className="relative">
						<h2 className="pb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Suivez nos médias sociaux</h2>
						<ul className="flex items-center gap-4">
							<li><Image src="/facebook-icon.svg" alt="Facebook icon" width={34} height={34}/></li>
							<li><Image src="/twitter-icon.svg" alt="Twitter icon" width={34} height={34}/></li>
							<li><Image src="/instagram-icon.svg" alt="Instagram icon" width={34} height={34}/></li>
							<li><Image src="/linkedin-icon.svg" alt="Linkedin icon" width={34} height={34}/></li>
							<li><Image src="/youtube-icon.svg" alt="Youtube icon" width={36} height={36}/></li>
						</ul>
						<div className="relative w-full max-w-[500px] aspect-[70/45]">
							<Image src="/jc-logo-initial.svg" alt="Jubilee Craft logo" fill/>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-2 md:mx-6 lg:mx-12 pb-4">
				<ul className={`${styles.footerConditions} text-center lg:text-left`}>
					<li>Conditions d'utilisation</li>
					<li>Politique de confidentialité</li>
					<hr className="lg:hidden h-px my-2 border-0 bg-white"/>
					<li>©2024 Kevin Kuch. Tous droits réservés.</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;