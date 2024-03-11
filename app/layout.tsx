import type { Metadata } from "next";
import { Telex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



const telex = Telex({ 
	subsets: ["latin"],
	weight: ['400'], 
});

export const metadata: Metadata = {
	title: "Agence JubiCraft",
	description: "Website of Agence JubiCraft",
	// Theme du logo sur le navigateur en fonction du thème du système (favicons)
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/jc-logo-dark.svg",
				href:	"/jc-logo-dark.svg",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/jc-logo-light.svg",
				href: "/jc-logo-light.svg",
			}
		]
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={telex.className}>
			{/* Provenant du shadcn Theme du /components/providers/theme-provider.tsx */}
			<main>
				<Navbar />
				{children}
				<Footer />
			</main>
			</body>
		</html>
	);
}
