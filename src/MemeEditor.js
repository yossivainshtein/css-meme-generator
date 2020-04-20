import React from 'react';
import MemeInsertion from './MemeInsertion'
import MemeInsertionEditor from './MemeInsertionEditor'



export default class MemeEditor extends React.Component {
  render() {
    return  (
      <div className="memeEditor">
        <div className="memePreview">
          <img className="memeImage" src={this.props.template.image_url} alt="memeImage">
          </img>
          { this.props.template.tags.map(tag => <MemeInsertion tag={tag} />) }
        </div>

        <div className="insertionEditor">
          { this.props.template.tags.map((tag, i) => <MemeInsertionEditor index={i} tag={tag} />) }
        </div>
      </div>
    );
  }
}
