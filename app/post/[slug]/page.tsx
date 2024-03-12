import { Post } from "@/app/libs/interface";
import { sanityClient } from "@/app/libs/sanity";
import { urlFor } from "@/app/libs/sanityImageUrl";
import { PortableText } from "@portabletext/react"
import Image from "next/image";


async function getData(slug: string) {
	// Requête pour fetch les données d'un post spécifique
	// Le slug est un paramètre dynamique
	// Ajout un [0] pour fetch le premier post qui match le slug selon sanity
	const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

	// Cette data provient de l'API client de Sanity dans libs/sanity.ts
	const data = await sanityClient.fetch(query);

	return data;
}

export default async function SlugPage({
	// Definir le type de données de params pour slug qui est un string
	params,
}: {
	params: { slug: string };
}) {
	// Determiner les types de données du data retourné par Post
	const data = await getData(params.slug) as Post;

	const PortableTextComponent = {
		types: {
			image: ({value}: {value: any}) => (
				<Image src={urlFor(value).url()} alt="Image" className="rounded-lg" width={100} height={100}/>
			)
		}
	}

	return (
		<div className="h-screen pt-[8rem]">
			<header className="pt-6 xl:pb-6">
				<div className="space-y-1 text-center">
					<div className="space-y-10">
						<div>
							<p className="text-base font-medium leading-6 text-white">
							{new Date(data._createdAt).toISOString().split("T")[0]}
							</p>
						</div>
					</div>

					<div>
						<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
							{data.title}
						</h1>
					</div>
				</div>
			</header>

			<div>
				<div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
					<div className="max-w-none pb-8 pt-10">
						<PortableText value={data.content} components={PortableTextComponent} />
					</div>
				</div>
			</div>
		</div>
	)
}