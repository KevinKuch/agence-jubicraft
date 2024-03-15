import Image from "next/image";
import Head from "next/head";
import { Telex } from "next/font/google";
import Accueil from "./accueil";




const telex = Telex({ 
	subsets: ["latin"],
	weight: ['400'], 
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Agence JubiCraft</title>
        <meta name="description" content="Site Web pour l'agence Jubilee Craft" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${telex.className} min-h-screen bg-skin-base`}>
        <Accueil />
      </main>
    </>
  );
}
