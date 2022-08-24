import React, {useState} from "react";
import Image from 'next/image';

import classNames from 'classnames';
import styles from "@/styles/modules/Searcher.module.css";

export default function QuickSearcher() {
    const [filtersOpen, setFiltersOpen] = React.useState(false);
    return (
        <>
            <div className={classNames(styles.filtersContainer, filtersOpen ? styles.filtersOpened : styles.filtersClosed)}>
                     
            </div>
            <div className={styles.searchFiltersContainer}>
                <div className={styles.openFilters} onClick={ () => { setFiltersOpen(!filtersOpen)} }>
                    <span>Mostrar búsqueda avanzada</span>
                    <Image src="/assets/icons/down-chevron.png" width={20} height={20}/>
                </div>
            </div>
        </>
    );
}