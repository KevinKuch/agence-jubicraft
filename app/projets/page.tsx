
import Link from "next/link";
import { Post } from "../libs/interface";
import { sanityClient } from "../libs/sanity";
import { urlFor } from "@/app/libs/sanityImageUrl";
import Image from "next/image";
import Footer from "../components/footer";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


async function getData() {
	const query = `*[_type == "post"] {
		_id,
		title,
		overview,
		_createdAt,
		"slug": slug.current,
		"image": image.asset->url
	}`;

	const data = await sanityClient.fetch(query);

	return data;
}

export default async function Projets() {

	// Determiner les types de données du data retourné par Post
	const data = (await getData()) as Post[];
	// console.log(data);

	// useGSAP(() => {
	// 	let tl = gsap.timeline();
	// 	tl.to("#list-projet", {
			
	// 	})
	// })
	
	return ( 
		<section className="h-screen w-full pt-[8rem]">
			<div className="space-y-2 pt-6 pb-8 md:space-y-5 mx-12">
				<h1 className="text-4xl lg:text-7xl font-extrabold leading-9 tracking-light sm:text-4xl sm:leading-10: md:text-6xl md:leading-14">Nos Projets</h1>
			</div>
			<div className="mx-12 my-12">
				<ul className="flex flex-col justify-center items-center lg:flex-row md:justify-center md:items-center gap-12 flex-wrap">
					{data.map((post) => (
						<li id="list-projet" key={post._id} className="opacity-0 border border-white rounded-xl p-2 bg-skin-secondary shadow-lg">
							<article className="flex flex-col justify-center items-center gap-12 max-w-[500px]">
								<div className="relative w-full max-w-[800px] max-h-[800px] aspect-[70/45]">
									<Image className="rounded-lg" src={urlFor(post.image).url()} alt={post.title} fill priority/>
								</div>
								<Link href={`/post/${post.slug.current}`} prefetch className="space-y-3 xl:col-span-3">
								<div>
									<h3 className="text-2xl font-bold text-center leading-8 tracking-tight text-white pb-2">
										{post.title}
									</h3>
									<p className="text-center max-w-none text-white ">
										{post.overview}
									</p>
								</div>
								</Link>
							</article>
						</li>
					))}
				</ul>
			</div>
			<Footer/>
		</section>
	 );
}
