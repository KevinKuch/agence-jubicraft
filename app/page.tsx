"use client";

import { useEffect } from "react";
import LandingPage from "./(landing)/page";
import Footer from "./components/footer";


export default function Home() {

	useEffect( () => {
    (
    
      async () => {
        //@ts-ignore
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []) 

	return (
		<main>
			<LandingPage />
      <Footer/>
		</main>
	)
}