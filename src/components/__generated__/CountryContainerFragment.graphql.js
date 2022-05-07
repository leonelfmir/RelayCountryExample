/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Country2Fragment$ref = any;
type Country3Fragment$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CountryContainerFragment$ref: FragmentReference;
declare export opaque type CountryContainerFragment$fragmentType: CountryContainerFragment$ref;
export type CountryContainerFragment = {|
  +$fragmentRefs: Country2Fragment$ref & Country3Fragment$ref,
  +$refType: CountryContainerFragment$ref,
|};
export type CountryContainerFragment$data = CountryContainerFragment;
export type CountryContainerFragment$key = {
  +$data?: CountryContainerFragment$data,
  +$fragmentRefs: CountryContainerFragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CountryContainerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Country2Fragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Country3Fragment"
    }
  ],
  "type": "Country",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'ef08ff1427ebbb1b62a2245c05af95bf';

module.exports = node;
