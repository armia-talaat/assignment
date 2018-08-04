import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button, Message, TextArea } from 'semantic-ui-react';
import { MENU } from '../store/actions/menu';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemId: '',
      itemDescription: '',
      itemPrice: '',
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
      case MENU.ITEM.ADD.SUCCESS: {
        this.setState({ showModel: false });
        return 'success';
      }
      case MENU.ITEM.ADD.FAIL.NAME: {
        return 'error';
      }
      case MENU.ITEM.ADD.FAIL.ID: {
        return 'error';
      }
      case MENU.ITEM.ADD.FAIL.BOTH: {
        return 'error';
      }
      default:
        return '';
    }
  };
  getResponseMessage = responseType => {
    switch (responseType) {
      case MENU.ITEM.ADD.FAIL.NAME: {
        return 'Item Name is duplicate';
      }
      case MENU.ITEM.ADD.FAIL.ID: {
        return 'Item ID is duplicate';
      }
      case MENU.ITEM.ADD.FAIL.BOTH: {
        return 'Same Item is already stored';
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
            className="block"
            positive
            onClick={() => {
              this.setState({ showModel: true });
            }}
          >
            Add New Item
          </Button>
        }
        closeIcon
        open={this.state.showModel}
        onOpen={this.props.revertState}
        onClose={this.close}
      >
        <Modal.Header>Add Item</Modal.Header>
        <Modal.Content>
          <Form
            success={this.state.responseState === 'success'}
            error={this.state.responseState === 'error'}
          >
            <Form.Field required>
              <label>Item Name</label>
              <Input
                placeholder="Item Name"
                onChange={e => {
                  this.setState({
                    itemName: e.target.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field required>
              <label>Item Id</label>
              <Input
                placeholder="Item Id"
                type="number"
                onChange={e => {
                  this.setState({
                    itemId: parseFloat(e.target.value),
                  });
                }}
              />
            </Form.Field>
            <Form.Field required>
              <label>Item Description</label>
              <TextArea
                placeholder="Item Description"
                type="text"
                onChange={e => {
                  this.setState({
                    itemDescription: e.target.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field required>
              <label>Item Price</label>
              <Input
                placeholder="Item Price"
                type="number"
                onChange={e => {
                  this.setState({
                    itemPrice: parseFloat(e.target.value),
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
                this.props.addItem(
                  this.props.categoryId,
                  this.state.itemName,
                  this.state.itemId,
                  this.state.itemDescription,
                  this.state.itemPrice,
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
AddItem.propTypes = {
  responseType: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  revertState: PropTypes.func.isRequired,
};

export default AddItem;
