import Image from "next/image";
import { Telex } from "next/font/google";

const telex = Telex({ 
	subsets: ["latin"],
	weight: ['400'], 
});


export default function Home() {
  return (
    <main className={`${telex.className} min-h-screen bg-skin-base`}>
     <h1 className="">NEXT</h1>
    </main>
  );
}
