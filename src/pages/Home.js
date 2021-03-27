// import type { AppGetCountryQuery as AppGetCountryQueryType } from "AppGetCountryQuery.graphql";
// import type { PreloadedQuery } from "react-relay";

import AppGetCountryQuery from "../__generated__/AppGetCountryQuery.graphql";
import { useQueryLoader } from "react-relay";
import Country2 from "../components/Country2";
import Country from "../components/Country";

// type Props = {
//   initialQueryRef: PreloadedQuery<AppGetCountryQueryType>,
// };

const countries = ["CU", "USA"];

export default function Home(props) {
  const [countryQueryRef, loadCountryQuery] = useQueryLoader(
    AppGetCountryQuery
    // props.initialQueryRef
  );
  const onSelectCountry = (countryCode) => {
    loadCountryQuery({ id: countryCode });
  };
  return (
    <div>
      {countries.map((country) => (
        <button country={country} onClick={onSelectCountry(country)} />
      ))}
      {/* {countryQueryRef != null ? <div>Loaded</div> : <div>Not loaded</div>} */}
    </div>
  );
}
