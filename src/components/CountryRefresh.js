import graphql from "babel-plugin-relay/macro";
import React, { useEffect } from "react";
import RootQueryContext from "./RootQueryContext";
import { useRefetchableFragment } from "react-relay";

export default function CountryRefresh({ country }) {
  const rootQuery = React.useContext(RootQueryContext);
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

  useEffect(() => {
    refetch({ id2: country }, { fetchPolicy: "store-or-network" });
  }, [country, refetch]);

  return <>{data.country2.name}</>;
}
