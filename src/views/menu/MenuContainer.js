import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { USER } from '../../store/actions/user';
import {
  MENU,
  getMenu,
  deleteStoredCategory,
  editStoredCategory,
  addNewCategory,
  addCategoryStateRevert,
  editCategoryStateRevert,
  deleteStoredItem,
  editStoredItem,
  editItemStateRevert,
} from '../../store/actions/menu';
import Menu from './Menu';

const mapStateToProps = state => ({
  userLoaded: state.user.loaded,
  responseType: state.user.type,
  user: state.user.user,
  menuItems: state.menu.menu,
  menuState: state.menu.type,
  addCategoryState: state.menu.addCategoryState,
  editCategoryState: state.menu.editCategoryState,
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
    },
    dispatch,
  );

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: !props.userLoaded,
    };
  }
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
  render() {
    return (
      <div className="full-view">
        <Menu
          menuItems={this.props.menuItems}
          menuState={this.props.menuState}
          menuStates={MENU}
          user={this.props.user}
          userLoaded={this.props.userLoaded}
          userState={this.props.responseType}
          userStates={USER}
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
        />
      </div>
    );
  }
}
MenuContainer.propTypes = {
  userLoaded: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
