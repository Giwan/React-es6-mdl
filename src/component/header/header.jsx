import React, {Component} from 'react';

export default class Header extends Component {
  render () {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">

            <span className="mdl-layout-title">Title</span>

            <div className="mdl-layout-spacer"></div>

            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="">Giwan Persaud <sup>100</sup></a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Categories</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">World</a>
            <a className="mdl-navigation__link" href="">Business</a>
            <a className="mdl-navigation__link" href="">Sports</a>
            <a className="mdl-navigation__link" href="">Science</a>
          </nav>
        </div>
        </div>
    );
  }
}
