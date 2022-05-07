import { usePreloadedQuery } from "react-relay/hooks";
import CountryContainer from "./CountryContainer";
import CountryRefresh from "./CountryRefresh";
import RootQueryContext from "./RootQueryContext";
import React, { Suspense } from "react";

export default function Country(props) {
  const data = usePreloadedQuery(props.countryQuery, props.preloadedQuery);

  return (
    <RootQueryContext.Provider value={data}>
      <Suspense fallback="...loading">
        <CountryRefresh />
      </Suspense>
      <hr />
      <Suspense fallback="...loading">
        <CountryContainer />
      </Suspense>
    </RootQueryContext.Provider>
  );
}
