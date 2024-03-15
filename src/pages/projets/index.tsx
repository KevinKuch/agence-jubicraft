import Transition from "@/components/transition";
import Image from "next/image";
import { unProjetCard } from "../../libs/interface";
import { client, urlFor } from "../../libs/sanity";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Projets({ data }: { data: unProjetCard[] }) {
	
  return (
    <Transition>
      <section className="w-full pt-[8rem] bg-skin-base text-white">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 mx-12">
          <h1 className="text-4xl lg:text-7xl font-extrabold leading-9 tracking-light sm:text-4xl sm:leading-10: md:text-6xl md:leading-14">Nos Projets</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-12">
          {data.map((project, index) => (
            <Card key={index} className="flex flex-col justify-center items-center p-4 bg-skin-secondary rounded-xl max-w-[800px]">
							<Image
								src={urlFor(project.titleImage).url()} // Use project titleImage from fetched data
								alt={project.title}
								width={500}
								height={500}
								className="rounded-t-lg h-[200px] object-cover"
							/>
              <CardContent className="mt-5">
								<h2 className="text-2xl font-semibold font-heebo text-center">{project.title}</h2>
								<p className="line-clamp-3">{project.overview}</p>
								<Button asChild className="w-full mt-7">
									<Link href={`/projetInfo/${project.currentSlug}`}>En savoir plus</Link>
								</Button>
							</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Transition>
  );
}

export async function getServerSideProps() {
  // Fetch data from Sanity
  const query = `
    *[_type == 'projets'] | order(_createdAt desc) {
      title,
      overview,
      'currentSlug': slug.current,
      titleImage
    }`;

  const data: unProjetCard[] = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
}
