'use client';
import styles from './style.module.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';


interface NavMenuProps {
	toggle: boolean;

}

export default function NavMenu(props: NavMenuProps) {

	const container = useRef(null);
	const toggle = props.toggle;
	const tl = useRef();

	useGSAP(() => {
		// @ts-ignore
		tl.current = gsap.timeline({paused: true}); 

		// @ts-ignore
		tl.current.from("#bannerOne", {
			xPercent: -100,
			duration: 0.4,
			ease: "sine.inOut",
		})
		// @ts-ignore
		tl.current.from("#bannerTwo", {
			xPercent: 100,
			duration: 0.4,
			ease: "sine.inOut",
		}, "-=0.4")

		// @ts-ignore
		tl.current.from(".menu-list", {
			yPercent: 200,
			duration: 0.7,
			ease: "power4.out",
			stagger: {
				amount: 0.1,
			}
		})

	}, {scope: container})

	useGSAP(() => {
		// @ts-ignore
		toggle ? tl.current.play() : tl.current.reverse();
	}, [toggle])

	

	return (
		<>
			<div ref={container} className="fixed h-screen w-full overflow-x-hidden z-50">
				<ul className='w-full h-full uppercase flex flex-col justify-center items-center text-6xl gap-20 relative z-10'>
					<Link className="overflow-hidden" href="/">
						<li className='menu-list'>Accueil</li>
					</Link>
					<Link className="overflow-hidden" href="/projets">
						<li className='menu-list'>Projets</li>
					</Link>
					<Link className="overflow-hidden" href="/contact">
						<li className='menu-list'>Contact</li>
					</Link>
					<Link className="overflow-hidden" href="/projets">
						<li className='menu-list'>Presentation</li>
					</Link>
				</ul>
				<span id="bannerOne" className='bg-skin-secondary h-full absolute top-0 left-0 w-1/2 z-0'></span>
				<span id="bannerTwo" className='bg-skin-secondary h-full absolute top-0 left-1/2 w-1/2 z-0'></span>
			</div>
		</>
	)
}