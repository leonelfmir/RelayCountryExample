import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import React from "react";
import RootQueryContext from "./RootQueryContext";

export default function CountryRefresh(props) {
  const rootQuery = React.useContext(RootQueryContext);

  const data = useFragment(
    graphql`
      fragment CountryRefreshFragment on Query {
        country2: country(code: $id2) {
          name
        }
      }
    `,
    rootQuery
  );
  console.info({ data });

  return (
    <>
      <h3>RefreshID</h3>
      {data.country2.name}
    </>
  );
}
