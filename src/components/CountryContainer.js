import { useFragment } from "react-relay";
import Country2 from "./Country2";
import graphql from "babel-plugin-relay/macro";

export default function CountryContainer(props) {
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
    props.country
  );
  return <Country2 country={data} />;
}
