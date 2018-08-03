import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Login from './Login';
import { getUser } from '../../store/actions/user';
import '../../shared/Utils.scss';

const mapStateToProps = state => ({
  userLoaded: state.user.loaded
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
    if (this.state.isLoading) {
      return <Login signIn={this.props.getUser} />;
    }
  }
}
LoginContainer.propTypes = {
  userLoaded: PropTypes.bool,
  getUser: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
