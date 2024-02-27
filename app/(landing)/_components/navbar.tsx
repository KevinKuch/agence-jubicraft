"use client";

import styles from './style.module.scss';

import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
	return (
		<div className={cn("z-50 fixed top-0 flex items-center w-full p-6")}>
			<Logo />
			<div className={`${styles.tester} ml-auto justify-end w-full flex items-center gap-x-2`}>
				<ModeToggle />
			</div>
		</div>
	);
};

export default Navbar;
