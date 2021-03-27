// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text, variables) {
  //   const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
  const REACT_APP_COUNTRIES_GRAPHQL_API =
    process.env.REACT_APP_COUNTRIES_GRAPHQL_API;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(REACT_APP_COUNTRIES_GRAPHQL_API, {
    method: "POST",
    headers: {
      //   Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
