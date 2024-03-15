import Transition from "@/components/transition";
import { unProjetInfo } from "@/libs/interface";
import { client, urlFor } from "@/libs/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30; // revalidate at most 30 seconds

export default function UnProjetInfo({ data }: { data: unProjetInfo }) {
  return (
		<Transition>
			<div className="bg-skin-base px-12 pt-[8rem] text-white">
				<Link href="/projets">
					<span>&#x2190; retourner</span>
				</Link>
				<h1>
					<span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
						Nos Projets
					</span>
					<span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
						{data.title}
					</span>
				</h1>

				<Image
					src={urlFor(data.titleImage).url()}
					width={800}
					height={800}
					alt="Title Image"
					priority
					className="rounded-lg mt-8 border mx-auto"
				/>

				<div className="mt-16 text-center">
					{/* @ts-ignore */}
					<PortableText className="" value={data.content} />
				</div>
			</div>
		</Transition>
  );
}

export async function getStaticPaths() {
  // Fetch paths for dynamic routes
  const query = `*[_type == "projets"]{ "slug": slug.current }`;
  const pathsData = await client.fetch(query);
  const paths = pathsData.map((project: { slug: string }) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 for pages not generated at build time
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const query = `
    *[_type == "projets" && slug.current == '${params.slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);

  return {
    props: { data },
    revalidate: 30, // Revalidate every 30 seconds
  };
}
