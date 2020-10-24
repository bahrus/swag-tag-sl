import {SwagTagPrimitiveBase} from 'swag-tag/lib/swag-tag-primitive-base.js';
import {SelectiveUpdate} from 'xtal-element/types.d.js';
import {define} from 'xtal-element/XtalElement.js';
import {createTemplate} from 'trans-render/createTemplate.js';


const mainTemplate = createTemplate(/* html */`
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

const initTransform = ({self}: SwagTagSLTextField) => ({
    'sl-input': [{},{input:self.handleInput},,,textField]
});

const updateInput = ({readOnly, inputType, disabled, value, name, description}: SwagTagSLTextField) =>({
    [textField]: [{readOnly: readOnly, type: inputType, disabled: disabled, value: value, label: name, helper: description}]
});

const updateTransforms = [
    updateInput
]  as SelectiveUpdate<any>[];

export const linkInputType = ({type, self}: SwagTagSLTextField) => {
    switch(type){
        case 'number':
            self.inputType = 'number';
            break;
        case 'string':
            self.inputType = 'text';
            break;
    }
}

export const linkEditedValue = ({value, self}: SwagTagSLTextField) => {
    self.editedValue = value;
}

const propActions = [
    linkInputType, linkEditedValue
];

export class SwagTagSLTextField extends SwagTagPrimitiveBase{
    static is = 'swag-tag-sl-textfield';
    
    mainTemplate = mainTemplate;

    initTransform = initTransform;

    updateTransforms = updateTransforms

    propActions = propActions;
}
define(SwagTagSLTextField);