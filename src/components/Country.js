import { usePreloadedQuery } from "react-relay/hooks";
import CountryContainer from "./CountryContainer";
import RootQueryContext from "./RootQueryContext";
import React, { Suspense } from "react";
import CountryRefreshContainer from "./CountryRefreshContainer";

export default function Country(props) {
  const data = usePreloadedQuery(props.countryQuery, props.preloadedQuery);

  return (
    <RootQueryContext.Provider value={data}>
      <Suspense fallback="...loading">
        <CountryRefreshContainer />
      </Suspense>
      <hr />
      <Suspense fallback="...loading">
        <CountryContainer />
      </Suspense>
    </RootQueryContext.Provider>
  );
}
