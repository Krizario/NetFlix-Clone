import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";
function Browse() {
  const { films } = useContent("films");
  const { series } = useContent("series");

  const slides = selectionFilter({ films, series });
  console.log(slides);

  return <BrowseContainer slides={slides} />;
}

export default Browse;
