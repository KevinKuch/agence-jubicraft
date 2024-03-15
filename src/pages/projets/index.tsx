import Transition from "@/components/transition";
import Image from "next/image";

export default function Projets() {
	return (
		<Transition>
			<section className="h-screen w-full pt-[8rem] bg-skin-base text-white">
				<div className="space-y-2 pt-6 pb-8 md:space-y-5 mx-12">
					<h1 className="text-4xl lg:text-7xl font-extrabold leading-9 tracking-light sm:text-4xl sm:leading-10: md:text-6xl md:leading-14">Nos Projets</h1>
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-12">
						<div className="flex flex-col justify-center items-center p-4 bg-skin-secondary rounded-xl">
							<div className="relative w-full h-80">
								<Image
									src="/image2.jpg"
									alt="Title"
									layout="fill"
								/>
							</div>
							<h2 className="text-2xl font-bold mt-4">Title</h2>
							<p className="text-sm mt-2">Overview</p>
						</div>
				</div>
			</section>
		</Transition>
	)
}