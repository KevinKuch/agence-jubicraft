"use client";
import styles from "./style.module.scss";
// import "./menu.scss";

import React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
	{path: "/", name: "Accueil"},
	{path: "/projets", name: "Projets"},
	{path: "/contact", name: "Contact"},
	{path: "/processus", name: "Processus"},
];

const Menu = () => {
	const container = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuLinkItemHolders = useRef<(HTMLDivElement | null)[]>([]);
	const menuOverlay = useRef(null);
	const tl = useRef<any>();
	
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useGSAP(
    () => {
      gsap.set(menuLinkItemHolders.current, { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(menuOverlay.current, {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(menuLinkItemHolders.current, {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

	useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);
	
	return (
    <div className="menu-container" ref={container}>
      {/* menu-bar */}
      <div className={`${styles.menuBar} bg-skin-accent`}>
        <div className={`${styles.menuLogo}`}>
          <Link href="/"><Logo /></Link>
        </div>
        <div className={`${styles.menuOpen}`} onClick={toggleMenu}>
          <span className="text-skin-red font-telex font-semibold">Menu</span>
        </div>
      </div>

      {/* menu-overlay */}
      <div ref={menuOverlay} className={`${styles.menuOverlay}`}>
        {/* menu-overlay-bar */}
        <div className={`${styles.menuOverlayBar}`}>
          <div className="menu-logo">
            <Link href="/"><Logo /></Link>
          </div>
          <div className={`${styles.menuClose}`}>
            <span className="text-skin-red font-telex font-semibold" onClick={toggleMenu}>Close</span>
          </div>
        </div>

        {/* menu overlay items */}
        <div className={`${styles.menuCloseIcon}`} onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className={`${styles.menuCopy}`}>
          <div className={`${styles.menuLinks}`}>
            {menuLinks.map((link, index) => (
              <div key={index} className={`${styles.menuLinkItem}`}>
                <div ref={el => menuLinkItemHolders.current[index] = el} className={`${styles.menuLinkItemHolder}`} onClick={toggleMenu}>
                  <Link className={`${styles.menuLink}`} href={link.path}>
                    {link.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={`${styles.menuInfo}`}>
            <div className={`${styles.menuInfoCol}`}>
              <a href="#">X &#8599;</a>
              <a href="#">Instagram &#8599;</a>
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">Facebook &#8599;</a>
              <a href="#">Youtube &#8599;</a>
            </div>
            <div className={`${styles.menuInfoCol}`}>
              <p>info@jubileecraft.com</p>
              <p>0923 3984 23</p>
            </div>
          </div>
        </div>
        <div className={`${styles.menuPreview}`}>
          <p>View ShowReel</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;