import "@/styles/globals.css";
import "@/styles/styles.scss";
import Link from "next/link";
import { ComponentType, useEffect } from "react";
import { AppProps } from 'next/app';
import { Router } from 'next/router';

import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";

interface MyAppProps extends AppProps {
  router: Router;
}

export default function App({ Component, pageProps, router }: MyAppProps) {

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
    <div className="main">
      <header>
        <Navbar />
      </header>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  )
}
