import update from 'immutability-helper';
import { MENU } from '../actions/menu';

const initialState = {
  menu: [],
  type: '',
  loaded: false,
  addCategoryState: '',
  editCategoryState: '',
  addItemState: '',
  editItemState: '',
};

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case MENU.GET_MENU: {
      return {
        ...state,
        type: MENU.GET_MENU,
        loaded: false,
      };
    }
    case MENU.GET_MENU_DONE: {
      return {
        ...state,
        type: MENU.GET_MENU_DONE,
        loaded: true,
        menu: payload.menu,
      };
    }
    case MENU.GET_MENU_FAIL: {
      return {
        ...state,
        type: MENU.GET_MENU_FAIL,
        loaded: true,
        menu: payload.menu,
      };
    }
    case MENU.CATEGORY.DELETE: {
      return {
        ...state,
        menu: state.menu.filter(category => category.id !== payload.categoryId),
      };
    }
    case MENU.CATEGORY.EDIT.INIT: {
      const checkSameItem = state.menu.find(
        category =>
          category.id === payload.categoryId &&
          category.name === payload.categoryName &&
          payload.oldCategoryId !== payload.categoryId,
      );
      const checkDuplicateId = state.menu.find(
        category =>
          category.id === payload.categoryId && payload.oldCategoryId !== payload.categoryId,
      );
      const checkDuplicateName = state.menu.find(
        category => category.name === payload.categoryName && payload.oldCategoryId !== category.id,
      );
      if (checkSameItem) {
        return {
          ...state,
          editCategoryState: MENU.CATEGORY.EDIT.FAIL.BOTH,
        };
      } else if (checkDuplicateId) {
        return {
          ...state,
          editCategoryState: MENU.CATEGORY.EDIT.FAIL.ID,
        };
      } else if (checkDuplicateName) {
        return {
          ...state,
          editCategoryState: MENU.CATEGORY.EDIT.FAIL.NAME,
        };
      }
      const editedItemIndex = state.menu.findIndex(
        category => category.id === payload.oldCategoryId,
      );
      return {
        ...state,
        editCategoryState: MENU.CATEGORY.EDIT.SUCCESS,
        menu: update(state.menu, {
          [editedItemIndex]: {
            name: { $set: payload.categoryName },
            id: { $set: payload.categoryId },
          },
        }),
      };
    }
    case MENU.CATEGORY.EDIT.REVERT: {
      return {
        ...state,
        editCategoryState: ' ',
      };
    }
    case MENU.CATEGORY.ADD.INIT: {
      const checkSameItem = state.menu.find(
        category => category.id === payload.categoryId && category.name === payload.categoryName,
      );
      const checkDuplicateId = state.menu.find(category => category.id === payload.categoryId);
      const checkDuplicateName = state.menu.find(
        category => category.name === payload.categoryName,
      );

      if (checkSameItem) {
        return {
          ...state,
          addCategoryState: MENU.CATEGORY.ADD.FAIL.BOTH,
        };
      } else if (checkDuplicateId) {
        return {
          ...state,
          addCategoryState: MENU.CATEGORY.ADD.FAIL.ID,
        };
      } else if (checkDuplicateName) {
        return {
          ...state,
          addCategoryState: MENU.CATEGORY.ADD.FAIL.NAME,
        };
      }
      return {
        ...state,
        addCategoryState: MENU.CATEGORY.ADD.SUCCESS,
        menu: update(state.menu, {
          $push: [
            {
              id: payload.categoryId,
              name: payload.categoryName,
              items: [],
            },
          ],
        }),
      };
    }
    case MENU.CATEGORY.ADD.REVERT: {
      return {
        ...state,
        addCategoryState: ' ',
      };
    }
    case MENU.ITEM.DELETE: {
      const deleteCategoryIndex = state.menu.findIndex(category =>
        category.items.find(item => item.id === payload.itemId),
      );
      const deleteItemIndex = state.menu[deleteCategoryIndex].items.findIndex(
        item => item.id === payload.itemId,
      );
      return {
        ...state,
        menu: update(state.menu, {
          [deleteCategoryIndex]: {
            items: {
              $splice: [[deleteItemIndex, 1]],
            },
          },
        }),
      };
    }
    case MENU.ITEM.EDIT.INIT: {
      const checkSameItem =
        payload.oldItemId !== payload.itemId &&
        state.menu
          .map(category =>
            category.items.find(
              item => item.id === payload.itemId && item.name === payload.itemName,
            ),
          )
          .filter(object => object !== undefined).length > 0;
      const checkDuplicateId =
        payload.oldItemId !== payload.itemId &&
        state.menu
          .map(category => category.items.find(item => item.id === payload.itemId))
          .filter(object => object !== undefined).length > 0;
      const checkDuplicateName =
        state.menu
          .map(category =>
            category.items.find(
              item => item.name === payload.itemName && payload.oldItemId !== item.id,
            ),
          )
          .filter(object => object !== undefined).length > 0;
      if (checkSameItem) {
        return {
          ...state,
          editItemState: MENU.ITEM.EDIT.FAIL.BOTH,
        };
      } else if (checkDuplicateId) {
        return {
          ...state,
          editItemState: MENU.ITEM.EDIT.FAIL.ID,
        };
      } else if (checkDuplicateName) {
        return {
          ...state,
          editItemState: MENU.ITEM.EDIT.FAIL.NAME,
        };
      }
      const editedCategoryIndex = state.menu.findIndex(category =>
        category.items.find(item => item.id === payload.oldItemId),
      );
      const editedItemIndex = state.menu[editedCategoryIndex].items.findIndex(
        item => item.id === payload.oldItemId,
      );
      return {
        ...state,
        editItemState: MENU.ITEM.EDIT.SUCCESS,
        menu: update(state.menu, {
          [editedCategoryIndex]: {
            items: {
              [editedItemIndex]: {
                id: { $set: payload.itemId },
                name: { $set: payload.itemName },
                description: { $set: payload.itemDescription },
                price: { $set: payload.itemPrice },
              },
            },
          },
        }),
      };
    }

    case MENU.ITEM.ADD.INIT: {
      const checkSameItem =
        state.menu
          .map(category =>
            category.items.find(
              item => item.id === payload.itemId && item.name === payload.itemName,
            ),
          )
          .filter(object => object !== undefined).length > 0;
      const checkDuplicateId =
        state.menu
          .map(category =>
            category.items.find(
              item => item.id === payload.itemId && item.name !== payload.itemName,
            ),
          )
          .filter(object => object !== undefined).length > 0;
      const checkDuplicateName =
        state.menu
          .map(category =>
            category.items.find(
              item => item.name === payload.itemName && payload.itemId !== item.id,
            ),
          )
          .filter(object => object !== undefined).length > 0;
      if (checkSameItem) {
        return {
          ...state,
          addItemState: MENU.ITEM.ADD.FAIL.BOTH,
        };
      } else if (checkDuplicateId) {
        return {
          ...state,
          addItemState: MENU.ITEM.ADD.FAIL.ID,
        };
      } else if (checkDuplicateName) {
        return {
          ...state,
          addItemState: MENU.ITEM.ADD.FAIL.NAME,
        };
      }
      const editedCategoryIndex = state.menu.findIndex(
        category => category.id === payload.categoryId,
      );
      return {
        ...state,
        addItemState: MENU.ITEM.ADD.SUCCESS,
        menu: update(state.menu, {
          [editedCategoryIndex]: {
            items: {
              $push: [
                {
                  id: payload.itemId,
                  name: payload.itemName,
                  description: payload.itemDescription,
                  price: payload.itemPrice,
                },
              ],
            },
          },
        }),
      };
    }

    case MENU.ITEM.EDIT.REVERT: {
      return {
        ...state,
        editItemState: ' ',
      };
    }

    case MENU.ITEM.ADD.REVERT: {
      return {
        ...state,
        addItemState: ' ',
      };
    }

    default:
      return state;
  }
};
