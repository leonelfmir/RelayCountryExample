import { render, screen, act } from "@testing-library/react";
import Country2 from "../Country2";
import graphql from "babel-plugin-relay/macro";
import { RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay/hooks";
import React, { Suspense } from "react";
import { createMockEnvironment } from "relay-test-utils";
import { MockPayloadGenerator } from "relay-test-utils";

test("renders learn react link", async () => {
  const environment = createMockEnvironment();

  render(<TestRoot sut={Country2} environment={environment} />);

  screen.getByText("Loading1");

  environment.mock.resolveMostRecentOperation((operation) =>
    MockPayloadGenerator.generate(operation, {
      Country: () => ({ name: "leo" }),
    })
  );

  await screen.findByTestId("123");
});

function TestRenderer(props) {
  const Sut = props.sut;
  const data = useLazyLoadQuery(
    graphql`
      query Country2TestQuery @relay_test_operation {
        country(code: "US") {
          ...Country2Fragment
        }
      }
    `,
    {}
  );

  return (
    <Suspense fallback={"Loading2"}>
      <Sut countryRoot={data.country} />
    </Suspense>
  );
}

function TestRoot(props) {
  return (
    <RelayEnvironmentProvider environment={props.environment}>
      <Suspense fallback="Loading1">
        <TestRenderer sut={props.sut} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
