/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CountryContainerFragment$ref = any;
export type AppGetCountryQueryVariables = {|
  id: string
|};
export type AppGetCountryQueryResponse = {|
  +country: ?{|
    +code: string,
    +name: string,
    +$fragmentRefs: CountryContainerFragment$ref,
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
    ...CountryContainerFragment
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

fragment Country3Fragment on Country {
  states {
    code
    name
  }
}

fragment CountryContainerFragment on Country {
  ...Country2Fragment
  ...Country3Fragment
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
            "name": "CountryContainerFragment"
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8a5c43985f216039803a2ecbd5ea3f8d",
    "id": null,
    "metadata": {},
    "name": "AppGetCountryQuery",
    "operationKind": "query",
    "text": "query AppGetCountryQuery(\n  $id: ID!\n) {\n  country(code: $id) {\n    code\n    name\n    ...CountryContainerFragment\n  }\n}\n\nfragment Country2Fragment on Country {\n  name\n  native\n  phone\n  capital\n  emojiU\n  emoji\n}\n\nfragment Country3Fragment on Country {\n  states {\n    code\n    name\n  }\n}\n\nfragment CountryContainerFragment on Country {\n  ...Country2Fragment\n  ...Country3Fragment\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4df69280d3e0d297e238744e96e4f207';

module.exports = node;
