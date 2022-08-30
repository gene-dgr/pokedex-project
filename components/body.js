import React, {useState, useEffect} from "react";
import Image from 'next/image';
import Card from './fragments/card'
import classNames from 'classnames';
import styles from "@/styles/modules/Body.module.css";

export default function Body({data, setFilter}) {
    //console.log(data);   
    

 

  return (
    <>
      <section>
        <div className={classNames(styles.bodyContainer) } >
            <div className={styles.sortOptionsContainer} >
                <div>
                    <button type="" onClick={() => setFilter("5")}>¡Sorpréndeme!</button>
                </div>
                <div>
                    <label htmlFor="sorting">Ordenar por </label>
                    <div className={styles.sortInput}>
                        <Image
                            src="/assets/icons/pokeball.svg"
                            alt="Pokeball"
                            width={28}
                            height={28}
                        />
                        <select name="sorting" onChange={(e) => setFilter(e.target.value)}>
                            <option value="1">Numero inferior</option>
                            <option value="2">Numero superior</option>
                            <option value="3">A - Z</option>
                            <option value="4">Z - A</option>
                        </select>
                    </div>
                   
                </div>
            </div>
            <div className={styles.cardsContainer} >
              {
              data.map((pokemon) => (
                <Card key={pokemon.name} pokemon={pokemon}/>
                )
              )}
                
            </div>
        </div>
      </section>
    </>
  );
}
