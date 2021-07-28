import {SwagTagBase, xc, xp, html} from 'swag-tag/lib/swag-tag-base.js';
import {EnhancedClassField} from 'wc-info/types.d.js';
import {IBid} from 'ib-id/i-bid.js';
import {ClassField} from 'node_modules/custom-elements-manifest/schema.d.js';
import('@shoelace-style/shoelace/dist/components/button/button.js');
import('@shoelace-style/shoelace/dist/components/input/input.js');
import('@shoelace-style/shoelace/dist/components/textarea/textarea.js');
import('carbon-copy/c-c.js');
import('pass-prop/p-p.js');
import('if-diff/if-diff.js');



//import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
export const editor = html `
<style>
  [data-is-even="true"] *{
    background-color: var(--even-row-bg-color, #f8f8f8);
  }
</style>
<p-d observe=wc-info-fetch vft=fields to=[-list] m=1></p-d>
<swag-tag-sl-i-bid -list ><stsl-general-field-editor></stsl-general-field-editor></swag-tag-sl-i-bid>
<div>iah</div>
<template id=stsl-general-field-editor>
<sl-textarea class=field-editor label="Property: {{name}}" help-text={{description}} data-name={{name}}>{{val}}</sl-textarea>
<p-d on=sl-change vft from=stsl-general-field-editor to=div prop-from-target=dataset.name></p-d>
<hr>
<p>iah</p>
</template>
<c-c copy from-prev-sibling noshadow string-props='["name", "description"]' obj-props='["val"]'></c-c>
`;
export class SwagTagSL extends SwagTagBase{
  static is = 'swag-tag-sl';
  editor = editor;
}
xc.define(SwagTagSL);

export class SwagTagSLIBid extends IBid<EnhancedClassField>{
  static is = 'swag-tag-sl-i-bid';
   map = (x: EnhancedClassField, idx: number) => {
     const ds = {
       dataset: {
        isEven: idx % 2 === 0,
       }
      };
    if(x.type === undefined || x.type.text === undefined){
      return {
        ...x,
        localName: 'stsl-general-field-editor',
        ...ds,
        //attributes: {even: idx % 2 === 0}
      };
    }
    switch(x.type.text){
      case 'string':
      case 'string | undefined':
        return {
          ...x,
          ...ds,
          localName: 'stsl-general-field-editor'
        };
      default:
        return {
          ...x,
          ...ds,
          localName: 'stsl-general-field-editor'
        };
    }
   }
}
xc.define(SwagTagSLIBid)
