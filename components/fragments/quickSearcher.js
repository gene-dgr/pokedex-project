import React from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "@/styles/modules/Searcher.module.css";

export default function QuickSearcher({setSearch}) {
  return (
    <>
      <div>
        <div className={classNames(styles.titleContainer)}>
          <h1>Pokédex</h1>
        </div>
        <div className={styles.searcherContainer}>
          <div className={styles.searchSections}>
            <div className={styles.searchInputContainer}>
              <h3>Nombre o número</h3>
              <div>
                <input 
                  type="text" 
                  onChange={(e)=>setSearch(e.target.value)}
                  />
                <button>
                  <Image
                    src="/assets/icons/input-search-bg.png"
                    width={24}
                    height={24}
                    alt="search"
                  />
                </button>
              </div>
              <p>
                ¡Usa la búsqueda avanzada para encontrar Pokémon por su tipo,
                debilidad, habilidad y demás datos!
              </p>
            </div>
            <div className={styles.searchTextContainer}>
              <p>
                Busca un Pokémon por su nombre o usando su número de la Pokédex
                Nacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
