import { SwagTagBase, xc, html } from 'swag-tag/lib/swag-tag-base.js';
import('lib-id/li-bid.js');
import('@shoelace-style/shoelace/dist/components/button/button.js');
import('carbon-copy/c-c.js');
import('pass-prop/p-p.js');
import('if-diff/if-diff.js');
//import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
export const editor = html `
<p-d observe=wc-info-fetch vft=fields to=[-list] m=1></p-d>
<i-bid -list><stsl-field-editor></stsl-field-editor></i-bid>

<template id=stsl-field-editor>
<sl-button type="primary">Primary</sl-button>
</template>
<c-c copy from-prev-sibling></c-c>
`;
export class SwagTagSL extends SwagTagBase {
    constructor() {
        super(...arguments);
        this.editor = editor;
    }
}
SwagTagSL.is = 'swag-tag-sl';
xc.define(SwagTagSL);
