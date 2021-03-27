import { usePreloadedQuery } from "react-relay/hooks";
import Country2 from "./Country2";
import CountryContainer from "./CountryContainer";

export default function Country(props) {
  const data = usePreloadedQuery(props.countryQuery, props.preloadedQuery);

  return <CountryContainer country={data.country} />;
  //   return <Country2 country={data.country} />;
}
