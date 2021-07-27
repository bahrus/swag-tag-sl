import { SwagTagBase, xc, html } from 'swag-tag/lib/swag-tag-base.js';
import { IBid } from 'ib-id/i-bid.js';
import('@shoelace-style/shoelace/dist/components/button/button.js');
import('@shoelace-style/shoelace/dist/components/input/input.js');
import('@shoelace-style/shoelace/dist/components/textarea/textarea.js');
import('carbon-copy/c-c.js');
import('pass-prop/p-p.js');
import('if-diff/if-diff.js');
//import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
export const editor = html `
<p-d observe=wc-info-fetch vft=fields to=[-list] m=1></p-d>
<swag-tag-sl-i-bid -list><stsl-general-field-editor></stsl-general-field-editor></swag-tag-sl-i-bid>

<template id=stsl-general-field-editor>
<sl-textarea label={{name}}>{{val}}</sl-textarea>
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
export class SwagTagSLIBid extends IBid {
    constructor() {
        super(...arguments);
        this.map = (x, idx) => {
            if (x.type === undefined || x.type.text === undefined) {
                return {
                    ...x,
                    localName: 'stsl-general-field-editor',
                };
            }
            switch (x.type.text) {
                case 'string':
                case 'string | undefined':
                    return {
                        ...x,
                        localName: 'stsl-general-field-editor'
                    };
            }
        };
    }
}
SwagTagSLIBid.is = 'swag-tag-sl-i-bid';
xc.define(SwagTagSLIBid);
