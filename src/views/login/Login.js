import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'semantic-ui-react';
import '../../shared/Utils.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: !props.userLoaded,
      username: '',
      password: ''
    };
  }
  componentDidMount() {}
  render() {
    if (this.state.isLoading || this.props.userLoaded) {
      return (
        <div className="center center--horizontal center--vertical full-view">
          <Form>
            <Form.Field required>
              <label>User Name</label>
              <Input
                placeholder="User Name"
                onChange={val => {
                  this.setState({
                    username: val
                  });
                }}
              />
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <Input
                placeholder="Password"
                type="password"
                onChange={val => {
                  this.setState({
                    password: val
                  });
                }}
              />
            </Form.Field>
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
      );
    }
    return <div />;
  }
}
Login.propTypes = {
  userLoaded: PropTypes.bool
};

export default Login;
