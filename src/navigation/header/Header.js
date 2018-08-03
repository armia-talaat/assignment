import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'semantic-ui-react';
import './Header.scss';
import '../../views/login/LoginContainer';
import LoginContainer from '../../views/login/LoginContainer';

function Header(props) {
  const { user } = props;
  let headerItems;
  let memberDetails;

  if (props.title) {
    headerItems = <h1 className="page-title">{props.title}</h1>;
  } else if (props.tabs) {
    headerItems = props.tabs.map((item, index) => (
      <NavLink className="tab" activeClassName="tab--active" href={item.url} to={item.url} key={index}>
        <h2 className="text">{item.title}</h2>
      </NavLink>
    ));
  }

  if (props.user && props.userLogged) {
    memberDetails = (
      <Fragment>
        <img src="./assets/default-user.png" className="member-img" alt="member" id="member-img" />
        <h3 className="member-name">{user.name}</h3>
        <div className="divider" />
        <Button primary size="big" color="red" className="sign-out--btn" onClick={props.signOut}>
          Log out
        </Button>
      </Fragment>
    );
  } else {
    memberDetails = (
      <Fragment>
        <img src="./assets/default-user.png" className="member-img" alt="member" id="member-img" />
        <h3 className="member-name">Guest</h3>
        <div className="divider" />
        <Modal
          trigger={
            <Button primary size="small" color="green" className="sign-in--btn" onClick={props.signIn}>
              Log in
            </Button>
          }
        >
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
            <LoginContainer />
          </Modal.Content>
        </Modal>
      </Fragment>
    );
  }

  return (
    <header>
      <div className="header-tabs--container">{headerItems}</div>
      <div className="member-info--container">{memberDetails}</div>
    </header>
  );
}

Header.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    })
  ),
  homeUrl: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.object,
  userLogged: PropTypes.bool,
  signOut: PropTypes.func
};

Header.defaultProps = {
  user: { user: '' }
};

export default Header;
