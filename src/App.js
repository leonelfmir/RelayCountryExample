import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { RelayEnvironmentProvider, loadQuery } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import React from "react";
import Country from "./components/Country";
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
