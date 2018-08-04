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
  addCategoryStateRevert
} from '../../store/actions/menu';
import Menu from './Menu';

const mapStateToProps = state => ({
  userLoaded: state.user.loaded,
  responseType: state.user.type,
  user: state.user.user,
  menuItems: state.menu.menu,
  menuState: state.menu.type,
  addCategoryState: state.menu.addCategoryState
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getMenu, deleteStoredCategory, editStoredCategory, addNewCategory, addCategoryStateRevert },
    dispatch
  );

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: !props.userLoaded
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
  editCategory = (oldCategoryId, categoryName, categoryID) => {
    if (this.props.user.name !== '' && this.props.user.type === 'admin') {
      this.props.editStoredCategory(oldCategoryId, categoryName, categoryID);
    }
  };
  addCategory = (categoryName, categoryID) => {
    if (this.props.user.name !== '' && this.props.user.type === 'admin') {
      this.props.addNewCategory(categoryName, categoryID);
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
          addCategory={this.addCategory}
          addCategoryState={this.props.addCategoryState}
          addCategoryStateRevert={this.props.addCategoryStateRevert}
        />
      </div>
    );
  }
}
MenuContainer.propTypes = {
  userLoaded: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
