import React from 'react';
import MemeEditor from './MemeEditor'

export default class MemeGenerator extends React.Component {
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