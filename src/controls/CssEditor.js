import React from 'react';
import EditableLabel from './EditableLabel'

class CssValueEditor extends React.Component {
    constructor(props) {
        super(props)
        this.cssKeyChangedHandler = this.cssKeyChangedHandler.bind(this)
        this.cssValueChangedHandler = this.cssValueChangedHandler.bind(this)
        this.cssChangedHandler = this.cssChangedHandler.bind(this)
    }

    cssKeyChangedHandler(event) {
        this.props.onCssValueChanged && 
        this.props.onCssValueChanged({
            old_value: { key: event.old_value, value: this.props.css_value },
            new_value: { key: event.new_value, value: this.props.css_value }})
    }

    cssValueChangedHandler(event) {
        this.props.onCssValueChanged && 
        this.props.onCssValueChanged({
            old_value: { key: this.props.css_key, value: event.old_value },
            new_value: { key: this.props.css_key, value: event.new_value }})
    }

    cssChangedHandler(label, event) {
        switch (label){
            case 'key':
                this.props.onCssValueChanged && 
                this.props.onCssValueChanged({
                    old_value: { key: event.old_value, value: this.props.css_value },
                    new_value: { key: event.new_value, value: this.props.css_value }})
                break;
            case 'value':
                this.props.onCssValueChanged && 
                this.props.onCssValueChanged({
                    old_value: { key: this.props.css_key, value: event.old_value },
                    new_value: { key: this.props.css_key, value: event.new_value }})
                break;
            default:
                throw new Error('bad label');
        }
    }

    render() {
        return (<div className="cssValueContainerBox">
                    <EditableLabel value={this.props.css_key} onValueChanged={event => this.cssChangedHandler('key', event)}/>:&nbsp;
                    <EditableLabel value={this.props.css_value} onValueChanged={event => this.cssChangedHandler('value', event)}/>
                </div>)
            }
}

export default class CssEditor extends React.Component {
    render() {
        return (  
            <p>
                { 
                    Object.keys(this.props.style).sort().map(k => <CssValueEditor css_key={k} css_value={this.props.style[k]} 
                        onCssValueChanged={ this.props.onCssChangedHandler }/>)
                }           
            </p>
    )}
}
