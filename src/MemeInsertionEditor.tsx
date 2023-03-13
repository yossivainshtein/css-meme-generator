import React, { ChangeEvent } from 'react';
import InputWithLabel from './controls/InputWithLabel'
import CssEditor from './controls/CssEditor'
import { WithMemeTag } from './models/MemeTemplate';
import { observer } from 'mobx-react';

interface MemeInsertionEditorProps extends WithMemeTag {
    index: number
}
export default observer(class MemeInsertionEditor extends React.Component<MemeInsertionEditorProps> {
    render() {
        return (  
        <div>
            <InputWithLabel 
                label={ "Text #" + (this.props.index+1) } 
                value={ this.props.tag.text } 
                onChange= { (e: ChangeEvent<HTMLInputElement>) => this.props.tag.setText(e.target.value) }/>
            <CssEditor css={ this.props.tag.css }/>
        </div>
    )}
})