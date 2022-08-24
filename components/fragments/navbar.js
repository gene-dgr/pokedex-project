import React from "react";
import Link from "next/link";
import Image from 'next/image';
import classNames from 'classnames';

import styles from "@/styles/modules/Header.module.css";



export default function Navbar() {
 
    return (
      <>
        
          <div className={styles.navbarGlobal}>
            <div className={classNames(styles.navbarContainer, 'container')}>
              <Link href="https://www.pokemon.com/">
                <div className={classNames(styles.navbarItem, styles.index)}>
                  <Image
                    src="/assets/icons/pikachu.svg"
                    alt="Picture of the author"
                    width={28}
                    height={30}
                  />
                  <span>
                    Inicio
                  </span>
                </div>
              </Link>

              <Link href="https://www.pokemon.com/el/pokedex">
                <div className={classNames(styles.navbarItem, styles.pokedex)}>
                  <Image
                    src="/assets/icons/pokeball.svg"
                    alt="Picture of the author"
                    width={32}
                    height={30}
                  />
                  <span>
                    Pokédex
                  </span>
                </div>
              </Link>

              <Link href="https://www.pokemon.com/el/app">
                <div className={classNames(styles.navbarItem, styles.apps)}>
                  <Image
                    src="/assets/icons/celphone.svg"
                    alt="Picture of the author"
                    width={26}
                    height={30}
                  />
                  <span>
                    Aplicaciones
                  </span>
                </div>
              </Link>
              <Link href="https://www.pokemon.com/el/jcc-pokemon">
                <div className={classNames(styles.navbarItem, styles.cards)}>
                  <Image
                    src="/assets/icons/cards.svg"
                    alt="Picture of the author"
                    width={32}
                    height={30}
                  />
                  <span>
                    Juego de Cartas Colleccionables
                  </span>
                </div>
              </Link>
              <Link href="https://www.pokemon.com/el/episodios-pokemon">
                <div className={classNames(styles.navbarItem, styles.tv)}>
                  <Image
                    src="/assets/icons/tvpokemon.svg"
                    alt="Picture of the author"
                    width={32}
                    height={30}
                  />
                  <span>
                    TV Pokémon
                  </span>
                </div>
              </Link>
              <Link href="https://www.pokemon.com/el/play-pokemon">
                <div className={classNames(styles.navbarItem, styles.play)}>
                  <Image
                    src="/assets/icons/cup.svg"
                    alt="Picture of the author"
                    width={34}
                    height={30}
                  />
                  <span>
                    Play Pokémon
                  </span>
                </div>
              </Link>


            </div>
          </div>
     
      </>
    );
  }
  
