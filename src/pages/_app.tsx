import "@/styles/globals.css";
import "@/styles/styles.scss";
import Link from "next/link";
import { ComponentType, useEffect } from "react";
import { AppProps } from 'next/app';
import { Router } from 'next/router';

import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface MyAppProps extends AppProps {
  router: Router;
}

export default function App({ Component, pageProps, router }: MyAppProps) {

  return (
    <div className="main">
      <header>
        <Navbar />
      </header>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
