"use client";

import gsap from "gsap";
import  style  from "./style.module.scss";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";

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
	useGSAP(() => {
		const tl = gsap.timeline();

		tl.from(".heroText", {
			y:200,
			ease: "power4.out",
			duration: 0.8,
			stagger: {
				amount: 0.4,
			}
		})

		tl.to("#dropedText", {
			transformOrigin: "top right",
			rotation: -2,
			duration:1,
			ease: "bounce.out",
		})

		tl.fromTo("#kite", {
			y:-50,
			opacity:0,
			ease:"bounce.in",
		},
		{
			y:0,
			opacity:1,
			duration: 1,
			ease: "bounce.out",
		})
	})

	return (
		<div className={`${style.main} h-screen w-full space-y-4 pt-[8rem] bg-violet-100`}>
			<iframe className="absolute right-0" src="https://lottie.host/embed/eb5080f1-ffcf-45ee-9451-c16f0869313c/Gk7Nwyy57u.json"></iframe>
			<div className="z-10 space-y-3 md:space-y-8 lg:space-y-1 flex flex-col justify-center items-center pt-2 lg:mx-12"
			>
				<div className="overflow-hidden">
					<h1 className="heroText uppercase font-heebo font-black text-3xl xsm:text-5xl sm:text-5xl md:text-6xl lg:text-8xl lg:pr-[32rem] 2xl:text-9xl  2xl:pr-[40rem] bg-gradient-to-r from-purple-700 to-fuchsia-400 bg-clip-text text-transparent">
						Créativité,
					</h1>
				</div>
				<div className="overflow-hidden">
					<h1 id="dropedText" className="heroText font-bold uppercase font-rubik-doodle text-3xl xsm:text-[3.5rem] sm:text-6xl  md:text-7xl lg:text-8xl lg:pr-[4rem]  1xl:text-[8.5rem] 2xl:pr-[1rem] p-6 bg-gradient-to-r from-purple-700 to-fuchsia-400 bg-clip-text text-transparent">
						Visionnement
					</h1>
					<iframe id="kite" className="absolute left-[4rem] top-[25rem]" src="https://lottie.host/embed/252d24f0-cb52-46ca-8f4d-f1f79cfa1c0b/7116v9a8w3.json"></iframe>
				</div>
				<div className="overflow-hidden">
					<h1 className="heroText  uppercase font-heebo font-black text-3xl xsm:text-5xl sm:text-5xl md:text-6xl lg:text-8xl lg:pl-[30rem] 2xl:text-9xl 2xl:pl-[34rem] bg-gradient-to-r from-purple-700 to-fuchsia-400 bg-clip-text text-transparent">
						Impéccable
					</h1>
				</div>
				<h3 className="sm:text-xl md:text-2xl  lg:text-3xl font-bold pt-[6rem]">
					Agence de création évènementielle
				</h3>
			</div>
			<div className="bg-[#613870] text-white absolute bottom-0 p-6 w-full">
				<h1>Border test</h1>
			</div>
			{/* <div className={`${style.popupContainer} flex justify-center items-center text-xs sm:text-sm lg:text-md font-bold`}>
				{/* map the popup text */}
				{/* <div className={`${style.popupElement}`}>
				{popupText.map((text, index) => {
					return (
						<p id="popup" key={index} className={`${style.popup} border-2 border-[#613870] rounded-[2rem] lg:p-3`}>
							{text}
						</p>
					)
				})} */}
				{/* </div> */}
			</div>
	);
};
