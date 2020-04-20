import React from 'react';

export default class MemeInsertion extends React.Component {
    getStyle() {
        return this.props.tag.style
    }

    render() {
        return  (<p className="memeInsertion" style={ this.getStyle() }>{this.props.tag.text}</p>)
    }
}