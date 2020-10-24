import {SwagTagPrimitiveBase} from 'swag-tag/lib/swag-tag-primitive-base.js';
import {SelectiveUpdate} from 'xtal-element/types.d.js';
import {define} from 'xtal-element/XtalElement.js';
import {createTemplate} from 'trans-render/createTemplate.js';


const mainTemplate = createTemplate(/* html */`
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

const initTransform = ({self}: SwagTagSLCheckbox) => ({
    'sl-checkbox': [{},{slChange:self.handleInput},,,cb],
});

const updateInput = ({readOnly, inputType, disabled, value, name}: SwagTagSLCheckbox) =>({
    [cb]: [{},,{'readonly': readOnly, type: inputType, disabled: disabled, value: value, label: name}]
});

const updateTransforms = [updateInput] as SelectiveUpdate<any>[];



export class SwagTagSLCheckbox extends SwagTagPrimitiveBase{
    static is = 'swag-tag-sl-checkbox';
    
    mainTemplate = mainTemplate;

    initTransform = initTransform;

    updateTransforms = updateTransforms;

    handleInput(e: Event){
        this.editedValue = !(<any>e.target!).checked;
    }

    propActions = [];
}
define(SwagTagSLCheckbox);