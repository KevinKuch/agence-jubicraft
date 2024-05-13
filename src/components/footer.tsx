import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";
import Lottie from 'react-lottie';
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import footerImage from "@/public/footer-image.jpg";
import footerLogo from "@/public/jc-logo.svg";
import lottieRocket from "@/public/rocket.json";



 export default function Footer() {
	// Lottie animation
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: lottieRocket,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	// Hook GSAP pour animer l'image du footer 
	const footerImageAnim = useRef(null);
	const container = useRef(null);

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(footerImageAnim.current, {
			y: 150,
		}, {
			y: 0,
			scrollTrigger: {
				trigger: container.current,
				start: "top bottom",
				end: "bottom top",
				scrub: true
			}
		})
	})

	return (
		<footer ref={container} className="footer w-full relative bg-skin-base text-skin-base">
			<div className="footer__img-wrapper absolute top-0 left-0 w-full h-full overflow-hidden">
				<Image src={footerImage} alt="image footer" className="w-full h-full object-cover"/>
			</div>
			<div className="footer__container relative mx-5">
				<div className="mx-2 md:mx-6 lg:mx-12">
					<div className="flex justify-between items-center pt-10">
						<h1 className="pb-5 font-semibold">Débuter un projet</h1>
						<div className="w-[4rem] h-[4rem]">
							<Lottie options={defaultOptions} />
						</div>
					</div>
					<hr className="bg-white h-px border-0"/>
					<div className="flex justify-between pt-5">
						<ul className="font-semibold flex flex-col items-start gap-2">
							<Link href="/"><li className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Accueil</li></Link>
							<Link href="/projets"><li className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Projets</li></Link>
							<Link href="contact"><li className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Contact</li></Link>
							<Link href="processus"><li className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Processus</li></Link>
						</ul>
						<div className="relative">
							<p className="pb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Suivez nos médias sociaux</p>
							<ul className="flex items-center justify-center gap-4">
								<li className="border p-2 md:p-3 max-w-[60px] rounded-[50%] bg-skin-accent"><Image src="/facebook-icon.svg" alt="Facebook icon" width={20} height={20} layout="responsive"/></li>
								<li className="border p-2 md:p-3 max-w-[60px] rounded-[50%] bg-skin-accent"><Image src="/twitter-icon.svg" alt="Twitter icon" width={20} height={20} layout="responsive"/></li>
								<li className="border p-2 md:p-3 max-w-[60px] rounded-[50%] bg-skin-accent"><Image src="/instagram-icon.svg" alt="Instagram icon" width={20} height={20} layout="responsive"/></li>
								<li className="border p-2 md:p-3 max-w-[60px] rounded-[50%] bg-skin-accent"><Image src="/linkedin-icon.svg" alt="Linkedin icon" width={20} height={20} layout="responsive"/></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="py-10 lg:py-20 w-[80%] mx-auto">
					<Image src={footerLogo} alt="Jubilee Craft logo"/>
				</div>
				<div className="mx-2 md:mx-6 lg:mx-12 pb-4">
					<ul className={`${styles.footerConditions} text-center lg:text-left`}>
						<li>Conditions d&apos;utilisation</li>
						<li>Politique de confidentialité</li>
						<hr className="lg:hidden h-px my-2 border-0 bg-white"/>
						<li>©2024 Kevin Kuch. Tous droits réservés.</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
