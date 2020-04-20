import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


export default class InputWithLabel extends React.Component {
    render() {
        return <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text>{this.props.label}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl type={this.props.type} 
                     value={this.props.value} 
                     onChange={this.props.onChange} 
                     name={this.props.name} 
                     placeholder={this.props.placeholder} step={this.props.step}/>
      </InputGroup>
    }
}