"use client";

import styles from "@/pages/accueil/styles.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero relative h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/hero-image.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 h-[50%] mx-auto mt-32 px-5">
        <h1 className="tracking-wide text-center">JubileeCraft</h1>
        <p className="text-skin-base text-12 max-w-[77%]">
          Donnez vie à la créativité de vos évènement avec des designs, notre
          visionnement impeccable
        </p>
      </div>
    </div>
  );
}
