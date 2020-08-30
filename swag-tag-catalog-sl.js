import { XtalElement, define } from 'xtal-element/XtalElement.js';
import { createTemplate } from 'trans-render/createTemplate.js';
import('p-et-alia/p-d.js');
import('p-et-alia/p-u.js');
const mainTemplate = createTemplate(/* html */ `
<style>
sl-menu{
  /*max-width: 200px; */
  width: 100%;
  border: solid 1px var(--sl-panel-border-color); 
  border-radius: var(--sl-border-radius-medium);
}
</style>
<sl-icon-button name=card-list data-click-value="true"></sl-icon-button>
<p-d on=click to=[-open] m=1 val=target.dataset.clickValue parse-val-as=boolean skip-init></p-d>
<sl-drawer label="Catalog" -open class="drawer-overview">
  <sl-menu>
    <sl-menu-item value="undo">Undo</sl-menu-item>
    <sl-menu-item value="redo">Redo</sl-menu-item>
    <sl-menu-divider></sl-menu-divider>
    <sl-menu-item value="cut">Cut</sl-menu-item>
    <sl-menu-item value="copy">Copy</sl-menu-item>
    <sl-menu-item value="paste">Paste</sl-menu-item>
    <sl-menu-item value="delete">Delete</sl-menu-item>
  </sl-menu>
  <sl-button slot="footer" type="primary" data-click-value="false">Close</sl-button>
  <p-u on=click to-closest=sl-drawer prop=open val=target.dataset.clickValue parse-val-as=boolean skip-init></p-u>
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
