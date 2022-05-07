import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";

export default function Country3({ countryRoot }) {
  const country = useFragment(
    graphql`
      fragment Country3Fragment on Country {
        states {
          code
          name
        }
      }
    `,
    countryRoot
  );
  return (
    <div className="country">
      {country.states.map((state) => (
        <p key={state.name}>
          {state.code} {state.name}
        </p>
      ))}
    </div>
  );
}
