'use client'

import { usePathname, useRouter } from "next/navigation"
import { pageTransitionExit } from "./page-transition";

interface Props {
	href: string;
	label: string;
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
		<button className="text-xl text-neutral-900 hover:text-neutral-700" onClick={handleClick}>
			{label}
		</button>
	)
}

export default TransitionLink;