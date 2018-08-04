import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button, Message } from 'semantic-ui-react';
import { MENU } from '../store/actions/menu';

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: props.category.name,
      categoryId: props.category.id,
      responseState: this.getResponseState(props.responseType),
      responseMessage: this.getResponseMessage(props.responseType),
      showModel: false,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.responseType !== this.props.responseType) {
      this.setState({
        responseState: this.getResponseState(this.props.responseType),
        responseMessage: this.getResponseMessage(this.props.responseType),
      });
    }
  }

  getResponseState = responseType => {
    switch (responseType) {
      case MENU.CATEGORY.EDIT.SUCCESS: {
        this.setState({ showModel: false });
        return 'success';
      }
      case MENU.CATEGORY.EDIT.FAIL.NAME: {
        return 'error';
      }
      case MENU.CATEGORY.EDIT.FAIL.ID: {
        return 'error';
      }
      case MENU.CATEGORY.EDIT.FAIL.BOTH: {
        return 'error';
      }
      default:
        return '';
    }
  };
  getResponseMessage = responseType => {
    switch (responseType) {
      case MENU.CATEGORY.EDIT.FAIL.NAME: {
        return 'There is another Category with the same Name';
      }
      case MENU.CATEGORY.EDIT.FAIL.ID: {
        return 'There is another Category with the same Id';
      }
      case MENU.CATEGORY.EDIT.FAIL.BOTH: {
        return 'There is another Category with the same Data';
      }
      default:
        return '';
    }
  };
  close = () => {
    this.setState({ showModel: false });
  };
  render() {
    return (
      <Modal
        trigger={
          <Button
            color="yellow"
            className="block"
            onClick={() => {
              this.setState({ showModel: true });
            }}
          >
            Edit Category
          </Button>
        }
        closeIcon
        open={this.state.showModel}
        onOpen={this.props.revertState}
        onClose={this.close}
      >
        <Modal.Header>Edit Category</Modal.Header>
        <Modal.Content>
          <Form
            success={this.state.responseState === 'success'}
            error={this.state.responseState === 'error'}
          >
            <Form.Field required>
              <label>Category Name</label>
              <Input
                placeholder="Category Name"
                value={this.state.categoryName}
                onChange={e => {
                  this.setState({
                    categoryName: e.target.value,
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
                    categoryId: parseFloat(e.target.value),
                  });
                }}
              />
            </Form.Field>
            <Message success header="Add Success" content={this.state.responseMessage} />
            <Message error header="Add Failed" content={this.state.responseMessage} />
            <Button
              positive
              type="submit"
              onClick={() => {
                this.props.editCategory(
                  this.props.category.id,
                  this.state.categoryName,
                  this.state.categoryId,
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
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  editCategory: PropTypes.func.isRequired,
  responseType: PropTypes.string.isRequired,
};

export default EditCategory;
