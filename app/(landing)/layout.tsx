import Image from "next/image";
import Navbar from "./_components/navbar";


const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full">
			<Navbar />
			<div className="absolute top-0 -z-10 h-full w-full">
				<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#ad6df480] opacity-50 blur-[80px]"></div>
				<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[100%] translate-y-[80%] rounded-full bg-[#6dc9f4db] opacity-50 blur-[80px]"></div>
				<div className="absolute bottom-auto left-0 right-auto top-0 h-[500px] w-[500px] -translate-x-[10%] translate-y-[80%] rounded-full bg-[#FCBEE8] opacity-50 blur-[80px]"></div>
				<div className="absolute bottom-auto left-0 right-auto top-0 h-[500px] w-[500px] -translate-x-[5%] translate-y-[20%] rounded-full bg-[#5DE990] opacity-50 blur-[80px]"></div>
			</div>
			<main className="h-full pt-40 md:pt-60 ">{children}</main>
		</div>
	);
};

export default LandingLayout;
