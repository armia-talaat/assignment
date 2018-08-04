export const MENU = {
  GET_MENU: 'MENU_GET',
  GET_MENU_DONE: 'MENU_GET_DONE',
  GET_MENU_FAIL: 'MENU_GET_FAIL',
  CATEGORY: {
    DELETE: 'MENU_DELETE_CATEGORY',
    EDIT: 'MENU_EDIT_CATEGORY',
    ADD: {
      INIT: 'MENU_ADD_CATEGORY',
      SUCCESS: 'MENU_ADD_CATEGORY_SUCCESS',
      FAIL: {
        ID: 'MENU_ADD_CATEGORY_FAIL_ID',
        NAME: 'MENU_ADD_CATEGORY_FAIL_NAME',
        BOTH: 'MENU_ADD_CATEGORY_FAIL_BOTH'
      },
      REVERT: 'MENU_ADD_CATEGORY_REVERT'
    }
  }
};

export const getMenu = () => ({
  type: MENU.GET_MENU
});

export const getMenuDone = menu => ({
  type: MENU.GET_MENU_DONE,
  menu
});

export const getMenuFail = err => ({
  type: MENU.GET_MENU_FAIL,
  err
});

export const deleteStoredCategory = categoryId => ({
  type: MENU.CATEGORY.DELETE,
  categoryId
});

export const editStoredCategory = (oldCategoryId, categoryName, categoryId) => ({
  type: MENU.CATEGORY.EDIT,
  oldCategoryId,
  categoryName,
  categoryId
});
export const addNewCategory = (categoryName, categoryId) => ({
  type: MENU.CATEGORY.ADD.INIT,
  categoryName,
  categoryId
});
export const addCategoryStateRevert = () => ({
  type: MENU.CATEGORY.ADD.REVERT
});
