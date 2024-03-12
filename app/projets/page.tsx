import Link from "next/link";
import { Post } from "../libs/interface";
import { sanityClient } from "../libs/sanity";
import { urlFor } from "@/app/libs/sanityImageUrl";
import Image from "next/image";


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

	return ( 
		<section className="h-screen w-full pt-[8rem] overflow-hidden">
			<div className="space-y-2 pt-6 pb-8 md:space-y-5 mx-12">
				<h1 className="text-4xl lg:text-7xl font-extrabold leading-9 tracking-light sm:text-4xl sm:leading-10: md:text-6xl md:leading-14">Nos Projets</h1>
			</div>
			<div className="mx-12">
				<ul className="flex flex-col justify-center items-center">
					{data.map((post) => (
						<li key={post._id} className="py-4 border border-white">
							<article className="flex flex-col justify-center items-center gap-12">
								<div className="relative w-full max-w-[500px] max-h-[500px] aspect-[70/45]">
									<Image className="rounded-lg" src={urlFor(post.image).url()} alt={post.title} fill priority/>
								</div>
								<Link href={`/post/${post.slug.current}`} prefetch className="space-y-3 xl:col-span-3">
								<div>
									<h3 className="text-2xl font-bold leading-8 tracking-tight text-white">
										{post.title}
									</h3>
									<p className="prose max-w-none text-white">
										{post.overview}
									</p>
								</div>
								</Link>
							</article>
						</li>
					))}
				</ul>
			</div>
		</section>
	 );
}
