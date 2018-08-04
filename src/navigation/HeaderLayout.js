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
  user: state.user.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ logoutUser }, dispatch);
class HeaderLayout extends Component {
  render() {
    const { tabs, userLoaded, user, responseType } = this.props;
    return (
      <Router history={this.browserhistory}>
        <div className="layout--container">
          <Header
            itemsClass=""
            tabs={tabs}
            userLogged={userLoaded && responseType === USER.GET_USER_DONE}
            user={user}
            logoutUser={this.props.logoutUser}
          />
          <div className="content-container">{this.props.children}</div>
        </div>
      </Router>
    );
  }
}

HeaderLayout.propTypes = {
  responseType: PropTypes.string.isRequired,

  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,

  userLoaded: PropTypes.bool.isRequired,

  logoutUser: PropTypes.func.isRequired,

  children: PropTypes.node.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderLayout);
