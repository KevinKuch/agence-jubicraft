"use client";

import styles from './style.module.scss';

import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import Menu from './burger';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className={cn("z-50 fixed top-0 flex items-center w-full p-6")}>
			<Link href="/">
				<Logo />
			</Link>
			<div className="ml-auto justify-end w-full flex items-center gap-x-[1.5rem] text-2xl">
				<Link className="" href="/projets">Projets</Link>
				<Link className="" href="/talents">Équipes</Link>
				<Link className="" href="/contact">Contact</Link>
				<Link className="" href="/presentation">Présentation</Link>
				<ModeToggle />
			</div>
		</div>
	);
};

export default Navbar;
