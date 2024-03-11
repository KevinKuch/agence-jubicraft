import Image from "next/image";
import { Trirong } from "next/font/google";



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
				className="cursor-pointer"
				src="/jc-logo.svg" 
				height="200"
				width="200" 
				priority
				alt="Jubilee Craft Logo" 
			/>
		</div>
	);
};
