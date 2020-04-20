import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MemeGenerator from './MemeGenerator'

let meme_template = {
  image_url:'https://imgflip.com/s/meme/Distracted-Boyfriend.jpg',
  tags: [
    { 
      style: {
        left: '23%',
        top: '72%'
      },
      text: 'usa'
    }, 
    { 
      style: {
        left: '47%',
        top: '50%'
      }, 
      text: 'corona virus'
    },
    { 
      style: {
        left : '75%',
        top: '65%'
      },
      text: 'china'
    }
  ]
}

ReactDOM.render(
    <MemeGenerator template={ meme_template }/>,
    document.getElementById('root')
  );
  