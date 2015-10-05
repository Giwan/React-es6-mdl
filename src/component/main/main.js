import React, {Component} from 'react';
import Header from '../header/Header.jsx';
import Content from '../content/Content.jsx';

export default class Main extends Component {
  render () {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <span style={{height: 100}} ></span>
        <Content />
      </div>
    );
  }
}
