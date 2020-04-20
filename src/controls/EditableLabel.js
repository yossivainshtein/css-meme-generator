import React from 'react';

function selectText(node) {
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
}

export default class EditableLabel extends React.Component {
    constructor() {
        super()
        this.state = {
            editing: false,
        }
        this.startEdit = this.startEdit.bind(this)
        this.finishEdit = this.finishEdit.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);

    }

    startEdit(event) {
        const node = event.target
        node.classList.toggle('edit')
        selectText(node)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    finishEdit(event) {
        const node = event.target

        node.classList.toggle('edit')

        this.props.onValueChanged && this.props.onValueChanged({
            old_value: this.props.value, 
            new_value: this.state.value
        })
    }

    keyDownHandler(event) {
        const key = event.key
        if (key === "Enter" || key === "Escape" ) {
            this.finishEdit()
        }
    }

    render() {
        return (<span 
                  contentEditable 
                  className="cssLabel" 
                  onFocus={ this.startEdit }
                  onBlur={ this.finishEdit }> 
                    { this.state.value || this.props.value} 
                </span>)
            

    }
}