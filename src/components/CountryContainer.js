import { useFragment } from "react-relay";
import Country2 from "./Country2";
import graphql from "babel-plugin-relay/macro";
import React from "react";
import RootQueryContext from "./RootQueryContext";
import Country3 from "./Country3";
import { Suspense } from "react";

export default function CountryContainer(props) {
  const rootQuery = React.useContext(RootQueryContext);

  const data = useFragment(
    graphql`
      fragment CountryContainerFragment on Country {
        ...Country2Fragment
        ...Country3Fragment
      }
    `,
    rootQuery.country
  );

  return (
    <>
      <h1>ID</h1>
      <Suspense fallback="...loading">
        <Country2 countryRoot={data} />
      </Suspense>

      <h2>States</h2>
      <Suspense fallback="...loading">
        <Country3 countryRoot={data} />
      </Suspense>
    </>
  );
}
