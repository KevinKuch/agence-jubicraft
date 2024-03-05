import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "../public/twitter-logo.svg";

export const Footer = () => {
	return (
		<footer className="bg-violet-200 h-[70vh] lg:h-[80vh] w-full relative">
			<div className="mx-2 md:mx-6 lg:mx-12 max-w-[1600px]">
				<h1 className="font-trirong font-black pt-16 pb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Débuter un projet</h1>
				<hr className="h-px my-8 bg-[#60386E] border-0"/>
				<div className="pt-12 flex justify-between">
					<ul className="text-2xl md:text-3xl lg:text-4xl">
						<Link href="/">
							<li className="pb-4">Projets</li>
						</Link>
						<Link href="/">
							<li className="pb-4">Contact</li>
						</Link>
						<Link href="/">
							<li className="pb-4">Présentation</li>
						</Link>
					</ul>
					<div className="relative">
						<h2 className="pb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Suivez nos médias sociaux</h2>
						<ul className="flex items-center gap-4">
							<li><Image src="/facebook-icon.svg" alt="Facebook icon" width={34} height={34}/></li>
							<li><Image src="/twitter-icon.svg" alt="Twitter icon" width={34} height={34}/></li>
							<li><Image src="/instagram-icon.svg" alt="Instagram icon" width={34} height={34}/></li>
							<li><Image src="/linkedin-icon.svg" alt="Linkedin icon" width={34} height={34}/></li>
							<li><Image src="/youtube-icon.svg" alt="Youtube icon" width={36} height={36}/></li>
						</ul>
						<div className="absolute bottom-0 top-40">
							<Image src="/jc-logo-initial.svg" alt="Jubilee Craft logo" width={500} height={500}/>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 mx-2 md:mx-6 lg:mx-12 pb-4">
				<ul className="text-center space-y-2 lg:text-left">
					<li>Conditions d'utilisation</li>
					<li>Politique de confidentialité</li>
					<hr className="lg:hidden h-px my-8 bg-[#60386E] border-0"/>
					<li>©2024 Kevin Kuch. Tous droits réservés.</li>
				</ul>
			</div>
		</footer>
	);
};
