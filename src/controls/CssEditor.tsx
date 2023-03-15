import { observer } from 'mobx-react';
import React from 'react';
import { CssProp } from '../models/MemeTemplate';
import EditableLabel from './EditableLabel'


interface CssEditorProps {
    css: Array<CssProp>
}
export default observer(
    class CssEditor extends React.Component<CssEditorProps> {
        render() {
            return (  
                <p className="cssEditor">
                    { 
                        this.props.css.map((cssProp, index) => <CssPropEditor {...{
                            cssProp,
                            onBlurInside: () => {
                                if (cssProp.prop === '' && cssProp.value === '') {
                                    this.props.css.splice(index, 1)
                                }
                            },
                            ...(index === this.props.css.length - 1 && { onTabPressedOnValue: () => { this.props.css.push(new CssProp('', '')) }})
                        }} />)
                    }           
                </p>
        )}
    })

interface CssPropEditorProps {
    cssProp: CssProp
    onTabPressedOnValue?: () => void
    onBlurInside: () => void
}
const CssPropEditor = observer(class CssPropEditorInner extends React.Component<CssPropEditorProps> {
    render() {
        return (<div className="cssValueContainerBox" onBlur={(e) => { this.props.onBlurInside() }}>
                    <input {...{
                        tabindex: 0,
                        className: 'cssPropertyCheckbox',
                        type: "checkbox",
                        defaultChecked: this.props.cssProp.is_active,
                        onChange: () => {
                            this.props.cssProp.is_active = !this.props.cssProp.is_active
                        }
                    }}/>
                    <EditableLabel 
                        value={this.props.cssProp.prop} 
                        onValueChange={(value: string) => { this.props.cssProp.prop = value }}/>
                    :
                    <EditableLabel 
                        value={this.props.cssProp.value} 
                        onTabPressed={this.props.onTabPressedOnValue}
                        onValueChange={(value: string) => { this.props.cssProp.value = value }}/>
                </div>)
            }
})
    