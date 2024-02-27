"use client";

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
		<div className="h-full max-w-5xl space-y-4">
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={variant1}
			>
				<motion.h1 variants={variant2} className="text-3xl font-bold sm:text-6xl md:text-7xl font-trirong">CRÉATIVITÉ,</motion.h1>
				<h1 className="text-4xl font-bold sm:text-7xl md:text-8xl font-trirong">
					VISIONNEMENT
				</h1>
				<h1 className="text-3xl font-bold sm:text-6xl md:text-7xl font-trirong">CAPTIVANT</h1>
				<h3 className="sm:text-3xl md:text-4xl font-medium py-10">
					Agence de création évenementielle
				</h3>
				<div className="flex justify-center gap-x-6">
					<p className="border-2 border-[#6E05E6] rounded-full p-4">Conception</p>
					<p className="border-2 border-[#6E05E6] rounded-full p-4">Convaincant</p>
					<p className="border-2 border-[#6E05E6] rounded-full p-4">Visuelle</p>
				</div>
			</motion.div>
		</div>
	);
};
