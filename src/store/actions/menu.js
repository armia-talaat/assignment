export const MENU = {
  GET_MENU: 'MENU_GET',
  GET_MENU_DONE: 'MENU_GET_DONE',
  GET_MENU_FAIL: 'MENU_GET_FAIL',
  DELETE_CATEGORY: 'MENU_DELETE_CATEGORY',
  EDIT_CATEGORY: 'MENU_EDIT_CATEGORY'
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
  type: MENU.DELETE_CATEGORY,
  categoryId
});

export const editStoredCategory = (oldCategoryId, categoryName, categoryID) => ({
  type: MENU.EDIT_CATEGORY,
  oldCategoryId,
  categoryName,
  categoryID
});
