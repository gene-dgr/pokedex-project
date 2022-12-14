import React from "react";
import Image from "next/image";
import classNames from "classnames";

import QuickSearcher from "./fragments/quickSearcher";
import AdvancedSearcher from "./fragments/advancedSearcher";

export default function Searcher({setSearch}) {


  return (
    <>
      <section>
        <QuickSearcher setSearch={setSearch}/>
        <AdvancedSearcher />
      </section>
    </>
  );
}
