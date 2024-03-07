"use client";

import { useEffect } from "react";
import LandingPage from "./pages/(landing)/page";

export default function Home() {

	useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []) 

	return (
		<main className="">
			<LandingPage />
		</main>
	)
}