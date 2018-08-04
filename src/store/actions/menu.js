export const MENU = {
  GET_MENU: 'MENU_GET',
  GET_MENU_DONE: 'MENU_GET_DONE',
  GET_MENU_FAIL: 'MENU_GET_FAIL',
  CATEGORY: {
    DELETE: 'MENU_DELETE_CATEGORY',
    EDIT: {
      INIT: 'MENU_EDIT_CATEGORY',
      SUCCESS: 'MENU_EDIT_CATEGORY_SUCCESS',
      FAIL: {
        ID: 'MENU_EDIT_CATEGORY_FAIL_ID',
        NAME: 'MENU_EDIT_CATEGORY_FAIL_NAME',
        BOTH: 'MENU_EDIT_CATEGORY_FAIL_BOTH',
      },
      REVERT: 'MENU_EDIT_CATEGORY_REVERT',
    },
    ADD: {
      INIT: 'MENU_ADD_CATEGORY',
      SUCCESS: 'MENU_ADD_CATEGORY_SUCCESS',
      FAIL: {
        ID: 'MENU_ADD_CATEGORY_FAIL_ID',
        NAME: 'MENU_ADD_CATEGORY_FAIL_NAME',
        BOTH: 'MENU_ADD_CATEGORY_FAIL_BOTH',
      },
      REVERT: 'MENU_ADD_CATEGORY_REVERT',
    },
  },
  ITEM: {
    DELETE: 'MENU_DELETE_ITEM',
    EDIT: {
      INIT: 'MENU_EDIT_ITEM',
      SUCCESS: 'MENU_EDIT_ITEM_SUCCESS',
      FAIL: {
        ID: 'MENU_EDIT_ITEM_FAIL_ID',
        NAME: 'MENU_EDIT_ITEM_FAIL_NAME',
        BOTH: 'MENU_EDIT_ITEM_FAIL_BOTH',
      },
      REVERT: 'MENU_EDIT_ITEM_REVERT',
    },
    ADD: {
      INIT: 'MENU_ADD_ITEM',
      SUCCESS: 'MENU_ADD_ITEM_SUCCESS',
      FAIL: {
        ID: 'MENU_ADD_ITEM_FAIL_ID',
        NAME: 'MENU_ADD_ITEM_FAIL_NAME',
        BOTH: 'MENU_ADD_ITEM_FAIL_BOTH',
      },
      REVERT: 'MENU_ADD_ITEM_REVERT',
    },
  },
};

export const getMenu = () => ({
  type: MENU.GET_MENU,
});

export const getMenuDone = menu => ({
  type: MENU.GET_MENU_DONE,
  menu,
});

export const getMenuFail = err => ({
  type: MENU.GET_MENU_FAIL,
  err,
});

export const deleteStoredCategory = categoryId => ({
  type: MENU.CATEGORY.DELETE,
  categoryId,
});

export const editStoredCategory = (oldCategoryId, categoryName, categoryId) => ({
  type: MENU.CATEGORY.EDIT.INIT,
  oldCategoryId,
  categoryName,
  categoryId,
});

export const addNewCategory = (categoryName, categoryId) => ({
  type: MENU.CATEGORY.ADD.INIT,
  categoryName,
  categoryId,
});

export const addCategoryStateRevert = () => ({
  type: MENU.CATEGORY.ADD.REVERT,
});

export const editCategoryStateRevert = () => ({
  type: MENU.CATEGORY.EDIT.REVERT,
});

export const deleteStoredItem = itemId => ({
  type: MENU.ITEM.DELETE,
  itemId,
});

export const editStoredItem = (oldItemId, itemName, itemId, itemDescription, itemPrice) => ({
  type: MENU.CATEGORY.EDIT.INIT,
  oldItemId,
  itemName,
  itemId,
  itemDescription,
  itemPrice,
});

export const editItemStateRevert = () => ({
  type: MENU.ITEM.EDIT.REVERT,
});
