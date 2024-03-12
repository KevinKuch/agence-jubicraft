"use client";

import gsap from "gsap";
import  styles  from "./style.module.scss";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export const Hero = () => {

	const variant1 = {
		// On définit les propriétés de l'animation 
		// lorsqu'elle est cachée
		hidden: { opacity: 0, x: -100 },
		// On définit les propriétés de l'animation
		// lorsqu'elle est visible
		visible: { opacity: 1, x: 0 }
	};

	const variant2 = {
		hidden: { opacity: 0, y: -100 },
		visible: { opacity: 1, y: 0 }
	};

	return (
    <div className={`${styles.main} min-h-screen w-full pt-[8rem] relative`}>
        <div className="flex flex-col justify-center pt-2 pl-12 lg:mx-12">
					<div className="text-container relative">
						<div className="overflow-hidden">
								<h2 className={`${styles.secondText} uppercase font-heebo font-black`}>
										Créativité,
								</h2>
						</div>
						<div className="overflow-hidden">
								<h1 className={`${styles.secondText} font-bold uppercase font-heebo `}>
										Visionnement
								</h1>
						</div>
						<div className="overflow-hidden">
								<h2 className={`${styles.bigText} uppercase font-rubik-doodle font-black `}>
										Impéccable
								</h2>
						</div>
					</div>
					<h3 className={`${styles.subText} font-bold pt-[3rem]`}>
							Agence de création évènementielle
					</h3>
					<div className="absolute bottom-0 left-20 sm:top-[2rem] sm:left-[23rem] lg:top-[-50px] lg:left-[34rem] max-w-[1200px]">
						<iframe className="mx-auto w-[60vw] h-[60vh] lg:w-[80vw] lg:h-[85vh]" src="https://lottie.host/embed/39972fb0-b576-488c-89e9-62426c91722a/VpRm4oesTK.json"></iframe>
					</div>
        </div>

				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-6 flex justify-around items-center gap-12 w-full max-w-[1500px]">
				<div className="flex-none relative w-full max-w-[200px] aspect-[70/45]">
						<Image className="w-52" src="/jc-logo-initial.svg" alt="Jubilee Craft logo" fill />
				</div>
					<p className={`${styles.placeText} uppercase`}>Montreal, Toronto et Quebec</p>
				</div>
  </div>
);

};
