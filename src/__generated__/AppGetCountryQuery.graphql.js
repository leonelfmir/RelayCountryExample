/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CountryContainer_country$ref = any;
export type AppGetCountryQueryVariables = {|
  id: string
|};
export type AppGetCountryQueryResponse = {|
  +country: ?{|
    +code: string,
    +name: string,
    +$fragmentRefs: CountryContainer_country$ref,
  |}
|};
export type AppGetCountryQuery = {|
  variables: AppGetCountryQueryVariables,
  response: AppGetCountryQueryResponse,
|};
*/


/*
query AppGetCountryQuery(
  $id: ID!
) {
  country(code: $id) {
    code
    name
    ...CountryContainer_country
  }
}

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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "code",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppGetCountryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CountryContainer_country"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppGetCountryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "native",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "capital",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "State",
            "kind": "LinkedField",
            "name": "states",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "emojiU",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "emoji",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "58ee4f413e6db859e5f44bbb74642ab5",
    "id": null,
    "metadata": {},
    "name": "AppGetCountryQuery",
    "operationKind": "query",
    "text": "query AppGetCountryQuery(\n  $id: ID!\n) {\n  country(code: $id) {\n    code\n    name\n    ...CountryContainer_country\n  }\n}\n\nfragment CountryContainer_country on Country {\n  name\n  native\n  phone\n  capital\n  states {\n    code\n    name\n  }\n  emojiU\n  emoji\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ea58de2c00211f219c41db18968d0e93';

module.exports = node;
