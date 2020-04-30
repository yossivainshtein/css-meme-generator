import React from 'react';
import MemeInsertion from './MemeInsertion'
import MemeInsertionEditor from './MemeInsertionEditor'

export default class MemeEditor extends React.Component {
  constructor(props) {
    super(props)
    this.onCssChangeHandler = this.onCssChangeHandler.bind(this)
    console.log('z',this.state)
    this.state = Object.assign({}, {template: props.template})
  }

  onCssChangeHandler(index, css_change) {
    console.log('nnn', index, css_change)
    const style = Object.assign({}, this.state.template.tags[index].style)
    delete style[css_change.old_value.key]
    style[css_change.new_value.key]  = css_change.new_value.value
    this.state.template.tags[index].style = style
    this.setState({ 'template': this.state.template })
  }

  render() {
    return  (
      <div className="memeEditor">
        <div className="memePreview">
          <img className="memeImage" src={this.props.template.image_url} alt="memeImage"/>
          { this.state.template.tags.map(tag => <MemeInsertion tag={tag} />) }
        </div>

        <div className="insertionEditor">
          { this.state.template.tags.map((tag, i) => 
            <MemeInsertionEditor  index={i} 
                                  tag={tag} 
                                  onCssChangedHandler={(e) => this.onCssChangeHandler(i, e)}/>) }
        </div>
      </div>
    );
  }
}
