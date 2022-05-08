import React, { useState, Suspense } from "react";
import CountryRefresh from "./CountryRefresh";
import ErrorBoundary from "./ErrorBoundary";

export default function CountryRefreshContainer(props) {
  const [country, setCountry] = useState("DE");
  const [contryToPass, setCountryToPass] = useState(country);
  const countryChange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <>
      <h3>RefreshID</h3>
      <input type="text" onChange={countryChange} />
      <button onClick={() => setCountryToPass(country)}>New Country</button>
      <ErrorBoundary>
        <Suspense fallback="...loading">
          <CountryRefresh country={contryToPass} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
