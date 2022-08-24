import React from "react";
import Link from "next/link";
import Image from 'next/image';
import classNames from 'classnames';


import styles from "@/styles/modules/Header.module.css";


export default function TopHeader() {
 
  return (
    <>
      <div className={styles.headerGlobal}>
        <div className={classNames(styles.topHeader,'container')}>
          <div className="h-[64px]">
            <div className={styles.headerlogoContainer}>
              <Link href="https://www.pokemon.com/el">
                <Image
                  src="/assets/images/logo-pokemon-header.png"
                  alt="Picture of the author"
                  width={79}
                  height={45}
                />
              </Link>
            </div>
          </div>
          
          <div className={styles.aboutus}>
            <Link href="https://corporate.pokemon.com/">
              <Image
                src="/assets/images/quienes-somos-header.png"
                alt="Picture of the author"
                width={79}
                height={45}
              />
              </Link>
          </div>
          <div className={styles.topHeaderWrapper}>
            <div className={styles.headerImageContainer}>
            <Link href="https://tcg.pokemon.com/">
              <Image
                src="/assets/images/pokemon-go-header.jpeg"
                alt="Picture of the author"
                width={148}
                height={50}
              />
              </Link>
            </div>
            <div className={styles.headerImageContainer}>
            <Link href="https://legends.pokemon.com/">
              <Image
                src="/assets/images/legends-pokemos-header.jpeg"
                alt="Picture of the author"
                width={148}
                height={50}
              />
              </Link>
            </div>
            <div className={styles.headerImageContainer}>
            <Link href="https://unite.pokemon.com/">
              <Image
                src="/assets/images/pokemon-unite.jpeg"
                alt="Picture of the author"
                width={148}
                height={50}
              />
              </Link>
            </div>
            <div className={styles.headerImageContainer}>
            <Link href="https://diamondpearl.pokemon.com/">
              <Image
                src="/assets/images/pearl-dimond-pokemon-header.jpeg"
                alt="Picture of the author"
                width={148}
                height={50}
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
        
   
    </>
  );
}
