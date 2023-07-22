import React from 'react';

interface EditableLabelProps {
    value: string
    is_active: boolean
    onValueChange: (value: string) => void
    onTabPressed?: () => void
}
export default class EditableLabel extends React.Component<EditableLabelProps> {
    private spanRef = React.createRef<HTMLInputElement>()
    private valueAtStartOfEditing: string | null = null

    startEdit() {
        this.spanRef?.current?.classList.toggle('edit')
        this.spanRef?.current?.select()
        this.valueAtStartOfEditing = this.props.value
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
                this.valueAtStartOfEditing && this.props.onValueChange(this.valueAtStartOfEditing)
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
                break;
            case "Tab":
                this.props.onTabPressed?.()
                break
        }
    }

    render() {
        return (<input 
                  ref={this.spanRef} 
                  className="cssLabel" 
                  onFocus={ () => this.startEdit() }
                  onBlur={ () => this.finishEdit() }
                  onInput= { () => this.handleChange() } 
                  value = { this.props.value }
                  style = {{
                    width: `${this.props.value.length}ch`,
                    ...(!this.props.is_active && {textDecoration: 'line-through'})
                  }}
                  onKeyDown = { (e) => this.keyDownHandler(e) }
                  onChange = { (e) => this.props.onValueChange(e.target.value)}
                 /> 
                
                )
            

    }
}