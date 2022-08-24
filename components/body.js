import React from "react";
import Image from 'next/image';
import Card from './fragments/card'
import classNames from 'classnames';
import styles from "@/styles/modules/Body.module.css";

export default function Body() {
  return (
    <>
      <section>
        <div className={classNames(styles.bodyContainer) } >
            <div className={styles.sortOptionsContainer} >
                <div>
                    <button type="">¡Sorpréndeme!</button>
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
                        <select name="sorting" style={{backgroundImage:'/assets/icons/pokeball.svg'}}>
                            <option value="1">Numero inferior</option>
                        </select>
                    </div>
                   
                </div>
            </div>
            <div className={styles.cardsContainer} >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
      </section>
    </>
  );
}
