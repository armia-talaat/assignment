import { MENU } from '../actions/menu';
import update from 'immutability-helper';

const initialState = {
  menu: [],
  type: '',
  loaded: false
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
    case MENU.DELETE_CATEGORY: {
      return {
        ...state,
        menu: state.menu.filter(category => category.id !== payload.categoryId)
      };
    }
    case MENU.EDIT_CATEGORY: {
      return {
        ...state,
        menu: update(state.menu, {
          [payload.oldCategoryId]: {
            name: { $set: payload.categoryName },
            id: { $set: payload.categoryName }
          }
        })
      };
    }

    default:
      return state;
  }
};
