import { XtalElement, define } from 'xtal-element/XtalElement.js';
import { createTemplate } from 'trans-render/createTemplate.js';
import('p-et-alia/p-d.js');
const mainTemplate = createTemplate(/* html */ `
<sl-icon-button name=card-list data-click-value="true"></sl-icon-button>
<p-d on=click to=[-open] m=1 val=target.dataset.clickValue parse-val-as=boolean skip-init></p-d>
<sl-drawer label="Drawer" -open class="drawer-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <sl-button slot="footer" type="primary">Close</sl-button>
</sl-drawer>


`);
const initTransform = {};
export class SwagTagCatalogSL extends XtalElement {
    constructor() {
        super(...arguments);
        this.readyToInit = true;
        this.mainTemplate = mainTemplate;
        this.readyToRender = true;
        this.initTransform = initTransform;
    }
}
SwagTagCatalogSL.is = 'swag-tag-catalog-sl';
define(SwagTagCatalogSL);
