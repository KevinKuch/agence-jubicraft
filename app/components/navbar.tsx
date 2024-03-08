"use client";

import styles from './style.module.scss';

import { Logo } from "@/components/logo";
import { useScrollTop } from "@/components/use-nav-scroll"; 
import TransitionLink from './transitionLink';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
	// Ouvrir et fermer le menu
	const [menuOpen, setMenuOpen] = useState(false);

	const scrolled = useScrollTop();

	const handleNav = () => {
		setMenuOpen(!menuOpen);
	}

	return (
		<nav className={` fixed top-0 left-0 right-0 flex justify-center mx-auto max-w-[1600px] ${scrolled ? 'hidden' : ''} `} >
			<div className="flex justify-between items-center w-full mx-2 md:mx-6 lg:mx-12 mt-6 p-2 bg-white rounded-full shadow-md">
				<TransitionLink href="/" label="JubileeCraft" ></TransitionLink>
			
				<div className="hidden lg:flex items-end flex-row justify-end w-full gap-x-[1.5rem] font-bold text-xl pr-4">
					<TransitionLink href="/projets" label="Projets" />
					<TransitionLink href="/contact" label="Contact" />
					<TransitionLink href="/presentation" label="Présentation" />
				</div>
				<div className='bg-[#6E05E6] hidden lg:block rounded-full font-bold w-[13rem] px-2 py-4 text-center text-white'>
					Débuter un projet
				</div>
				<div onClick={handleNav} className='svg lg:hidden cursor-pointer '>
					<svg width="30px" height="30px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" stroke="">
						<path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#60386E"/>
						<path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#60386E"/>
						<path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#60386E"/>
					</svg>
				</div>
				<div className={`${styles.menu} ${menuOpen 
					? "fixed top-24 left-0 right-0 bg-white" 
					: "hidden"}`}>
					<ul>
						<Link href="/">
							<li>Projets</li>
						</Link>
						<Link href="/">
							<li>Contact</li>
						</Link>
						<Link href="/">
							<li></li>
						</Link>
						<Link href="/">
							<li>Presentation</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
