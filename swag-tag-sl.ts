import {SwagTagBase, xc, xp, html} from 'swag-tag/lib/swag-tag-base.js';
import('lib-id/li-bid.js');
import('@shoelace-style/shoelace/dist/components/button/button.js');
import('carbon-copy/c-c.js');
import('pass-prop/p-p.js');

//import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
export const editor = html `
<p-p from-host observe-prop=fields to=[-list] m=1></p-p>
<li-bid -list><sl-button></sl-button></li-bid>
<sl-button type="primary">Primary</sl-button>
`;
export class SwagTagSL extends SwagTagBase{
  static is = 'swag-tag-sl';
  editor = editor;
}
xc.define(SwagTagSL);