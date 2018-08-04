import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  getMenu,
  deleteStoredCategory,
  editStoredCategory,
  addNewCategory,
  addCategoryStateRevert,
  editCategoryStateRevert,
  deleteStoredItem,
  editStoredItem,
  editItemStateRevert,
  addNewItem,
  addItemStateRevert,
} from '../../store/actions/menu';
import Menu from './Menu';

const mapStateToProps = state => ({
  userLoaded: state.user.loaded,
  userResponseType: state.user.type,
  user: state.user.user,
  menuItems: state.menu.menu,
  menuState: state.menu.type,
  addCategoryState: state.menu.addCategoryState,
  editCategoryState: state.menu.editCategoryState,
  addItemState: state.menu.addItemState,
  editItemState: state.menu.editItemState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMenu,
      deleteStoredCategory,
      editStoredCategory,
      addNewCategory,
      addCategoryStateRevert,
      editCategoryStateRevert,
      deleteStoredItem,
      editStoredItem,
      editItemStateRevert,
      addNewItem,
      addItemStateRevert,
    },
    dispatch,
  );

class MenuContainer extends Component {
  componentDidMount() {
    this.props.getMenu();
  }
  deleteCategory = categoryId => {
    if (this.props.user.name !== '' && this.props.user.type === 'admin') {
      this.props.deleteStoredCategory(categoryId);
    }
  };
  editCategory = (oldCategoryId, categoryName, categoryId) => {
    if (this.props.user.name !== '' && this.props.user.type === 'admin') {
      this.props.editStoredCategory(oldCategoryId, categoryName, categoryId);
    }
  };
  addCategory = (categoryName, categoryId) => {
    if (this.props.user.name !== '' && this.props.user.type === 'admin') {
      this.props.addNewCategory(categoryName, categoryId);
    }
  };
  deleteItem = itemId => {
    if (this.props.user.name !== '' && this.props.user.type === 'admin') {
      this.props.deleteStoredItem(itemId);
    }
  };
  editItem = (oldItemId, itemName, itemId, itemDescription, itemPrice) => {
    if (this.props.user.name !== '' && this.props.user.type === 'admin') {
      this.props.editStoredItem(oldItemId, itemName, itemId, itemDescription, itemPrice);
    }
  };
  addItem = (categoryId, itemName, itemId, itemDescription, itemPrice) => {
    if (this.props.user.name !== '' && this.props.user.type === 'admin') {
      this.props.addNewItem(categoryId, itemName, itemId, itemDescription, itemPrice);
    }
  };
  render() {
    return (
      <div className="full-view">
        <Menu
          menuItems={this.props.menuItems}
          menuState={this.props.menuState}
          user={this.props.user}
          userLoaded={this.props.userLoaded}
          userState={this.props.userResponseType}
          deleteCategory={this.deleteCategory}
          editCategory={this.editCategory}
          editCategoryState={this.props.editCategoryState}
          editCategoryStateRevert={this.props.editCategoryStateRevert}
          addCategory={this.addCategory}
          addCategoryState={this.props.addCategoryState}
          addCategoryStateRevert={this.props.addCategoryStateRevert}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          editItemState={this.props.editItemState}
          editItemStateRevert={this.props.editItemStateRevert}
          addItem={this.addItem}
          addItemState={this.props.addItemState}
          addItemStateRevert={this.props.addItemStateRevert}
        />
      </div>
    );
  }
}
MenuContainer.propTypes = {
  getMenu: PropTypes.func.isRequired,
  deleteStoredCategory: PropTypes.func.isRequired,
  editStoredCategory: PropTypes.func.isRequired,
  addNewCategory: PropTypes.func.isRequired,
  addCategoryStateRevert: PropTypes.func.isRequired,
  editCategoryStateRevert: PropTypes.func.isRequired,
  deleteStoredItem: PropTypes.func.isRequired,
  editStoredItem: PropTypes.func.isRequired,
  editItemStateRevert: PropTypes.func.isRequired,
  addNewItem: PropTypes.func.isRequired,
  addItemStateRevert: PropTypes.func.isRequired,

  userLoaded: PropTypes.bool.isRequired,

  userResponseType: PropTypes.string.isRequired,
  menuState: PropTypes.string.isRequired,
  addCategoryState: PropTypes.string.isRequired,
  editCategoryState: PropTypes.string.isRequired,
  addItemState: PropTypes.string.isRequired,
  editItemState: PropTypes.string.isRequired,

  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      items: PropTypes.array.isRequired,
    }),
  ).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
