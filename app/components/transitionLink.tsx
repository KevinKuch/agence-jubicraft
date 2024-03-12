'use client'

import { usePathname, useRouter } from "next/navigation"
import { pageTransitionExit } from "./page-transition";
import { ReactNode } from "react";

interface Props {
	href: string;
	label: ReactNode;
}

const TransitionLink: React.FC<Props> = ({ href, label }: Props) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		if (pathname != href) {
			pageTransitionExit(href, router);
		}
	}

	return (
		<button className="hover:underline uppercase" onClick={handleClick}>
			{label}
		</button>
	)
}

export default TransitionLink;