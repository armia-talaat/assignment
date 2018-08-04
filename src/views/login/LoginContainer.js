import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Login from './Login';
import { getUser, USER } from '../../store/actions/user';
import '../../shared/Utils.scss';

const mapStateToProps = state => ({
  userLoaded: state.user.loaded,
  responseType: state.user.type,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getUser }, dispatch);

class LoginContainer extends PureComponent {
  render() {
    const { userLoaded, responseType } = this.props;
    if (!userLoaded || responseType !== USER.GET_USER_DONE) {
      return <Login signIn={this.props.getUser} responseType={this.props.responseType} />;
    }
    return false;
  }
}
LoginContainer.propTypes = {
  responseType: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired,
  userLoaded: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
