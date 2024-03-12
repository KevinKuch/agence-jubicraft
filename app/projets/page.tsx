import Link from "next/link";
import { Post } from "../libs/interface";
import { sanityClient } from "../libs/sanity";
import Image from "next/image";

async function getData() {
	const query = `*[_type == "post"]`;

	const data = await sanityClient.fetch(query);

	return data;
}

export default async function Projets() {

	// Determiner les types de données du data retourné par Post
	const data = (await getData()) as Post[];

	return ( 
		<section className="h-screen w-full pt-[8rem]">
			<div className="space-y-2 pt-6 pb-8 md:space-y-5 mx-12">
				<h1 className="text-4xl lg:text-7xl font-extrabold leading-9 tracking-light sm:text-4xl sm:leading-10: md:text-6xl md:leading-14">Nos Projets</h1>
			</div>
			<div className="mx-12">
				<ul>
					{data.map((post) => (
						<li key={post._id} className="py-4 border border-white">
							<article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
								<div>
									<p className="text-base font-medium leading-6">
										{new Date(post._createdAt).toISOString().split("T")[0]}
									</p>
								</div>
								<Link href={`/post/${post.slug.current}`} prefetch className="space-y-3 xl:col-span-3">
									<Image src={post.image} alt={post.title} width={100} height={100}/>
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
