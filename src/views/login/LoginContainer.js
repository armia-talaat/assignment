import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Login from './Login';
import { getUser, USER } from '../../store/actions/user';
import '../../shared/Utils.scss';

const mapStateToProps = state => ({
  userLoaded: state.user.loaded,
  responseType: state.user.type
});

const mapDispatchToProps = dispatch => bindActionCreators({ getUser }, dispatch);

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: !props.userLoaded
    };
  }
  componentDidMount() {}
  render() {
    if (!this.props.userLoaded || this.props.responseType !== USER.GET_USER_DONE) {
      return <Login signIn={this.props.getUser} responseType={this.props.responseType} />;
    }
  }
}
LoginContainer.propTypes = {
  userLoaded: PropTypes.bool,
  responseType: PropTypes.string,
  getUser: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
