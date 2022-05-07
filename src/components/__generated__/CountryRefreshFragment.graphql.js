/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CountryRefreshFragment$ref: FragmentReference;
declare export opaque type CountryRefreshFragment$fragmentType: CountryRefreshFragment$ref;
export type CountryRefreshFragment = {|
  +country2: ?{|
    +name: string
  |},
  +$refType: CountryRefreshFragment$ref,
|};
export type CountryRefreshFragment$data = CountryRefreshFragment;
export type CountryRefreshFragment$key = {
  +$data?: CountryRefreshFragment$data,
  +$fragmentRefs: CountryRefreshFragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id2"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./CountryRefetchQuery.graphql.js')
    }
  },
  "name": "CountryRefreshFragment",
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
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '3768d36b3aa160c70323793f889e88fe';

module.exports = node;
