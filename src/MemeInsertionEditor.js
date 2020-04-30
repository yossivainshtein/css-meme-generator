import React from 'react';
import InputWithLabel from './controls/InputWithLabel'
import CssEditor from './controls/CssEditor'

export default class MemeInsertionEditor extends React.Component {
    render() {
        return (  
        <div>
            <InputWithLabel label={ "Text #" + (this.props.index+1) } value={ this.props.tag.text } onChange= { this.props.onTextChangedHandler }/>
            <CssEditor style={ this.props.tag.style } onCssChangedHandler={ this.props.onCssChangedHandler } />
        </div>
    )}
}