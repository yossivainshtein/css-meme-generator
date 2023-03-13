import { observer } from 'mobx-react';
import React from 'react';
import { CssProp } from '../models/MemeTemplate';
import EditableLabel from './EditableLabel'


interface CssEditorProps {
    css: Array<CssProp>
}
export default observer(class CssEditor extends React.Component<CssEditorProps> {
        render() {
            return (  
                <p>
                    { 
                        this.props.css.map((cssProp) => <CssPropEditor cssProp={ cssProp }/>)
                    }           
                </p>
        )}
    })

interface CssPropEditorProps {
    cssProp: CssProp
}
const CssPropEditor = observer(class CssPropEditorInner extends React.Component<CssPropEditorProps> {
    render() {
        return (<div className="cssValueContainerBox">
                    <EditableLabel 
                        value={this.props.cssProp.prop} 
                        onValueChange={(value: string) => { console.log('prop: ', value); this.props.cssProp.prop = value }}/>
                    :&nbsp;
                    <EditableLabel 
                        value={this.props.cssProp.value} 
                        onValueChange={(value: string) => { console.log('value: ', value);  this.props.cssProp.value = value }}/>
                </div>)
            }
})
    