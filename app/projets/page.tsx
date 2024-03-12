import Link from "next/link";
import { Post } from "../libs/interface";
import { sanityClient } from "../libs/sanity";
import { urlFor } from "@/app/libs/sanityImageUrl";
import Image from "next/image";
import Footer from "../components/footer";

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
		<section className="h-screen w-full pt-[8rem]">
			<div className="space-y-2 pt-6 pb-8 md:space-y-5 mx-12">
				<h1 className="text-4xl lg:text-7xl font-extrabold leading-9 tracking-light sm:text-4xl sm:leading-10: md:text-6xl md:leading-14">Nos Projets</h1>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-12">
				{data.map((post, index) => (
					<div key={index} className="flex flex-col justify-center items-center p-4 border border-white bg-skin-secondary rounded-xl">
						<Link href={`/projets/${post.slug}`}>
								<div className="relative w-full h-80">
									<Image
										src={urlFor(post.image).url() as string}
										alt={post.title}
										layout="fill"
										objectFit="cover"
										className="rounded-lg"
									/>
								</div>
								<h2 className="text-2xl font-bold mt-4">{post.title}</h2>
								<p className="text-sm mt-2">{post.overview}</p>
						</Link>
					</div>
				))}
			</div>
			<Footer/>
		</section>
	 );
}
