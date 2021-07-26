import {SwagTagBase, xc, xp, html} from 'swag-tag/lib/swag-tag-base.js';
import('lib-id/li-bid.js');
import('@shoelace-style/shoelace/dist/components/button/button.js');
import('carbon-copy/c-c.js');
import('pass-prop/p-p.js');

//import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
export const editor = html `
<template id=stsl-field-editor>
<sl-button type="primary">Primary</sl-button>
</template>
<c-c copy from-prev-sibling></c-c>
<p-p from-host observe-prop=fields to=[-list] m=1></p-p>
<i-bid -list><stsl-field-editor></stsl-field-editor></i-bid>

`;
export class SwagTagSL extends SwagTagBase{
  static is = 'swag-tag-sl';
  editor = editor;
}
xc.define(SwagTagSL);