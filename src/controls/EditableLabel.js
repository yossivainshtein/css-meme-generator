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
    constructor(props) {
        super(props)
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
        console.log('handleChange')
        this.props.onValueChanged && this.props.onValueChanged({
            old_value: this.props.value, 
            new_value: event.target.innerText
        })
    }

    finishEdit(event) {
        const node = event.target
        node.classList.toggle('edit')        
    }

    keyDownHandler(event) {
        const key = event.key
        console.log('keydoen')
        switch(key) {
            case "Escape":
                this.setState({'value': this.props.value})
            case "Enter":
                this.finishEdit()
                this.handleChange(event)
                break;
            case "ArrowUp":
            case "ArrowDown":
                const value = event.target.innerText
                const match = /(\d+)(\%)/g.exec(value)
                if (match) {
                    let [_, num, units] = match
                    let diff = key === 'ArrowUp' ? +1 : -1
                    num = parseInt(num)
                    num += diff
                    event.target.innerText = '' + num + units
                }
                // event.preventDefault()
                // event.stopPropagation()
                this.handleChange(event)
        }
        
    }

    render() {
        return (<span 
                  contentEditable 
                  className="cssLabel" 
                  onFocus={ this.startEdit }
                  onBlur={ this.finishEdit }
                  onInput= { this.handleChange } 
                  onKeyDown = { this.keyDownHandler }
                  > 
                    { this.state.value || this.props.value} 
                </span>)
            

    }
}