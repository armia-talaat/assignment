import { MENU } from '../actions/menu';
import update from 'immutability-helper';

const initialState = {
  menu: [],
  type: '',
  loaded: false,
  addCategoryState: ''
};

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case MENU.GET_MENU: {
      return {
        ...state,
        type: MENU.GET_MENU,
        loaded: false
      };
    }
    case MENU.GET_MENU_DONE: {
      console.log(MENU.GET_MENU_DONE, payload.user);
      return {
        ...state,
        type: MENU.GET_MENU_DONE,
        loaded: true,
        menu: payload.menu
      };
    }
    case MENU.GET_MENU_FAIL: {
      return {
        ...state,
        type: MENU.GET_MENU_FAIL,
        loaded: true,
        menu: payload.menu
      };
    }
    case MENU.CATEGORY.DELETE: {
      return {
        ...state,
        menu: state.menu.filter(category => category.id !== payload.categoryId)
      };
    }
    case MENU.CATEGORY.EDIT: {
      let editedItemIndex = state.menu.findIndex(category => category.id === payload.oldCategoryId);
      return {
        ...state,
        menu: update(state.menu, {
          [editedItemIndex]: {
            name: { $set: payload.categoryName },
            id: { $set: payload.categoryId }
          }
        })
      };
    }
    case MENU.CATEGORY.ADD.INIT: {
      let checkSameItem = state.menu.find(
        category => category.id === payload.categoryId && category.name === payload.categoryName
      );
      let checkDuplicateId = state.menu.find(category => category.id === payload.categoryId);
      let checkDuplicateName = state.menu.find(category => category.name === payload.categoryName);

      console.log(payload.categoryName, payload.categoryId);
      if (checkSameItem) {
        console.log(MENU.CATEGORY.ADD.FAIL.BOTH);
        return {
          ...state,
          addCategoryState: MENU.CATEGORY.ADD.FAIL.BOTH
        };
      } else if (checkDuplicateId) {
        console.log(MENU.CATEGORY.ADD.FAIL.ID);
        return {
          ...state,
          addCategoryState: MENU.CATEGORY.ADD.FAIL.ID
        };
      } else if (checkDuplicateName) {
        console.log(MENU.CATEGORY.ADD.FAIL.NAME);
        return {
          ...state,
          addCategoryState: MENU.CATEGORY.ADD.FAIL.NAME
        };
      } else {
        console.log(MENU.CATEGORY.ADD.SUCCESS, checkDuplicateId, checkDuplicateName, checkSameItem);
        return {
          ...state,
          addCategoryState: MENU.CATEGORY.ADD.SUCCESS,
          menu: update(state.menu, {
            $push: [
              {
                id: payload.categoryId,
                name: payload.categoryName,
                items: []
              }
            ]
          })
        };
      }
    }
    case MENU.CATEGORY.ADD.REVERT: {
      console.log(MENU.CATEGORY.ADD.REVERT);
      return {
        ...state,
        addCategoryState: ' '
      };
    }

    default:
      return state;
  }
};
