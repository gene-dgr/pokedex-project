import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from "@/styles/modules/Body.module.css";

export default function TopHeader({pokemon}) {
  return (
    <>
      <div className={styles.cardContent}>
        <div>
          <Image
            //src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${pokemon.id}')`}
            src={pokemon.sprites.other["official-artwork"].front_default}
            width={205}
            height={205}
            alt=""
          />
        </div>
        <div className={styles.cardInfo} >
          <span className={styles.pokemonNumber} >N.º {pokemon.id < 10 ? "00"+pokemon.id : "0"+pokemon.id }</span>
          <h3 className={styles.pokemonName}>{pokemon.name}</h3>
          <div className="flex">
            {
              pokemon.types.map((type, k) => (
                <div key={k} className={styles.pokemonType}>
                  <span >{type.type.name}</span>
                </div>
              ))
            }
          </div>
          
        </div>
      </div>
    </>
  );
}
