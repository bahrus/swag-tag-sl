import {SwagTagPrimitiveBase} from 'swag-tag/lib/swag-tag-primitive-base.js';
import {define, AttributeProps, mergeProps, RenderContext, SelectiveUpdate} from 'xtal-element/XtalElement.js';
import {createTemplate} from 'trans-render/createTemplate.js';


const mainTemplate = createTemplate(/* html */`
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

const optionTemplate = createTemplate(/* html */`
<sl-menu-item></sl-menu-item>
`);

const [Sel] = [Symbol()];

const initTransform = ({self}: SwagTagSLSelect) => ({
    'sl-select': [{},{selected:self.handleSelected},{label: name},,Sel]
});
const updateSelect = ({readOnly, inputType, disabled, value, name}: SwagTagSLSelect) =>({
    [Sel]: [{},,{'readonly': readOnly, disabled: disabled, value: value, label: name}]
});
const updateOptions = ({self, options}: SwagTagSLSelect) => ({
    [Sel]: [options || [], optionTemplate,,{
        'sl-menu-item': ({item}: RenderContext) => [{textContent: item,value: item}]
    }]
});

export class SwagTagSLSelect extends SwagTagPrimitiveBase{
    static is = 'swag-tag-sl-select';
    static attributeProps = ({options}: SwagTagSLSelect) =>{
        const ap = {
            obj:[options]
        } as AttributeProps;
        return mergeProps(ap, SwagTagPrimitiveBase.props);
    }
    mainTemplate = mainTemplate;
    initTransform = initTransform;
    updateTransforms = [updateOptions, updateSelect] as SelectiveUpdate<any>[];
    handleSelected(e: CustomEvent){
        this.editedValue = (<any>e.target!).value;
    }
    options: string[] | undefined;
}
define(SwagTagSLSelect);