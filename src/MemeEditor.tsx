import { observer } from 'mobx-react';
import React from 'react';
import MemeInsertion from './MemeInsertion'
import MemeInsertionEditor from './MemeInsertionEditor'
import { WithMemeTemplate } from './models/MemeTemplate';
import html2canvas from 'html2canvas';

function saveAs(blob: any, fileName="pic") {
  const link = document.createElement('a');
  link.download = fileName
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
}


const downloadMemePreviewAsImage = () => {
  const memePreview = document.querySelector('.memePreview')
  if (memePreview) {
    html2canvas(memePreview as HTMLElement, {}).then(canvas => {
      canvas.toBlob(blob => saveAs(blob, 'meme'))
    })
  }
}

export default observer(
  class MemeEditor extends React.Component<WithMemeTemplate> {
    render() {
      return  (
        <div className="memeEditor">
          <div className="memeLeftColumn">
            <div className="memePreview">
              <img className="memeImage" src={this.props.template.image_url} alt="memeImage"/>
              { this.props.template.tags.map((tag, i) => <MemeInsertion key={i} tag={tag} />) }
            </div>
            <button className="saveButton btn btn-primary" onClick={downloadMemePreviewAsImage}>Download Image</button>
          </div>
          <div className="insertionEditor">
            { this.props.template.tags.map((tag, i) => <MemeInsertionEditor index={i} tag={tag} />) }
          </div>
        </div>
      );
    }
  }
)