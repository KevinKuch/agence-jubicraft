"use client";

import styles from './style.module.scss';
import { Logo } from "@/app/components/logo";
import { useScrollTop } from "@/app/components/use-nav-scroll"; 

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';


const Navbar = () => {
	// Ouvrir et fermer le menu
	const [menuOpen, setMenuOpen] = useState(false);

	const scrolled = useScrollTop();

	const handleNav = () => {
		setMenuOpen(!menuOpen);
	}


	// Animation du menu list et des bannières
	useGSAP(() => {
		let tl = gsap.timeline();

		tl.from(".bannerOne", {
			xPercent: -100,
			duration: 0.6,
		})
		tl.from(".bannerTwo", {
			xPercent: 100,
			duration: 0.6,
		}, "-=0.6") // Animation simultanée avec bannerOne
		
		tl.from(".menu-logo", {
			y: 100,
			duration: 0.8,
		}, ">-0.4")

		tl.from(".menu-list", {
			y:200,
			ease: "power4.out",
			duration: 0.8,
			stagger: {
				amount: 0.2,
			}
		}, ">-0.4"); // Commence l'animation après l'animation précédente, mais avec un délai de 0.4s
		
	})




	return (
		<nav className={`z-50 fixed top-0 left-0 right-0 flex justify-center mx-auto max-w-[1600px] ${scrolled ? 'hidden' : ''} `} >
			<div className="flex justify-between items-center w-full mx-2 md:mx-6 lg:mx-12 mt-6 p-2 bg-white rounded-full shadow-md">
				<Link href="/">
					<Logo />
				</Link>
				<div className="hidden lg:flex items-end flex-row justify-end w-full gap-x-[1.5rem] font-bold text-xl pr-4">
					<Link href="/projets">Projets</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/presentation">Présentation</Link>
					{/* <ModeToggle /> */}
				</div>
				<div className='bg-[#6E05E6] hidden lg:block rounded-full font-bold w-[13rem] px-2 py-4 text-center text-white'>
					Débuter un projet
				</div>
				<div onClick={handleNav} className='svg lg:hidden cursor-pointer '>
					<svg width="50px" height="50px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" stroke="">
						<path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#60386E"/>
						<path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#60386E"/>
						<path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#60386E"/>
					</svg>
				</div>

				{/* Menu mobile */}
				{/* <div className={`${menuOpen ? "fixed top-0 left-0 right-0 w-[100%] h-[100%]" : "hidden"}`}> */}
					<div className='fixed top-0 left-0 right-0 w-[100%] h-[100%]'>
						<div className={`${styles.inner}`}>
							<span className='bannerOne min-h-screen bg-red-500 fixed top-0 left-0 w-1/2'></span>
							<span className='bannerTwo min-h-screen bg-slate-500 fixed top-0 left-1/2 w-1/2'></span>
						</div>
						<div className={`${styles.menuList} h-full flex flex-col justify-center items-center text-7xl relative`}>
							<div className='absolute top-12 left-8 overflow-hidden'>
								<div className="menu-logo">
									<Logo />
								</div>
							</div>
							<ul className='flex flex-col justify-center items-center gap-20'>
								<Link href="/projets" className='overflow-hidden'>
									<li className='menu-list '>Projets</li>
								</Link>
								<Link href="/" className='overflow-hidden'>
									<li className='menu-list'>Contact</li>
								</Link>
								<Link href="/" className='overflow-hidden'>
									<li className='menu-list'>Presentation</li>
								</Link>
								<Image onClick={handleNav} className="cursor-pointer absolute top-10 right-8" src="/close-menu.svg" alt="Close menu" width={45} height={45} />
							</ul>
						</div>
				</div>

			</div>
		</nav>
	);
};

export default Navbar;
