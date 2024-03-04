import Image from "next/image";
import { Trirong } from "next/font/google";

import { cn } from "@/lib/utils";

// La police Trirong est utilisée pour le logo
// La police est chargée avec les poids 400 et 600
const font = Trirong({
	subsets: ["latin"],
	weight: ["400", "600"],
});

export const Logo = () => {
	return (
		<div className="flex-none">
			{/* Utilise le logo noir en theme clair */}
			<Image 
				className="dark:hidden"
				src="/jc-logo-dark.svg" 
				height="300" 
				width="300" 
				alt="Jubilee Craft Logo" 
			/>

			{/* Utilise le logo blanc en theme sombre */}
			<Image 
				className="hidden dark:block"
				src="/jc-logo-light.svg" 
				height="100" 
				width="100" 
				alt="Jubilee Craft Logo" 
			/>
		</div>
	);
};
