/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CountryContainerFragment$ref = any;
type CountryRefreshFragment$ref = any;
export type AppGetCountryQueryVariables = {|
  id: string,
  id2: string,
|};
export type AppGetCountryQueryResponse = {|
  +country: ?{|
    +code: string,
    +name: string,
    +$fragmentRefs: CountryContainerFragment$ref,
  |},
  +$fragmentRefs: CountryRefreshFragment$ref,
|};
export type AppGetCountryQuery = {|
  variables: AppGetCountryQueryVariables,
  response: AppGetCountryQueryResponse,
|};
*/


/*
query AppGetCountryQuery(
  $id: ID!
  $id2: ID!
) {
  ...CountryRefreshFragment
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
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id2"
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
      },
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
    "name": "AppGetCountryQuery",
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
          (v3/*: any*/)
        ],
        "storageKey": null
      },
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
    "cacheID": "c0e7b5c9cfb3aedb66fdd461ad2f59a8",
    "id": null,
    "metadata": {},
    "name": "AppGetCountryQuery",
    "operationKind": "query",
    "text": "query AppGetCountryQuery(\n  $id: ID!\n  $id2: ID!\n) {\n  ...CountryRefreshFragment\n  country(code: $id) {\n    code\n    name\n    ...CountryContainerFragment\n  }\n}\n\nfragment Country2Fragment on Country {\n  name\n  native\n  phone\n  capital\n  emojiU\n  emoji\n}\n\nfragment Country3Fragment on Country {\n  states {\n    code\n    name\n  }\n}\n\nfragment CountryContainerFragment on Country {\n  ...Country2Fragment\n  ...Country3Fragment\n}\n\nfragment CountryRefreshFragment on Query {\n  country2: country(code: $id2) {\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bded5160e52958a4ec656471060d9e12';

module.exports = node;
