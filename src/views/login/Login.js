import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button, Message } from 'semantic-ui-react';
import '../../shared/Utils.scss';
import { USER } from '../../store/actions/user';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: !props.userLoaded,
      responseType: props.responseType,
      username: '',
      password: ''
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.responseType !== nextProps.responseType) {
      return {
        responseType: nextProps.responseType
      };
    }
    return null;
  }
  getResponseType = responseType => {
    switch (responseType) {
      case USER.GET_USER_DONE: {
        return 'success';
      }
      case USER.GET_USER_NOT_FOUND: {
        return 'error';
      }
      case USER.GET_USER_FAIL: {
        return 'error';
      }
      default:
        return '';
    }
  };
  getResponseMessage = responseType => {
    switch (responseType) {
      case USER.GET_USER_DONE: {
        return 'User logged on Successfully';
      }
      case USER.GET_USER_NOT_FOUND: {
        return 'User not found';
      }
      case USER.GET_USER_FAIL: {
        return 'Something went wrong';
      }
      default:
        return '';
    }
  };
  render() {
    return (
      <Modal
        trigger={
          <Button primary size="small" color="green" className="sign-in--btn">
            Log in
          </Button>
        }
        closeIcon
      >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <div className="center center--horizontal center--vertical">
            <Form
              success={this.getResponseType(this.state.responseType) === 'success'}
              error={this.getResponseType(this.state.responseType) === 'error'}
            >
              <Form.Field required>
                <label>User Name</label>
                <Input
                  placeholder="User Name"
                  onChange={e => {
                    this.setState({
                      username: e.target.value
                    });
                  }}
                />
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={e => {
                    this.setState({
                      password: e.target.value
                    });
                  }}
                />
              </Form.Field>
              <Message
                success
                header="Login Success"
                content={this.getResponseMessage(this.state.responseType)}
              />
              <Message
                error
                header="Login Failed"
                content={this.getResponseMessage(this.state.responseType)}
              />
              <Button
                type="submit"
                onClick={() => {
                  this.props.signIn(this.state.username, this.state.password);
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}
Login.propTypes = {
  userLoaded: PropTypes.bool
};

export default Login;
