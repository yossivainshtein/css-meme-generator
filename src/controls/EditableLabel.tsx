import React from 'react';

interface EditableLabelProps {
    value: string
    onValueChange: (value: string) => void
}
export default class EditableLabel extends React.Component<EditableLabelProps> {
    private spanRef = React.createRef<HTMLInputElement>()
    private valueAtStartOfEditing = React.createRef<string>()

    constructor(props: EditableLabelProps) {
        super(props)

        this.startEdit = this.startEdit.bind(this)
        this.finishEdit = this.finishEdit.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);

    }

    startEdit() {
        this.spanRef?.current?.classList.toggle('edit')
        this.spanRef?.current?.select()
        // this.valueAtStartOfEditing.current = this.props.value
    }

    handleChange() {
        const value = this.spanRef?.current?.innerText
        if (value !== undefined && value !== null) {
            this.props.onValueChange(value)
        }
    }

    finishEdit() {
        this.spanRef?.current?.classList.toggle('edit')        
    }

    keyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        const key = event.key
        switch(key) {
            case "Escape":
                // this.valueAtStartOfEditing.current && this.props.onValueChange(this.valueAtStartOfEditing.current)
                this.spanRef?.current?.blur()
                break;
            case "Enter":
                this.spanRef?.current?.blur()
                break;
            case "ArrowUp":
            case "ArrowDown":
                const value = event.currentTarget.value
                const match = /(\d+)(\%)/g.exec(value)
                if (match) {
                    let [_, num_str, units] = match
                    let diff = key === 'ArrowUp' ? +1 : -1
                    let num = parseInt(num_str)
                    num += diff
                    this.props.onValueChange('' + num + units)
                }
                event.preventDefault()
        }
    }

    render() {
        return (<input 
                  ref={this.spanRef} 
                  className="cssLabel" 
                  onFocus={ this.startEdit }
                  onBlur={ this.finishEdit }
                  onInput= { this.handleChange } 
                  value = { this.props.value }
                  style = {{
                    width: `${this.props.value.length}ch`
                  }}
                  onKeyDown = { this.keyDownHandler }
                  onChange = { (e) => this.props.onValueChange(e.target.value)}
                 /> 
                
                )
            

    }
}