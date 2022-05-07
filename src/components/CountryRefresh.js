import graphql from "babel-plugin-relay/macro";
import React, { useState } from "react";
import RootQueryContext from "./RootQueryContext";
import { useRefetchableFragment } from "react-relay";

export default function CountryRefresh(props) {
  const rootQuery = React.useContext(RootQueryContext);
  const [country, setCountry] = useState("DE");

  const [data, refetch] = useRefetchableFragment(
    graphql`
      fragment CountryRefreshFragment on Query
      @refetchable(queryName: "CountryRefetchQuery") {
        country2: country(code: $id2) {
          name
        }
      }
    `,
    rootQuery
  );

  const getNewCountry = () => {
    refetch({ id2: country }, { fetchPolicy: "store-or-network" });
  };
  const countryChange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={countryChange} />
      <button onClick={getNewCountry}>New Country</button>
      <h3>RefreshID</h3>
      {data.country2.name}
    </>
  );
}
