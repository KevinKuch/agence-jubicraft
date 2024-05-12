import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import styles from "@/pages/accueil/styles.module.scss";
import Image from "next/image";
import expertiseImage from "@/public/expertise-img.svg";
import arrowRight from "@/public/arrow-right.svg";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';

export default function SectionExpertise() {
    const expertiseItems = [
        "Conception et création",
        "Production et animation",
        "Identité visuelle et design",
        "Divertissement et immersif",
        "Stratégie et campagne"
    ];

    // Animation GSAP sur les listes items de l'expertise
    // Utilisation de useRef pour cibler les éléments à animer
    // Apparition des items un par un
    const list = useRef<HTMLUListElement>(null);
	const title = useRef<HTMLHeadingElement>(null);
    const image = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.from(title.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: title.current,
                start: "top bottom-=80",
                end: "bottom bottom",
            }
        });
        if (list.current) {
            gsap.from(list.current.children as any, {
                opacity: 0,
                y: 100,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: list.current,
                    start: "top bottom-=80",
                    end: "bottom bottom",
                }
            });
        }
        gsap.to(image.current, {
			yPercent: 100,
			duration: 1.2,
			scrollTrigger: {
				trigger: image.current,
				start: "top center",
				end: "bottom bottom",
			}
		});
    });

    return (
        <section className={`${styles.sectionExpertise} bg-skin-base px-5 py-20`}>
            <div className="container max-w-[1440px]">
                <h1 ref={title} className={`${styles.title} pb-[20px] md:pb-[40px] font-semibold text-4xl md:text-5xl`}>Nos Expertise</h1>
                <div className={`${styles.containerCol} flex flex-col lg:flex-row lg:gap-5 lg:items-center lg:justify-between`}>
                    <div className={`${styles.image} order-last lg:order-first mx-auto pt-20 lg:pt-0 lg:mx-0 lg:pt-10 relative overflow-hidden`}>
                    <div ref={image} className={`${styles.overlay} absolute top-0 left-0 w-full h-full bg-skin-base opacity-100 z-10`}></div>
                        <Image src={expertiseImage} alt="image-expertise" />
                    </div>
                    <div className={`${styles.listWrapper}`}>
                        <ul ref={list} className={`${styles.items} text-skin-base text-xl md:text-2xl lg:text-4xl pt-10`}>
                            {expertiseItems.map((item, index) => (
                                <li key={index} className="flex gap-8 items-center border-b border-opacity-50 pb-4 pt-4 tracking-wider lg:pb-6 lg:pr-6">
                                    <Image src={arrowRight} alt="arrow-right" className="w-[3rem] transition-transform hover:translate-x-3"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
