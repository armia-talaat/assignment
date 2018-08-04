import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button } from 'semantic-ui-react';

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: props.category.name,
      categoryId: props.category.id
    };
  }

  render() {
    return (
      <Modal trigger={<Button positive>Edit</Button>} closeIcon onClose={this.props.revertState}>
        <Modal.Header>Edit Category</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field required>
              <label>Category Name</label>
              <Input
                placeholder="Category Name"
                value={this.state.categoryName}
                onChange={e => {
                  this.setState({
                    categoryName: e.target.value
                  });
                }}
              />
            </Form.Field>
            <Form.Field required>
              <label>Category Id</label>
              <Input
                placeholder="Category Id"
                value={this.state.categoryId}
                type="number"
                onChange={e => {
                  this.setState({
                    categoryId: parseFloat(e.target.value)
                  });
                }}
              />
            </Form.Field>
            <Button
              positive
              type="submit"
              onClick={() => {
                this.props.editCategory(
                  this.props.category.id,
                  this.state.categoryName,
                  this.state.categoryId
                );
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}
EditCategory.propTypes = {
  userLoaded: PropTypes.bool
};

export default EditCategory;
