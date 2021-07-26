import { SwagTagBase, xc, html } from 'swag-tag/lib/swag-tag-base.js';
import('@shoelace-style/shoelace/dist/components/button/button.js');
//import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
export const editor = html `
<sl-button type="primary">Primary</sl-button>
`;
export class SwagTagSL extends SwagTagBase {
    constructor() {
        super(...arguments);
        this.editor = editor;
    }
}
SwagTagSL.is = 'swag-tag-sl';
xc.define(SwagTagSL);
