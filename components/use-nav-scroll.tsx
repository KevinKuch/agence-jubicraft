import { useState, useEffect } from 'react';

// Lorsque l'utilisateur scroll, on vérifie si la position du scroll est supérieure à un certain seuil
// Si c'est le cas, on met scrolled à true
// Sinon, on met scrolled à false
// Faire apparaitre le navbar lorsqu'on scroll vers le haut

export const useScrollTop = (threshold = 10) => {
	const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
	const [scrolledUp, setScrolledUp] = useState(false);

	useEffect(() => {
			const handleScroll = () => {
					const currentScrollPos = window.scrollY;
					const scrolledDown = currentScrollPos < prevScrollPos;
					setScrolledUp(!scrolledDown);
					setPrevScrollPos(currentScrollPos);
			};

			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	return scrolledUp && window.scrollY > threshold;
};