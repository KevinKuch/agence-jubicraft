import gsap from 'gsap';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const pageTransitionIn = () => {
const bannerOne = document.getElementById('banner-1');
const bannerTwo = document.getElementById('banner-2');
const bannerThree = document.getElementById('banner-3');
const bannerFour = document.getElementById('banner-4');

if (bannerOne && bannerTwo && bannerThree && bannerFour) {
	const tl = gsap.timeline();

	tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], { yPercent: 0 })
		.to([bannerOne, bannerTwo, bannerThree, bannerFour], { yPercent: 100, stagger: 0.1})
	}

}

export const pageTransitionExit = (href: string, router: AppRouterInstance) => {
	const bannerOne = document.getElementById('banner-1');
	const bannerTwo = document.getElementById('banner-2');
	const bannerThree = document.getElementById('banner-3');
	const bannerFour = document.getElementById('banner-4');
	
	if (bannerOne && bannerTwo && bannerThree && bannerFour) {
		const tl = gsap.timeline();
	
		tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], { yPercent: -100 })
			.to([bannerOne, bannerTwo, bannerThree, bannerFour], { yPercent: 0, stagger: 0.1, onComplete: () => {
				router.push(href);
			}})
		}
}