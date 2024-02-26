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
		<div className="md:flex items-center gap-x-2">
			<Image src="/logo-jc.svg" height="100" width="100" alt="Logo" />
		</div>
	);
};
