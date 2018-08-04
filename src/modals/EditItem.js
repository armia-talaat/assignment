import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button, Message, TextArea } from 'semantic-ui-react';
import { MENU } from '../store/actions/menu';

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: props.item.name,
      itemId: props.item.id,
      itemDescription: props.item.description,
      itemPrice: props.item.price,
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
      case MENU.ITEM.EDIT.SUCCESS: {
        this.setState({ showModel: false });
        return 'success';
      }
      case MENU.ITEM.EDIT.FAIL.NAME: {
        return 'error';
      }
      case MENU.ITEM.EDIT.FAIL.ID: {
        return 'error';
      }
      case MENU.ITEM.EDIT.FAIL.BOTH: {
        return 'error';
      }
      default:
        return '';
    }
  };
  getResponseMessage = responseType => {
    switch (responseType) {
      case MENU.ITEM.EDIT.FAIL.NAME: {
        return 'There is another Item with the same Name';
      }
      case MENU.ITEM.EDIT.FAIL.ID: {
        return 'There is another Item with the same Id';
      }
      case MENU.ITEM.EDIT.FAIL.BOTH: {
        return 'There is another Item with the same Data';
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
            positive
            onClick={() => {
              this.setState({ showModel: true });
            }}
          >
            Edit
          </Button>
        }
        closeIcon
        open={this.state.showModel}
        onOpen={this.props.revertState}
        onClose={this.close}
      >
        <Modal.Header>Edit Item</Modal.Header>
        <Modal.Content>
          <Form
            success={this.state.responseState === 'success'}
            error={this.state.responseState === 'error'}
          >
            <Form.Field required>
              <label>Item Name</label>
              <Input
                placeholder="Item Name"
                value={this.state.itemName}
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
                value={this.state.itemId}
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
                value={this.state.itemDescription}
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
                value={this.state.itemPrice}
                type="number"
                onChange={e => {
                  this.setState({
                    itemPrice: parseFloat(e.target.value),
                  });
                }}
              />
            </Form.Field>
            <Message success header="Edit Success" content={this.state.responseMessage} />
            <Message error header="Edit Failed" content={this.state.responseMessage} />
            <Button
              positive
              type="submit"
              onClick={() => {
                this.props.editItem(
                  this.props.item.id,
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
EditItem.propTypes = {
  userLoaded: PropTypes.bool,
};

export default EditItem;
