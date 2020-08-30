import { XtalElement, define, AttributeProps, TransformGetter, TransformValueOptions, SelectiveUpdate, RenderContext, symbolize, p } from 'xtal-element/XtalElement.js';
import { createTemplate } from 'trans-render/createTemplate.js';
import('p-et-alia/p-d.js');
import('p-et-alia/p-u.js');

const mainTemplate = createTemplate(/* html */`
<sl-icon-button name=card-list data-click-value="true"></sl-icon-button>
<p-d on=click to=[-open] m=1 val=target.dataset.clickValue parse-val-as=boolean skip-init></p-d>
<sl-drawer label="Drawer" -open class="drawer-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <sl-button slot="footer" type="primary" data-click-value="false">Close</sl-button>
  <p-u on=click to-closest=sl-drawer prop=open val=target.dataset.clickValue parse-val-as=boolean skip-init></p-u>
</sl-drawer>


`);

const initTransform = {

} as TransformValueOptions;

export class SwagTagCatalogSL extends XtalElement{
    static is = 'swag-tag-catalog-sl';

    readyToInit = true;
    mainTemplate = mainTemplate;
    readyToRender = true;
    initTransform = initTransform;
}
define(SwagTagCatalogSL);