import { useFragment } from "react-relay";
import Country2 from "./Country2";
import graphql from "babel-plugin-relay/macro";
import React, { useEffect } from "react";
import RootQueryContext from "./RootQueryContext";

export default function CountryContainer(props) {
  const rootQuery = React.useContext(RootQueryContext);

  const data = useFragment(
    graphql`
      fragment CountryContainer_country on Country {
        name
        native
        phone
        capital
        states {
          code
          name
        }
        emojiU
        emoji
      }
    `,
    rootQuery
  );

  useEffect(() => {
    console.info({ rootQuery });
  }, [rootQuery]);

  return <Country2 country={data} />;
}
