import React, { Component, Fragment } from 'react';
import { List, Accordion, Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DeleteCategory from '../../modals/DeleteCategory';
import EditCategory from '../../modals/EditCategory';
import AddCategory from '../../modals/AddCategory';
import DeleteItem from '../../modals/DeleteItem';
import EditItem from '../../modals/EditItem';
import AddItem from '../../modals/AddItem';
import { MENU } from '../../store/actions/menu';

class Menu extends Component {
  setItemStructure = items => {
    if (items.length !== 0) {
      return items.map(item => ({
        key: item.id,
        title: item.name,
        content: {
          content: (
            <Fragment>
              <List>
                <List.Item icon="food" content={item.name} />
                <List.Item icon="info circle" content={item.description} />
                <List.Item icon="dollar sign" content={item.price} />
              </List>
              {this.props.user.type === 'admin' && (
                <div className="center--horizontal">
                  <EditItem
                    item={item}
                    editItem={this.props.editItem}
                    responseType={this.props.editItemState}
                    revertState={this.props.editItemStateRevert}
                  />
                  <DeleteItem item={item} deleteItem={this.props.deleteItem} />
                </div>
              )}
            </Fragment>
          ),
        },
      }));
    }
    return [];
  };
  setCategoryStructure = categories => {
    if (categories.length !== 0) {
      return categories.map(category => ({
        key: category.id,
        title: category.name,
        content: {
          content: (
            <Fragment>
              {this.props.user.type === 'admin' && (
                <div className="center--horizontal">
                  <AddItem
                    categoryId={category.id}
                    addItem={this.props.addItem}
                    responseType={this.props.addItemState}
                    revertState={this.props.addItemStateRevert}
                  />
                  <EditCategory
                    category={category}
                    editCategory={this.props.editCategory}
                    responseType={this.props.editCategoryState}
                    revertState={this.props.editCategoryStateRevert}
                  />
                  <DeleteCategory category={category} deleteCategory={this.props.deleteCategory} />
                </div>
              )}
              <Accordion.Accordion panels={this.setItemStructure(category.items)} />
            </Fragment>
          ),
        },
      }));
    }
    return [];
  };
  render() {
    if (this.props.menuState === MENU.GET_MENU_DONE) {
      return (
        <Fragment>
          {this.props.user.type === 'admin' && (
            <AddCategory
              addCategory={this.props.addCategory}
              responseType={this.props.addCategoryState}
              revertState={this.props.addCategoryStateRevert}
            />
          )}
          <Accordion
            className="vr-auto-margin hr-margin"
            panels={this.setCategoryStructure(this.props.menuItems)}
            styled
          />
        </Fragment>
      );
    }
    return (
      <div className="center center--horizontal center--vertical full-view">
        <Dimmer active>
          <Loader size="big">Loading</Loader>
        </Dimmer>
      </div>
    );
  }
}
Menu.propTypes = {
  deleteCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
  addCategoryStateRevert: PropTypes.func.isRequired,
  editCategoryStateRevert: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  editItemStateRevert: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  addItemStateRevert: PropTypes.func.isRequired,

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
      type: PropTypes.string,
      items: PropTypes.array.isRequired,
    }),
  ).isRequired,
};

export default Menu;
