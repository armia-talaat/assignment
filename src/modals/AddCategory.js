import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button, Message } from 'semantic-ui-react';
import { MENU } from '../store/actions/menu';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      categoryId: '',
      responseState: this.getResponseState(props.responseType),
      responseMessage: this.getResponseMessage(props.responseType),
      showModel: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.responseType !== this.props.responseType) {
      this.setState({
        responseState: this.getResponseState(this.props.responseType),
        responseMessage: this.getResponseMessage(this.props.responseType)
      });
    }
  }
  close = () => {
    this.setState({ showModel: false });
  };
  getResponseState = responseType => {
    switch (responseType) {
      case MENU.CATEGORY.ADD.SUCCESS: {
        this.setState({ showModel: false });
        return 'success';
      }
      case MENU.CATEGORY.ADD.FAIL.NAME: {
        return 'error';
      }
      case MENU.CATEGORY.ADD.FAIL.ID: {
        return 'error';
      }
      case MENU.CATEGORY.ADD.FAIL.BOTH: {
        return 'error';
      }
      default:
        return '';
    }
  };
  getResponseMessage = responseType => {
    switch (responseType) {
      case MENU.CATEGORY.ADD.FAIL.NAME: {
        return 'Category Name is duplicate';
      }
      case MENU.CATEGORY.ADD.FAIL.ID: {
        return 'Category ID is duplicate';
      }
      case MENU.CATEGORY.ADD.FAIL.BOTH: {
        return 'Same Category is already stored';
      }
      default:
        return '';
    }
  };
  render() {
    return (
      <Modal
        ref={modal => {
          this.addCategory = modal;
        }}
        trigger={
          <Button
            className="block hr-margin vr-auto-margin"
            positive
            onClick={() => {
              this.setState({ showModel: true });
            }}
          >
            Add New Category
          </Button>
        }
        closeIcon
        open={this.state.showModel}
        onOpen={this.props.revertState}
        onClose={this.close}
      >
        <Modal.Header>Add Category</Modal.Header>
        <Modal.Content>
          <Form success={this.state.responseState === 'success'} error={this.state.responseState === 'error'}>
            <Form.Field required>
              <label>Category Name</label>
              <Input
                placeholder="Category Name"
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
                type="number"
                onChange={e => {
                  this.setState({
                    categoryId: parseFloat(e.target.value)
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
                this.props.addCategory(this.state.categoryName, this.state.categoryId);
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
AddCategory.propTypes = {
  userLoaded: PropTypes.bool
};

export default AddCategory;
