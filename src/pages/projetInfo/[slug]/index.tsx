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

/**
 * Récupère les chemins pour les routes dynamiques.
 * @returns {Promise<{ paths: { params: { slug: string } }[], fallback: boolean }>} Les chemins des routes dynamiques.
 */
	export async function getStaticPaths() {
		// Fetch paths for dynamic routes
		const query = `*[_type == "projets"]{ "slug": slug.current }`;
		const pathsData = await client.fetch(query);

		// Transforme les données des projets en tableau de chemins attendu par Next.js
		const paths = pathsData.map((project: { slug: string }) => ({
			params: { slug: project.slug },
		}));

		return {
			// Renvoie les chemins des routes dynamiques et définit fallback à false pour afficher une 404 si la page n'est pas trouvée
			paths,
			fallback: false,
		};
	}

	/**
	 * Récupère les données d'un projet spécifique.
	 * @param {object} params Les paramètres de la requête, contenant le slug du projet.
	 * @returns {Promise<{ props: { data: unProjetInfo }, revalidate: number }>} Les données du projet.
	 */
	export async function getStaticProps({ params }: { params: { slug: string } }) {
		// Construit la requête pour récupérer les données du projet avec le slug spécifié
		const query = `
			*[_type == "projets" && slug.current == '${params.slug}'] {
				"currentSlug": slug.current,
				title,
				content,
				titleImage
			}[0]`;

		// Récupère les données du projet depuis Sanity
		const data = await client.fetch(query);

		return {
			// Renvoie les données du projet comme propriété, avec une option de revalidation pour la régénération des données
			props: { data },
			revalidate: 30, // Revalider toutes les 30 secondes pour obtenir des données mises à jour
		};
	}
