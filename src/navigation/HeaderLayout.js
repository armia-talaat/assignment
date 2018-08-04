import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './header/Header';
import './HeaderLayout.scss';
import { USER, logoutUser } from '../store/actions/user';

const mapStateToProps = state => ({
  userLoaded: state.user.loaded,
  responseType: state.user.type,
  user: state.user.user
});

const mapDispatchToProps = dispatch => bindActionCreators({ logoutUser }, dispatch);
class HeaderLayout extends Component {
  render() {
    const { title, tabs, userLoaded, user, responseType } = this.props;
    return (
      <Router history={this.browserhistory}>
        <div className="layout--container">
          <Header
            itemsClass=""
            title={title}
            tabs={tabs}
            userLogged={userLoaded && responseType === USER.GET_USER_DONE}
            user={user}
            logoutUser={this.props.logoutUser}
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
  user: PropTypes.object,
  signOut: PropTypes.func,
  signIn: PropTypes.func,
  children: PropTypes.any.isRequired,
  homeUrl: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLayout);
