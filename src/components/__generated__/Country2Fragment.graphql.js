/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Country2Fragment$ref: FragmentReference;
declare export opaque type Country2Fragment$fragmentType: Country2Fragment$ref;
export type Country2Fragment = {|
  +name: string,
  +native: string,
  +phone: string,
  +capital: ?string,
  +emojiU: string,
  +emoji: string,
  +$refType: Country2Fragment$ref,
|};
export type Country2Fragment$data = Country2Fragment;
export type Country2Fragment$key = {
  +$data?: Country2Fragment$data,
  +$fragmentRefs: Country2Fragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Country2Fragment",
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
  "type": "Country",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e548faa6c116f3cfe56b1911319b0eaf';

module.exports = node;
