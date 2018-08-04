import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Modal, Button, Icon } from 'semantic-ui-react';
import './Header.scss';
import LoginContainer from '../../views/login/LoginContainer';

function Header(props) {
  const { user } = props;
  let headerItems;
  let memberDetails;

  if (props.tabs) {
    headerItems = props.tabs.map((item, index) => (
      <NavLink
        className="tab"
        activeClassName="tab--active"
        href={item.url}
        to={item.url}
        key={`nav-${index}`}
      >
        <h2 className="text">{item.title}</h2>
      </NavLink>
    ));
  }
  // TODO: Seperate Logout Modal and Login to Modals
  if (props.user && props.userLogged) {
    memberDetails = (
      <Fragment>
        <img src="./assets/default-user.png" className="member-img" alt="member" id="member-img" />
        <h3 className="member-name">{user.name}</h3>
        <div className="divider" />

        <Modal
          trigger={
            <Button primary size="big" color="red" className="sign-out--btn">
              Log out
            </Button>
          }
          closeIcon
        >
          <Modal.Header>Logout</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to logout?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={props.logoutUser}>
              <Icon name="checkmark" /> Logout
            </Button>
          </Modal.Actions>
        </Modal>
      </Fragment>
    );
  } else {
    memberDetails = (
      <Fragment>
        <img src="./assets/default-user.png" className="member-img" alt="member" id="member-img" />
        <h3 className="member-name">Guest</h3>
        <div className="divider" />
        <LoginContainer />
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
      url: PropTypes.string,
    }),
  ).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    id: PropTypes.number,
  }),
  userLogged: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: { user: '' },
};

export default Header;
