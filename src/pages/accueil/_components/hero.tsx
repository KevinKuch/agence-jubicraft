import styles from "@/pages/accueil/styles.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { easeInOut, motion, useInView } from "framer-motion";

import HeroImage from "@/public/hero-image.jpg";

export default function Hero() {
	// State pour stocker la taille de l'image
	const [imageSize, setImageSize] = useState({ width: 300, height: 300 });

	// Effet pour gérer le redimensionnement de la fenêtre
	useEffect(() => {
		// Fonction pour gérer le redimensionnement de la fenêtre
		const handleResize = () => {
			// Obtenir la largeur de la fenêtre (viewport) en prenant la valeur minimale entre la largeur de la fenêtre du document et la largeur de la fenêtre du navigateur
			const vw = Math.min(
				document.documentElement.clientWidth,
				window.innerWidth || 0
			);

			// Calculer la nouvelle largeur en multipliant la largeur de la fenêtre par un coefficient (ajuster si nécessaire)
			let newWidth = vw * 0.5;

			// Calculer la nouvelle hauteur (si besoin) en conservant la même proportion que la largeur
			let newHeight = newWidth;

			// Appliquer une largeur et une hauteur maximales
			newWidth = Math.min(newWidth, 500); // Largeur maximale de 500 pixels
			newHeight = Math.min(newHeight, 500); // Hauteur maximale de 500 pixels

			// Mettre à jour la taille de l'image dans le state
			setImageSize({ width: newWidth, height: newHeight });
		};

		// Appeler la fonction de redimensionnement une fois au chargement de la page et à chaque fois que la fenêtre est redimensionnée
		handleResize();
		window.addEventListener("resize", handleResize);

		// Nettoyer l'écouteur d'événement lorsque le composant est démonté
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const heroImage = useRef(null);
	const heroBottom = useRef(null);
	// Hook GSAP pour animer l'image du héros seulement si la largeur de la fenêtre est supérieure à 768px
	useGSAP(() => {
		if (window.innerWidth > 768) {
			// Check if viewport width is greater than 768px
			gsap.registerPlugin(ScrollTrigger);
			const tl = gsap.timeline();
			tl.fromTo(
				heroImage.current,
				{
					yPercent: 20,
					scale: 1.5,
				},
				{
					yPercent: 0,
					scale: 1.2,
					duration: 2,
					ease: "power4.inOut",
				}
			);
			tl.add(() => {
				gsap.fromTo(
					heroImage.current,
					{
						scale: 1.2,
						yPercent: 0,
					},
					{
						scrollTrigger: {
							trigger: heroImage.current,
							start: "top top",
							end: "bottom bottom",
							scrub: 1,
						},
						scale: 1,
					}
				);
			});
		}
	});
	useGSAP(() => {
		gsap.fromTo(
			heroBottom.current,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 2,
				stagger: 0.2,
			}
		);
	});

	// Effet pour scroller en haut de la page lors du chargement
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const title = "JubileeCraft";
	const description =
		"Donnez vie à la créativité de vos évènement avec des designs, notre visionnement impeccable";
	const text = useRef(null);
	const container = useRef(null);
	const isInView = useInView(container); //framer-motion hook
	const slideUpText = {
		initial: { y: "100%"},
		animate: (i: number) => ({
			y: 0,
			transition: { duration: 0.8, delay: i * 0.03 + 1 },
		}),
		hidden: { y: "100%" },
	};
	const opacitycontent = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 2, easeInOut } },
		hidden: { opacity: 0 },
	};

	return (
		<section className={`${styles.hero} relative h-[120vh] lg:h-[175vh]`}>
			<div
				className={`${styles.heroImgContainer} absolute top-0 left-0 w-full h-full overflow-hidden`}
			>
				<Image
					className="hero-image w-full h-full object-cover object-center"
					ref={heroImage}
					src={HeroImage}
					alt="hero"
				/>
			</div>

			<div
				ref={container}
				className="hero-heading absolute top-0 left-0 h-[50%] mt-32 w-full"
			>
				<div className="hero-top">
					<h1
						data-scroll
						data-scroll-speed="0.1"
						className="font-heebo tracking-wide w-full text-[16vw] px-2 text-center"
						ref={text}
					>
						{
							// Fonction JS pour séparer les mots et les animer. Chaque mot est un span
							title.split("").map((letter, index) => {
								return (
									<span
										key={index}
										className="relative inline-flex overflow-hidden"
									>
										<motion.span
											variants={slideUpText}
											initial="initial"
											animate={isInView ? "animate" : "hidden"}
											custom={index}
										>
											{letter}
										</motion.span>
									</span>
								);
							})
						}
					</h1>
					<div
						data-scroll
						data-scroll-speed="0.2"
						className="hero-top__description flex flex-col items-start mx-10 max-w-[60%] lg:max-w-[30%]"
					>
						<p>
							{description.split(" ").map((word, index) => {
								return (
									<span
										key={index}
										className="mr-2 relative inline-flex overflow-hidden"
									>
										<motion.span
											variants={slideUpText}
											initial="initial"
											animate={isInView ? "animate" : "hidden"}
											custom={index}
										>
											{word}
										</motion.span>
									</span>
								);
							})}
						</p>
						<motion.div variants={opacitycontent}  
						initial="initial"
						animate={isInView ? "animate" : "hidden"}
						className="hero-bottom__link border py-2 px-10 mt-10 rounded-[100px] bg-skin-accent max-lg:hidden">
							<a href="#" className="text-skin-red text-center font-semibold">
								Débuter un projet
							</a>
						</motion.div>
					</div>
				</div>

				<div
					ref={heroBottom}
					data-scroll
					data-scroll-speed="0.7"
					className="hero-bottom mx-5 mt-16 flex flex-col justify-center items-center max-w-[62%] mx-auto"
				>
					<h2 className="text-white text-center pb-10 text-[4vw]">
						Agence de création évènementielle
					</h2>
					<div className="hero-bottom__img-wrapper flex justify-center">
						<Image
							src="/image1.jpg"
							alt="image 1"
							width={imageSize.width}
							height={imageSize.height}
							loading="lazy"
						/>
					</div>
					<div className="hero-bottom__link border py-2 px-10 mt-10 rounded-[100px] bg-skin-accent lg:hidden">
						<a
							href="#about"
							className="text-skin-red text-center font-semibold"
						>
							Débuter un projet
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
