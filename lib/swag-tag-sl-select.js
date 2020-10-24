import { SwagTagPrimitiveBase } from 'swag-tag/lib/swag-tag-primitive-base.js';
import { define, mergeProps } from 'xtal-element/XtalElement.js';
import { createTemplate } from 'trans-render/createTemplate.js';
const mainTemplate = createTemplate(/* html */ `
  <style>
      :host{
          display:block;
      }
      sl-select{
          width: 100%;
      }
  </style>
  <sl-select part=select></sl-select>
`);
const optionTemplate = createTemplate(/* html */ `
<sl-menu-item></sl-menu-item>
`);
const [Sel] = [Symbol()];
const initTransform = ({ self }) => ({
    'sl-select': [{}, { selected: self.handleSelected }, { label: name }, , Sel]
});
const updateSelect = ({ readOnly, inputType, disabled, value, name }) => ({
    [Sel]: [{}, , { 'readonly': readOnly, disabled: disabled, value: value, label: name }]
});
const updateOptions = ({ self, options }) => ({
    [Sel]: [options || [], optionTemplate, , {
            'sl-menu-item': ({ item }) => [{ textContent: item, value: item }]
        }]
});
export class SwagTagSLSelect extends SwagTagPrimitiveBase {
    constructor() {
        super(...arguments);
        this.mainTemplate = mainTemplate;
        this.initTransform = initTransform;
        this.updateTransforms = [updateOptions, updateSelect];
    }
    handleSelected(e) {
        this.editedValue = e.target.value;
    }
}
SwagTagSLSelect.is = 'swag-tag-sl-select';
SwagTagSLSelect.attributeProps = ({ options }) => {
    const ap = {
        obj: [options]
    };
    return mergeProps(ap, SwagTagPrimitiveBase.props);
};
define(SwagTagSLSelect);
