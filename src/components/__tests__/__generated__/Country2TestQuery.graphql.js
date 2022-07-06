/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Country2Fragment$ref = any;
export type Country2TestQueryVariables = {||};
export type Country2TestQueryResponse = {|
  +country: ?{|
    +$fragmentRefs: Country2Fragment$ref
  |}
|};
export type Country2TestQuery = {|
  variables: Country2TestQueryVariables,
  response: Country2TestQueryResponse,
|};
*/


/*
query Country2TestQuery {
  country(code: "US") {
    ...Country2Fragment
  }
}

fragment Country2Fragment on Country {
  name
  native
  phone
  capital
  emojiU
  emoji
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "code",
    "value": "US"
  }
],
v1 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Country2TestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Country2Fragment"
          }
        ],
        "storageKey": "country(code:\"US\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Country2TestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
          },
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
        "storageKey": "country(code:\"US\")"
      }
    ]
  },
  "params": {
    "cacheID": "5c6e2895529c4dc4cd0cd1a85b3cbb0c",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "country": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Country"
        },
        "country.capital": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "country.emoji": (v1/*: any*/),
        "country.emojiU": (v1/*: any*/),
        "country.name": (v1/*: any*/),
        "country.native": (v1/*: any*/),
        "country.phone": (v1/*: any*/)
      }
    },
    "name": "Country2TestQuery",
    "operationKind": "query",
    "text": "query Country2TestQuery {\n  country(code: \"US\") {\n    ...Country2Fragment\n  }\n}\n\nfragment Country2Fragment on Country {\n  name\n  native\n  phone\n  capital\n  emojiU\n  emoji\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3863082c130972f783b7f0c9f9a21eeb';

module.exports = node;
