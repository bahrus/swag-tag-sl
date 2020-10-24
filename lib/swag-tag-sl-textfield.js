import { SwagTagPrimitiveBase } from 'swag-tag/lib/swag-tag-primitive-base.js';
import { define } from 'xtal-element/XtalElement.js';
import { createTemplate } from 'trans-render/createTemplate.js';
const mainTemplate = createTemplate(/* html */ `
  <style>
      :host{
          display:block;
      }
      sl-input{
          width: 100%;
      }
  </style>
  <sl-input part=textfield></sl-input>
`);
const [textField] = [Symbol('textField')];
const initTransform = ({ self }) => ({
    'sl-input': [{}, { input: self.handleInput }, , , textField]
});
const updateInput = ({ readOnly, inputType, disabled, value, name, description }) => ({
    [textField]: [{ readOnly: readOnly, type: inputType, disabled: disabled, value: value, label: name, helper: description }]
});
const updateTransforms = [
    updateInput
];
export const linkInputType = ({ type, self }) => {
    switch (type) {
        case 'number':
            self.inputType = 'number';
            break;
        case 'string':
            self.inputType = 'text';
            break;
    }
};
export const linkEditedValue = ({ value, self }) => {
    self.editedValue = value;
};
const propActions = [
    linkInputType, linkEditedValue
];
export class SwagTagSLTextField extends SwagTagPrimitiveBase {
    constructor() {
        super(...arguments);
        this.mainTemplate = mainTemplate;
        this.initTransform = initTransform;
        this.updateTransforms = updateTransforms;
        this.propActions = propActions;
    }
}
SwagTagSLTextField.is = 'swag-tag-sl-textfield';
define(SwagTagSLTextField);
