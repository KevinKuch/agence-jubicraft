import { useState, useEffect, useRef, use } from 'react';
import Transition from "@/components/transition";
import Image from "next/image";
import styles from "@/pages/contact/styles.module.scss";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import office1 from "@/public/office1.jpg";
import office2 from "@/public/office2.jpg";
import office3 from "@/public/office3.jpg";

export default function ContactPage() {
  const [selectedHeading, setSelectedHeading] = useState('Montréal');
  const [opacities, setOpacities] = useState({
    Montréal: 1,
    Québec: 0.5,
    Toronto: 0.5
  });
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    setSelectedHeading('Montréal');
  }, []);

  // Click sur les titles pour changer l'image avec changement opacity
  const handleHeadingClick = (heading: string) => {
    setSelectedHeading(heading);
    const updatedOpacities = {
      Montréal: heading === 'Montréal' ? 1 : 0.5,
      Québec: heading === 'Québec' ? 1 : 0.5,
      Toronto: heading === 'Toronto' ? 1 : 0.5
    };
    setOpacities(updatedOpacities);
    // GSAP animation
    gsap.to(imageRef.current, { duration: 0.5, x: 20, opacity: 0, onComplete: () => {
      setIsImageLoaded(false); // Reset the image loaded state
      setIsImageLoaded(true); // Trigger loading of the new image
      gsap.fromTo(imageRef.current, { x: -20, opacity: 0 }, { duration: 0.5, x: 0, opacity: 1 });
    }});
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Dépendant du titre, retourner l'image correspondante
  const getImageByHeading = (heading: string) => {
    switch (heading) {
      case 'Montréal':
        return office1;
      case 'Québec':
        return office2;
      case 'Toronto':
        return office3;
      default:
        return office1;
    }
  };

  // Changement d'adresse selon le titre
  const getAddressByHeading = (heading: string) => {
    switch (heading) {
      case 'Montréal':
        return '3800 R. Sherbrooke E, Montréal, QC H1X 2A2';
      case 'Québec':
        return '123 Rue de la Montagne, Québec, QC G1R 5R2';
      case 'Toronto':
        return '456 Bay St, Toronto, ON M5H 2N5';
      default:
        return '';
    }
  };

  const imageParallax = useRef(null);
  useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			imageParallax.current,
			{ x: -20, scale: 1.5 },
			{
				duration: 0.5,
				x: 0,
				scale: 1,
				scrollTrigger: {
					trigger: imageParallax.current,
					start: "top 80%",
					end: "bottom 20%",
					scrub: 1,
				},
			}
		);
	});

  return (
    <Transition>
      <section className={`${styles.contact} relative mt-12 min-h-screen bg-skin-base w-full overflow-hidden`}>
        <div className="flex flex-col lg:flex-row gap-[10rem] justify-center items-center translate-y-36 lg:translate-y-64  h-full relative z-[1] text-skin-base">
          <h1 className="mb-8 cursor-pointer" onClick={() => handleHeadingClick('Montréal')} style={{ opacity: opacities.Montréal }}>Montréal</h1>
          <h1 className="mb-8 cursor-pointer" onClick={() => handleHeadingClick('Québec')} style={{ opacity: opacities.Québec }}>Québec</h1>
          <h1 className="mb-8 cursor-pointer" onClick={() => handleHeadingClick('Toronto')} style={{ opacity: opacities.Toronto }}>Toronto</h1>
        </div>
        <div className="contact-content relative z-[1] translate-y-20 lg:translate-y-72 mt-10 w-[20rem] flex flex-col justify-center items-center mx-auto gap-5">
          <button className="text-skin-base py-2 px-5 rounded-[100px] bg-skin-base duration-500 transition-colors hover:bg-skin-primary">Contactez-nous</button>
          <p>info@jubileecraft.com</p>
          <p className='max-w-[80%] text-center'>{getAddressByHeading(selectedHeading)}</p>
        </div>
        <div className={`${styles.imgWrapper} absolute top-0 left-0 w-full h-full`} ref={imageRef}>
          <Image ref={imageParallax} src={getImageByHeading(selectedHeading)} alt="image footer" className="w-full h-full object-cover" onLoad={handleImageLoad} />
        </div>
      </section>
    </Transition>
  );
}
