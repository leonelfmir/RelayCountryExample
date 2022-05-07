/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CountryRefreshFragment$ref = any;
export type CountryRefetchQueryVariables = {|
  id2: string
|};
export type CountryRefetchQueryResponse = {|
  +$fragmentRefs: CountryRefreshFragment$ref
|};
export type CountryRefetchQuery = {|
  variables: CountryRefetchQueryVariables,
  response: CountryRefetchQueryResponse,
|};
*/


/*
query CountryRefetchQuery(
  $id2: ID!
) {
  ...CountryRefreshFragment
}

fragment CountryRefreshFragment on Query {
  country2: country(code: $id2) {
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id2"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CountryRefetchQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CountryRefreshFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CountryRefetchQuery",
    "selections": [
      {
        "alias": "country2",
        "args": [
          {
            "kind": "Variable",
            "name": "code",
            "variableName": "id2"
          }
        ],
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5ed4f96a758495f4236b2c8bd0878a68",
    "id": null,
    "metadata": {},
    "name": "CountryRefetchQuery",
    "operationKind": "query",
    "text": "query CountryRefetchQuery(\n  $id2: ID!\n) {\n  ...CountryRefreshFragment\n}\n\nfragment CountryRefreshFragment on Query {\n  country2: country(code: $id2) {\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3768d36b3aa160c70323793f889e88fe';

module.exports = node;
