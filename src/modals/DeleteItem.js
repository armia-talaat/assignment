import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Icon } from 'semantic-ui-react';

const DeleteItem = props => (
  <Modal trigger={<Button negative>Delete Item</Button>} closeIcon>
    <Modal.Header>Delete Item</Modal.Header>
    <Modal.Content>
      <p>Are you sure you want to delete this Item?</p>
      <p>{props.item.name}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        negative
        onClick={() => {
          props.deleteItem(props.item.id);
        }}
      >
        <Icon name="delete" /> Delete Item
      </Button>
    </Modal.Actions>
  </Modal>
);
DeleteItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    price: PropTypes.number,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default DeleteItem;
