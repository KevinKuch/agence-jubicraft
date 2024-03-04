"use client";

import styles from './style.module.scss';

import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import Menu from './burger';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="z-50 fixed top-0 left-0 right-0 flex justify-center">
			<div className="flex justify-center items-center w-full mx-12 mt-6 p-2 bg-white rounded-full shadow-md">
				<Link href="/">
					<Logo />
				</Link>
				<div className="flex flex-col items-end lg:flex-row justify-end w-full gap-x-[1.5rem] font-bold text-xl pr-4">
					<Link href="/projets">Projets</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/presentation">Présentation</Link>
					{/* <ModeToggle /> */}
				</div>
				<div className='bg-[#6E05E6] rounded-full font-bold w-[20%] px-2 py-4 text-center text-white'>
					Débuter un projet
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
