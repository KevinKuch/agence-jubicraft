import styles from "@/pages/accueil/styles.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(heroImage.current, {
      scrollTrigger: {
        trigger: heroImage.current,
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: 1,
      },
      scale: 1.5,
      y: 100,
    });
  });  

  const title = "JubileeCraft";
  const text = useRef(null);

	return (
		<section className={`${styles.hero} relative h-[120vh] lg:h-[175vh]`}>
			<div className={`${styles.heroImgContainer} absolute top-0 left-0 w-full h-full overflow-hidden`}>
				<Image
          className="hero-image"
          ref={heroImage}
					src="/hero-image.jpg"
					alt="hero"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<div className="hero-heading absolute top-0 left-0 h-[50%] mt-32 w-full">
				<div className="hero-top">
					<h1 className="tracking-wide w-full text-[16vw] px-2 text-center" ref={text}>
						JubileeCraft
					</h1>
					<div className="hero-top__description flex flex-col items-start mx-10 max-w-[60%] lg:max-w-[30%]">
						<p className="pt-10">
							Donnez vie à la créativité de vos évènement avec des designs,
							notre visionnement impeccable
						</p>
						<div className="hero-bottom__link border py-2 px-10 mt-10 rounded-[100px] bg-skin-accent max-lg:hidden">
							<a
								href="#"
								className="text-skin-red text-center font-semibold"
							>
								Débuter un projet
							</a>
						</div>
					</div>
				</div>

				<div className="hero-bottom mx-5 mt-28 flex flex-col justify-center items-center">
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
