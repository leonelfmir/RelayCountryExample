import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { RelayEnvironmentProvider, loadQuery } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import React, { useEffect, Suspense } from "react";
import Country from "./components/Country";

const countryQuery = graphql`
  query AppGetCountryQuery($id: ID!, $id2: ID!) {
    ...CountryRefreshFragment
    country(code: $id) {
      code
      name
      ...CountryContainerFragment
    }
  }
`;

const Loader = () => {
  useEffect(() => {
    console.info("Loading countries");
  }, []);
  return <div>Loading...</div>;
};

const preloadedQuery = loadQuery(RelayEnvironment, countryQuery, {
  id: "CU",
  id2: "US",
});

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
      <Suspense fallback={<Loader />}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
