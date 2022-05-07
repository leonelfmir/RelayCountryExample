/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Country3Fragment$ref: FragmentReference;
declare export opaque type Country3Fragment$fragmentType: Country3Fragment$ref;
export type Country3Fragment = {|
  +states: $ReadOnlyArray<{|
    +code: ?string,
    +name: string,
  |}>,
  +$refType: Country3Fragment$ref,
|};
export type Country3Fragment$data = Country3Fragment;
export type Country3Fragment$key = {
  +$data?: Country3Fragment$data,
  +$fragmentRefs: Country3Fragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Country3Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "State",
      "kind": "LinkedField",
      "name": "states",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "code",
          "storageKey": null
        },
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
  "type": "Country",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'f4f9e58347143fa7ac2157b469df6673';

module.exports = node;
