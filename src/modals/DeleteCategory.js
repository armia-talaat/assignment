import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Icon } from 'semantic-ui-react';

const DeleteCategory = props => (
  <Modal
    trigger={
      <Button negative className="block">
        Delete Category
      </Button>
    }
    closeIcon
  >
    <Modal.Header>Delete Category</Modal.Header>
    <Modal.Content>
      <p>Are you sure you want to delete this category?</p>
      <p>{props.category.name}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        negative
        onClick={() => {
          props.deleteCategory(props.category.id);
        }}
      >
        <Icon name="delete" /> Delete Category
      </Button>
    </Modal.Actions>
  </Modal>
);
DeleteCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  deleteCategory: PropTypes.func.isRequired,
};

export default DeleteCategory;
