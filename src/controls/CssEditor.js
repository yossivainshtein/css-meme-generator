import React from 'react';
import EditableLabel from './EditableLabel'

class CssValueEditor extends React.Component {
    render() {
        return (<div className="cssValueContainerBox">
                    <EditableLabel value={this.props.css_key}/>:&nbsp;
                    <EditableLabel value={this.props.css_value} />
                </div>)
            }
}

export default class CssEditor extends React.Component {
    render() {
        return (  
            <p>
                { 
                    Object.keys(this.props.style).map(k => <CssValueEditor css_key={k} css_value={this.props.style[k]} />)
                }           
            </p>
    )}
}
