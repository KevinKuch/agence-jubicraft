"use client";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
	return (
		<div className={cn("z-50 bg-background fixed top-0 flex items-center w-full p-6")}>
			<Logo />
			<div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
				<ModeToggle />
			</div>
			{/* <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
				Menu burger
			</div> */}
		</div>
	);
};

export default Navbar;
