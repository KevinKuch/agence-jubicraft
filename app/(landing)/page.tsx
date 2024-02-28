import { Footer } from "../../components/footer";
import { Hero } from "./_components/hero";
import Section2 from "./_components/section2";
import Section3 from "./_components/section3";

const LandingPage = () => {
	return (
		<div className="min-h-full flex flex-col">
			<div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 mb-40">
				<Hero />
			</div>
			{/* <Section2 /> */}
			<Section3 />
		</div>
	);
};

export default LandingPage;
