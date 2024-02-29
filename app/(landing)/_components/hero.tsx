"use client";

import  style  from "./style.module.scss";
import { motion } from "framer-motion";

export const Hero = () => {

	const variant1 = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 }
	};

	const variant2 = {
		hidden: { opacity: 0, y: -100 },
		visible: { opacity: 1, y: 0 }
	};
	

	return (
		<div className={`${style.main} h-screen w-screen space-y-4 pt-[8rem]`}>
			<div className="absolute top-0 -z-10 h-full w-full">
				<div className="absolute bottom-auto left-0 right-0 top-0 h-[50rem] w-[50rem] -translate-x-[60%] translate-y-[20%] rounded-full bg-[rgba(193,145,247,0.94)] opacity-50 dark:opacity-20 blur-[200px]">
				</div>
				<div className="absolute bottom-auto left-auto right-0 top-0 h-[50rem] w-[50rem] -translate-x-[200%] translate-y-[20%] rounded-full bg-[rgba(248,190,233,0.84)] opacity-50 dark:opacity-20 blur-[200px]">
				</div>
				<div className="absolute bottom-auto left-auto right-0 top-0 h-[50rem] w-[50rem] -translate-x-[70%] translate-y-[80%] rounded-full bg-[rgba(247,156,223,0.84)] opacity-50 dark:opacity-20 blur-[200px]">
				</div>
				<div className="absolute bottom-auto left-auto right-0 top-0 h-[50rem] w-[50rem] -translate-x-[0%] translate-y-[10%] rounded-full bg-[rgba(239,185,255,0.84)] opacity-50 dark:opacity-20 blur-[200px]">
				</div>
				<div className="absolute bottom-auto left-auto right-0 top-0 h-[50rem] w-[50rem] -translate-x-[10%] translate-y-[0%] rounded-full bg-[rgba(202,160,214,0.84)] opacity-50 dark:opacity-20 blur-[200px]">
				</div>
			</div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={variant1}
				className="z-10 space-y-3 md:space-y-8 lg:space-y-12 flex flex-col border border-red-500 justify-center items-center"
			>
				<h1 className="font-bold uppercase font-trirong text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:pr-[32rem] 2xl:text-9xl  2xl:pr-[40rem]">Créativité,</h1>
				<h1 className="font-bold uppercase font-rubik text-3xl sm:text-6xl md:text-7xl lg:text-8xl lg:pr-[4rem]  2xl:text-[10rem] 2xl:pr-[1rem] bg-[pink] origin-bottom-left -rotate-[4deg] lg:translate-y-8 p-2">Visionnement</h1>
				<h1 className="font-bold uppercase font-trirong text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:pl-[30rem] 2xl:text-9xl 2xl:pl-[34rem]">Impeccable</h1>
				<h3 className="sm:text-3xl md:text-4xl font-medium pt-32">
					Agence de création évenementielle
				</h3>
			</motion.div>
		</div>
	);
};
