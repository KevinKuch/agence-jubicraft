import Transition from "@/components/transition";
import Image from "next/image";
import styles from "@/pages/projets/styles.module.scss";
import { unProjetCard } from "../../libs/interface";
import { client, urlFor } from "../../libs/sanity";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; 

export const revalidate = 30; 

export default function Projets({ data }: { data: unProjetCard[] }) {  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    data.forEach((project, index) => {
      const wrapperRef = document.querySelector(`.project__wrapper-${index}`);
      // Animation des textes 
      gsap.fromTo(
        `.project__text-content-${index}`,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          scrollTrigger: {
            trigger: wrapperRef,
            start: "top-=80% top+=50%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animation écran noir sur les images
      gsap.fromTo(
        `.project__img-overlay-${index}`,
        {
          y: 0, 
          scale: 1.3
        },
        {
          y: "100%",
          scale: 1,
          duration: 1, 
          scrollTrigger: {
            trigger: wrapperRef,
            start: "top-=80% top+=50%",
            end: "top 50%",
            toggleActions: "play none none none", 
          },
        }
      );
    });
  }, [data]);

  return (
    <Transition>
      <section className={`${styles.projects} bg-skin-base mt-[3rem]`}>
        <h1 className={`${styles.title} p-10`}>Nos Projets</h1>
        <div className="projects__data-wrapper mx-10 flex flex-col gap-10 md:gap-28 lg:gap-44 pt-10 pb-20">
          {data.map((project, index) => (
            <Link href={`/projetInfo/${project.currentSlug}`} key={index}>
              <div
                className={`project__wrapper project__wrapper-${index} flex flex-col md:flex-row gap-2 md:gap-10 lg:gap-20 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className={`project__text-content-${index} md:w-1/2 order-last md:order-first flex flex-col justify-center`}>
                  <h2>{project.title}</h2>
                  <p className="line-clamp-2">{project.overview}</p>
                </div>
                <div className="project__img-wrapper relative md:w-1/2 overflow-hidden">
                  <div className={`project__img-overlay project__img-overlay-${index} absolute inset-0 bg-black`} />
                  <Image
                    src={urlFor(project.titleImage).url()}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Transition>
  );
}

/**
 * Récupère les données des projets côté serveur.
 * @returns {Promise<{data: unProjetCard[]}>} Les données des projets.
 */
export async function getServerSideProps() {
  // Fetch data from Sanity
  const query = `
    *[_type == 'projets'] | order(_createdAt desc) {
      title,
      overview,
      'currentSlug': slug.current,
      titleImage
    }`;

  // Récupère les données des projets depuis Sanity
  const data: unProjetCard[] = await client.fetch(query);

  return {
    // Renvoie les données des projets comme propriété
    props: {
      data,
      revalidate: 30, // Revalider toutes les 30 secondes pour obtenir des données mises à jour
    },
  };
}
