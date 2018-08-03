import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header/Header';
import './HeaderLayout.scss';

class HeaderLayout extends Component {
  render() {
    const { title, tabs, memberName } = this.props;
    return (
      <Router history={this.browserhistory}>
        <div className="layout--container">
          <Header
            itemsClass=""
            title={title}
            tabs={tabs}
            signOut={this.props.signOut}
            signIn={this.props.signIn}
            memberName={memberName}
            homeUrl={this.props.homeUrl}
          />
          <div className="content-container">{this.props.children}</div>
        </div>
      </Router>
    );
  }
}

HeaderLayout.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      enable: PropTypes.bool
    })
  ),
  title: PropTypes.string,
  memberName: PropTypes.string,
  signOut: PropTypes.func,
  signIn: PropTypes.func,
  children: PropTypes.any.isRequired,
  homeUrl: PropTypes.string.isRequired
};

export default HeaderLayout;
