import { observer } from 'mobx-react';
import React from 'react';
import MemeInsertion from './MemeInsertion'
import MemeInsertionEditor from './MemeInsertionEditor'
import { WithMemeTemplate } from './models/MemeTemplate';

export default observer(
  class MemeEditor extends React.Component<WithMemeTemplate> {
    render() {
      return  (
        <div className="memeEditor">
          <div className="memePreview">
            <img className="memeImage" src={this.props.template.image_url} alt="memeImage"/>
            { this.props.template.tags.map((tag, i) => <MemeInsertion key={i} tag={tag} />) }
          </div>

          <div className="insertionEditor">
            { this.props.template.tags.map((tag, i) => <MemeInsertionEditor index={i} tag={tag} />) }
          </div>
        </div>
      );
    }
  }
)