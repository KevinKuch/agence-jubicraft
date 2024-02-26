"use client";

import { Button } from "@/components/ui/button";

export const Hero = () => {
	return (
		<div className="max-w-3xl space-y-4">
			<h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">CRÉATIVITÉ</h1>
			<h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
				UN VISIONNEMENT
			</h1>
			<h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">CAPTIVANT</h1>
			<h3 className="text-base sm:text-xl md:text-2xl font-medium">
				Agence de création évenementielle
			</h3>
			<Button>Conception</Button>
			<Button>Convaincant</Button>
			<Button>Visuelle</Button>
		</div>
	);
};
