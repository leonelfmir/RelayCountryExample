import { usePreloadedQuery } from "react-relay/hooks";
import CountryContainer from "./CountryContainer";
import RootQueryContext from "./RootQueryContext";

export default function Country(props) {
  const data = usePreloadedQuery(props.countryQuery, props.preloadedQuery);

  return (
    <RootQueryContext.Provider value={data.country}>
      <CountryContainer />
    </RootQueryContext.Provider>
  );
}
