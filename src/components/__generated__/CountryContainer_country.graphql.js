/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CountryContainer_country$ref: FragmentReference;
declare export opaque type CountryContainer_country$fragmentType: CountryContainer_country$ref;
export type CountryContainer_country = {|
  +name: string,
  +native: string,
  +phone: string,
  +capital: ?string,
  +states: $ReadOnlyArray<{|
    +code: ?string,
    +name: string,
  |}>,
  +emojiU: string,
  +emoji: string,
  +$refType: CountryContainer_country$ref,
|};
export type CountryContainer_country$data = CountryContainer_country;
export type CountryContainer_country$key = {
  +$data?: CountryContainer_country$data,
  +$fragmentRefs: CountryContainer_country$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CountryContainer_country",
  "selections": [
    (v0/*: any*/),
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "code",
          "storageKey": null
        },
        (v0/*: any*/)
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
  "type": "Country",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '26eebcd6ee9c3c13069715979fa39ac4';

module.exports = node;
