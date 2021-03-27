import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { RelayEnvironmentProvider, loadQuery } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import React from "react";
import Country from "./components/Country";
import Home from "./pages/Home";
const { Suspense } = React;

const countryQuery = graphql`
  query AppGetCountryQuery($id: ID!) {
    country(code: $id) {
      code
      name
      ...CountryContainer_country
    }
  }
`;
// const countryQuery = graphql`
//   query AppGetCountryQuery($id: ID!) {
//     country(code: $id) {
//       name
//       native
//       phone
//       capital
//       states {
//         code
//         name
//       }
//       emojiU
//       emoji
//     }
//   }
// `;

const preloadedQuery = loadQuery(RelayEnvironment, countryQuery, { id: "CU" });

function App(props) {
  return (
    <div className="App">
      <Country
        countryQuery={countryQuery}
        preloadedQuery={props.preloadedQuery}
      />
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;

// export default function HHM() {
//   return (
//     <RelayEnvironmentProvider environment={RelayEnvironment}>
//       <Suspense fallback={"Loading..."}>
//         <Home />
//       </Suspense>
//     </RelayEnvironmentProvider>
//   );
// }
