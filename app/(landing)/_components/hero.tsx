"use client";

import { Button } from "@/components/ui/button";

export const Hero = () => {
	return (
		<div className="h-full max-w-5xl space-y-4">
			<h1 className="text-3xl font-bold sm:text-6xl md:text-7xl font-trirong">CRÉATIVITÉ,</h1>
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
		</div>
	);
};
