import { Footer } from "../../components/footer";
import { Hero } from "./_components/hero";
import SectionImage from "./_components/sectionImage";
import About from "./_components/sectionAbout";
import Expertise from "./_components/sectionExpert";

const LandingPage = () => {
	return (
		<div>
			<Hero />
			<SectionImage />
			<About />
			<Expertise />
		</div>
	);
};

export default LandingPage;
