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
      console.log(MENU.GET_MENU_DONE, payload.user);
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
      console.log(MENU.CATEGORY.EDIT.REVERT);
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

      console.log(payload.categoryName, payload.categoryId);
      if (checkSameItem) {
        console.log(MENU.CATEGORY.ADD.FAIL.BOTH);
        return {
          ...state,
          addCategoryState: MENU.CATEGORY.ADD.FAIL.BOTH,
        };
      } else if (checkDuplicateId) {
        console.log(MENU.CATEGORY.ADD.FAIL.ID);
        return {
          ...state,
          addCategoryState: MENU.CATEGORY.ADD.FAIL.ID,
        };
      } else if (checkDuplicateName) {
        console.log(MENU.CATEGORY.ADD.FAIL.NAME);
        return {
          ...state,
          addCategoryState: MENU.CATEGORY.ADD.FAIL.NAME,
        };
      }
      console.log(MENU.CATEGORY.ADD.SUCCESS, checkDuplicateId, checkDuplicateName, checkSameItem);
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
      console.log(MENU.CATEGORY.ADD.REVERT);
      return {
        ...state,
        addCategoryState: ' ',
      };
    }
    case MENU.ITEM.DELETE: {
      return {
        ...state,
        menu: state.menu.map(category => category.filter(item => item.id !== payload.itemId)),
      };
    }
    case MENU.ITEM.EDIT.INIT: {
      const checkSameItem = state.menu.map(category =>
        category.find(
          item =>
            item.id === payload.itemId &&
            item.name === payload.itemName &&
            payload.oldItemId !== payload.itemId,
        ),
      );
      const checkDuplicateId = state.menu.map(category =>
        category.find(item => item.id === payload.itemId && payload.oldItemId !== payload.itemId),
      );
      const checkDuplicateName = state.menu.map(category =>
        category.find(item => item.name === payload.itemName && payload.oldItemId !== item.id),
      );
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
        category.includes(payload.oldItemId),
      );
      const editedItemIndex = state.menu.categories[editedCategoryIndex].findIndex(
        item => item.id === payload.oldItemId,
      );
      console.log(editedCategoryIndex, editedItemIndex);
      return {
        ...state,
        editItemState: MENU.ITEM.EDIT.SUCCESS,
        menu: update(state.menu[editedCategoryIndex], {
          [editedItemIndex]: {
            id: { $set: payload.itemId },
            name: { $set: payload.itemName },
            description: { $set: payload.itemDescription },
            price: { $set: payload.itemPrice },
          },
        }),
      };
    }
    case MENU.ITEM.EDIT.REVERT: {
      console.log(MENU.ITEM.EDIT.REVERT);
      return {
        ...state,
        editItemState: ' ',
      };
    }

    default:
      return state;
  }
};
