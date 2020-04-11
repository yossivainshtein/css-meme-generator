import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

class MemeGenerator extends React.Component {
  constructor() {
    super()
  }
  render() {
      return (
        <div className="container">
            <header className="header">Meme generator with CSS</header>
            <MemeEditor template= { this.props.template }/>
            <footer className="footer">footer</footer>
        </div>
      );
    }
  }
  
class MemeEditor extends React.Component {
  render() {
    return  (
      <div className="memeContainer">
        <img className="memeImage" src={this.props.template.image_url} >
        </img>
        { this.props.template.tags.map(tag => <MemeInsertion tag={tag} />) }

      </div>
    );
  }
}

class MemeInsertion extends React.Component {
  getStyle() {
    return {
      left: this.props.tag.position_x,
      top: this.props.tag.position_y,
    }
  }
  render() {
    return  (<p className="memeInsertion" style={ this.getStyle() }>{this.props.tag.text}</p>)
  }
}


let meme_template = {
  image_url:'https://imgflip.com/s/meme/Distracted-Boyfriend.jpg',
  tags: [
    { 
      position_x: '23%',
      position_y: '72%',
      text: 'usa'
    }, 
    { 
      position_x: '47%',
      position_y: '50%',
      text: 'corona virus'
    },
    { 
      position_x: '75%',
      position_y: '65%',
      text: 'china'
    }
  ]
}

ReactDOM.render(
    <MemeGenerator template={ meme_template }/>,
    document.getElementById('root')
  );
  