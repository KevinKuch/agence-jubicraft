"use client";

import { useEffect } from "react";
import LandingPage from "./(landing)/page";


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
		</main>
	)
}