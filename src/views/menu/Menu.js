import React, { Component, Fragment } from 'react';
import { List, Accordion } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Spinner from '../../components/spinner/Spinner';
import DeleteCategory from '../../modals/DeleteCategory';
import EditCategory from '../../modals/EditCategory';
import AddCategory from '../../modals/AddCategory';
import DeleteItem from '../../modals/DeleteItem';
import EditItem from '../../modals/EditItem';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: !props.userLoaded,
    };
  }
  componentDidMount() {}

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
                  {
                    <EditItem
                      item={item}
                      editItem={this.props.editItem}
                      responseType={this.props.editItemState}
                      revertState={this.props.editItemStateRevert}
                    />
                  }
                  <DeleteItem item={item} deleteItem={this.props.deleteItem} />
                </div>
              )}
            </Fragment>
          ),
        },
      }));
    }
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
  };
  render() {
    if (this.props.menuState === this.props.menuStates.GET_MENU_DONE) {
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
        <Spinner color="#a9f3d3" />
      </div>
    );
  }
}
Menu.propTypes = {
  userLoaded: PropTypes.bool,
};

export default Menu;
