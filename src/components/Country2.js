import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";

export default function Country2({ countryRoot }) {
  const country = useFragment(
    graphql`
      fragment Country2Fragment on Country {
        name
        native
        phone
        capital
        emojiU
        emoji
      }
    `,
    countryRoot
  );
  return (
    <div className="country">
      <p>{country.name}</p>
      <p>{country.phone}</p>
      <p>{country.emoji}</p>
      <p>{country.native}</p>
    </div>
  );
}
