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

	// useGSAP est un hook qui permet d'appliquer des animations et cela tue automotiquement les animations sans avoir à utiliser useEffect avec sa dépendance
	// useGSAP(() => {
	// 	const tl = gsap.timeline();

	// 	tl.from(".heroText", {
	// 		y:200,
	// 		ease: "power4.out",
	// 		duration: 0.8,
	// 		stagger: {
	// 			amount: 0.4,
	// 		}
	// 	})

	// 	tl.to("#dropedText", {
	// 		transformOrigin: "top right",
	// 		rotation: -2,
	// 		duration:1,
	// 		ease: "bounce.out",
	// 	})
	// })

	return (
    <div className={`${styles.main} min-h-screen w-full space-y-4 pt-[8rem] relative`}>
        <div className="z-10 md:space-y-6 lg:space-y-1 flex flex-col justify-center items-center pt-2 lg:mx-12">
            <div className="overflow-hidden">
                <h2 className={`${styles.secondText} heroText text-9xl uppercase font-heebo font-black `}>
                    Créativité,
                </h2>
            </div>
            <div className="overflow-hidden">
                <h1 id="dropedText" className={`${styles.bigText} heroText text-[10rem] font-bold uppercase font-rubik-doodle p-6 `}>
                    Visionnement
                </h1>
            </div>
            <div className="overflow-hidden">
                <h2 className={`${styles.secondText} heroText uppercase text-8xl font-heebo font-black `}>
                    Impéccable
                </h2>
            </div>
            <h3 className={`${styles.subText} font-bold pt-[8rem]`}>
                Agence de création évènementielle
            </h3>
        </div>
				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-6 px-6 flex justify-between items-center gap-12 overflow-x-hidden w-full max-w-[1500px]">
					<div className="flex-none">
							<Image className="w-52" src="/jc-logo-initial.svg" alt="Jubilee Craft logo" width={100} height={100} />
					</div>
					<p className={`${styles.placeText} uppercase`}>Montreal, Toronto et Quebec</p>
				</div>
    </div>
);

};
