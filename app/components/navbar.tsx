"use client";

import styles from './style.module.scss';
import { Logo } from "@/app/components/logo";
import { useScrollTop } from "@/app/components/use-nav-scroll"; 
import { cn } from "@/lib/utils";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';
import NavMenu from './NavMenu';




export default function Navbar() {
	const scrolled = useScrollTop();

	// Ouvrir et fermer le menu
	const [menuClicked, setMenuClicked] = useState(false);
	



	function handleNavOpen() {
		setMenuClicked(!menuClicked);
		// console.log("menu clicked");
	}


	return (
		<>
			<header>
				<NavMenu toggle={menuClicked}/>
				<nav className="z-50 bg-background fixed top-0 flex items-center w-full p-6">
					<Link href="/">
						<Logo />
					</Link>
					<div className="justify-end w-full flex items-center gap-x-2 sm:hidden">
						<div className={`${styles.menuIcon}`}>
							<span onClick={handleNavOpen} className='cursor-pointer border-2 border-[#613870] rounded-full p-[0.2rem] px-4 z-100'>
								<span className='menuText uppercase'>
									{menuClicked ? "Close" : "Menu"}
								</span>
							</span>
						</div>
					</div>
					{/* Menu list displayed on navbar on desktop screens */}
					<div className="hidden sm:flex sm:justify-center sm:items-center sm:ml-auto sm:gap-x-2 md:gap-x-6 lg:gap-x-12 text-xl font-trirong uppercase font-semibold">
						<Link href="/projets">Projets</Link>
						<Link href="/contact">Contact</Link>
						<Link href="/presentation">Présentation</Link>
      		</div>
				</nav>
			</header>
		</>
	);
};
