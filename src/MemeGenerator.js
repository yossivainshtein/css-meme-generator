import React from 'react';
import MemeEditor from './MemeEditor'
import memes from './meme_templates/templates'

export default class MemeGenerator extends React.Component {    
    constructor(props) {
      super(props)
      this.state = { 
        'template': memes['boyfriend']
      }
    }

    render() {
        return (
          <div className="container">
            <header className="header">Meme generator with CSS</header>
            <MemeEditor template={ this.state.template }/>
            <footer className="footer">footer</footer>
          </div>
        );
      }
    }