import React from 'react';
import MemeEditor from './MemeEditor'
import { boyfriendTemplate } from './models/MemeTemplate'

export default class MemeGenerator extends React.Component {    
    render() {
        return (
          <div className="container">
            <header className="header">Meme generator with CSS</header>
            <MemeEditor template={ boyfriendTemplate }/>
            <footer className="footer">footer</footer>
          </div>
        );
      }
    }