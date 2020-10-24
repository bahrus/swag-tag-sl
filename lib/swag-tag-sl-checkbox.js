import { SwagTagPrimitiveBase } from 'swag-tag/lib/swag-tag-primitive-base.js';
import { define } from 'xtal-element/XtalElement.js';
import { createTemplate } from 'trans-render/createTemplate.js';
const mainTemplate = createTemplate(/* html */ `
  <style>
      :host{
          display:block;
      }
      label{
          display:block;
      }
      sl-checkbox{
          width:100%;
      }
  </style>
  <sl-checkbox></sl-checkbox>
`);
const [cb] = [Symbol('cb')];
const initTransform = ({ self }) => ({
    'sl-checkbox': [{}, { slChange: self.handleInput }, , , cb],
});
const updateInput = ({ readOnly, inputType, disabled, value, name }) => ({
    [cb]: [{}, , { 'readonly': readOnly, type: inputType, disabled: disabled, value: value, label: name }]
});
const updateTransforms = [updateInput];
export class SwagTagSLCheckbox extends SwagTagPrimitiveBase {
    constructor() {
        super(...arguments);
        this.mainTemplate = mainTemplate;
        this.initTransform = initTransform;
        this.updateTransforms = updateTransforms;
        this.propActions = [];
    }
    handleInput(e) {
        this.editedValue = !e.target.checked;
    }
}
SwagTagSLCheckbox.is = 'swag-tag-sl-checkbox';
define(SwagTagSLCheckbox);
