"use client";

import styles from "@/pages/accueil/styles.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {

	const variant1 = {
		// On définit les propriétés de l'animation 
		// lorsqu'elle est cachée
		hidden: { 
			opacity: 0, 
			y: 100, 
			transition: {
				delay: 0.2,
				staggerChildren: 0.2
			}
		},
		// On définit les propriétés de l'animation
		// lorsqu'elle est visible
		visible: { 
			opacity: 1, 
			y: 0,
			transition: { delay: 0.8, duration: 0.4} 
		}
	};

	const variant2 = {
		hidden: { opacity: 0, y: 100 },
		visible: { 
			opacity: 1, 
			y: 0, 
			transition: { delay: 0.8, duration: 0.4 }
		}
	};

	const variant3 = {
		// On définit les propriétés de l'animation 
		// lorsqu'elle est cachée
		hidden: { opacity: 0, scale: 0},
		// On définit les propriétés de l'animation
		// lorsqu'elle est visible
		visible: { 
			opacity: 1, 
			scale: 1,
			ExpoScaleEaseease: "easeInOut",
			transition: { delay: 0.8, duration: 0.4 } 
		}
	};

	return (
    <div className={`${styles.main} min-h-screen w-full pt-[8rem] relative text-white`}>
        <div className="flex flex-col justify-center pt-2 pl-12 lg:mx-12">
				<motion.div variants={variant1} initial="hidden" animate="visible" className="text-container relative">
					<motion.div className="overflow-hidden">
							<h2 className={`${styles.secondText} uppercase font-heebo font-black`}>
								Créativité,
							</h2>
					</motion.div>
					<motion.div className="overflow-hidden">
							<h1 className={`${styles.secondText} font-bold uppercase font-heebo `}>
									Visionnement
							</h1>
					</motion.div>
					<motion.div className="overflow-hidden">
							<motion.h2 variants={variant2} initial="hidden" animate="visible" className={`${styles.bigText} uppercase font-rubik-doodle font-black `}>
									Impéccable
							</motion.h2>
					</motion.div>
				</motion.div>
					<motion.h3 variants={variant2} initial="hidden" animate="visible" className={`${styles.subText} font-bold pt-[3rem]`}>
							Agence de création évènementielle
					</motion.h3>
					<motion.div variants={variant3} initial="hidden" animate="visible" className="absolute bottom-0 left-20 sm:top-[2rem] sm:left-[23rem] lg:top-[-50px] lg:left-[34rem] max-w-[1200px]">
						<iframe className="mx-auto w-[60vw] h-[60vh] lg:w-[80vw] lg:h-[85vh]" src="https://lottie.host/embed/39972fb0-b576-488c-89e9-62426c91722a/VpRm4oesTK.json"></iframe>
					</motion.div>
        </div>

				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-6 flex justify-around items-center gap-12 w-full max-w-[1500px]">
				<motion.div variants={variant2} initial="hidden" animate="visible" className="flex-none relative w-full max-w-[200px] aspect-[70/45]">
						<Image className="w-52" src="/jc-logo-initial.svg" alt="Jubilee Craft logo" fill />
				</motion.div>
					<motion.p variants={variant2} initial="hidden" animate="visible" className={`${styles.placeText} uppercase`}>Montreal, Toronto et Quebec</motion.p>
				</div>
  </div>
);

};
