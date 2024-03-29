"use client";

import styles from './style.module.scss';
import Logo from './logo';
import gsap from 'gsap';

import { useEffect, useState } from 'react';
import NavMenu from './NavMenu';
import Link from 'next/link';




export default function Navbar() {
	
	// Ouvrir et fermer le menu
	const [menuClicked, setMenuClicked] = useState(false);
	
	function handleNavOpen() {
		setMenuClicked(!menuClicked);
		// console.log("menu clicked");
	}

	useEffect(() => {
		let tl = gsap.timeline({paused: true});

		if (menuClicked) {
			tl.from("#navbar", {
				backgroundColor: "#9A3A6C",
				duration: 0.4,
				ease: "sine.inOut",
				delay: 0.2,
			})
		} else {
			tl.from("#navbar", {
				backgroundColor: "transparent",
				duration: 0.4,
				ease: "sine.inOut",
				delay: 0.2,
			})
		}
	}, [menuClicked])


	return (
		<>
			<header>
				{/* <NavMenu toggle={menuClicked} /> */}
				<nav id="navbar" className="z-50 fixed top-0 flex items-center w-full p-6">
					<Link href="/">
						<Logo />
					</Link>
					<div className="justify-end w-full flex items-center gap-x-2 sm:hidden">
						<div className={`${styles.menuIcon}`}>
							<span onClick={handleNavOpen} className='cursor-pointer border-2 bg-skin-secondary rounded-full p-[0.2rem] px-4 text-white'>
								<span className='menuText uppercase'>
									{menuClicked ? "Close" : "Menu"}
								</span>
							</span>
						</div>
					</div>
					{/* Menu list displayed on navbar on desktop screens */}
					<div className="hidden sm:flex sm:justify-center sm:items-center sm:ml-auto sm:gap-x-2 md:gap-x-6 lg:gap-x-12 text-xl font-trirong uppercase font-semibold text-white">
						<Link href="/projets">
							Projets
						</Link>
						<Link href="/contact">
							Contact
						</Link>
						<Link href="/processus">
							Processus
						</Link>
      		</div>
				</nav>
			</header>
		</>
	);
};
