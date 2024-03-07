"use client";

import { Hero } from "./_components/hero";
import SectionImage from "./_components/sectionImage";
import About from "./_components/sectionAbout";
import Expertise from "./_components/sectionExpert";

const LandingPage = () => {
	return (
		<>
			<Hero />
			<SectionImage />
			<About />
			<Expertise />
		</>
	);
};

export default LandingPage;
