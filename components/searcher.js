import React from "react";
import Image from 'next/image';
import classNames from 'classnames';
import QuickSearcher from "./fragments/quickSearcher";
import styles from "@/styles/modules/Searcher.module.css";

export default function Searcher() {
 
  return (
    <>
      <section>
        <QuickSearcher />
      </section>
    </>
  );
}