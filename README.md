This project a basic menu app with different roles.

## List of Components

-`App` : Basic component with a `Router` and `Provider`.
-`MenuContainer` : Middleware Component between `Store` and `Menu`.
  -`Menu` : Main Component with integration with `Modal` and `Forms` with checking `Category` and `Item`.
  -`LoginContainer` : Middleware Component between `Store` and `Login`.
  -`Login` : Form Component with integration with `Modal` and `Form` to `Login`.
-`Store` : Main State-Management `Store`.
  -`actions` : For calling and updating states in `Store`.
    -`menu` : For fetching `menu` updating `Category` or `Item` in `Store`.
    -`user` : For `Signin` and `Signout` and TODO: Add and remove users.
  -`reducers` : For storing and updating states in `Store`.
    -`menu` : For updating and mutating data in `menu` or `Category` or `Item` in `Store`.
    -`user` : For storing state of `user` and `roles`.
  -`sagas` : For fetching data and send to `Store`.
    -`menu` : Fetching initial `menu` and send to `Store`.
    -`user` : For checking user and login and send `user` info to `Store`.
-`Navigation` : Main Navigation component for multiple routers if needed.
  -`HeaderLayout` : Navigation component deal with routing and multiple tabs.
    -`Header` : Navigation component to store and deal with user Management.
-`Modals` : Main Modals to deal with and mutate data.
  -`AddCategory` : Modal for adding new Category and with validation for duplicate data.
  -`DeleteCategory` : Modal for deleting a specific Category with children.
  -`EditCategory` : Modal for editing a specific Category and with validation for duplicate data.
  -`AddItem` : Modal for adding new Item for a parent Category and with validation for duplicate data.
  -`DeleteItem` : Modal for deleting a specific Item.
  -`EditItem` : Modal for editing a specific Item and with validation for duplicate unique data.
-`Public` : Contains main `assets` and `index.html`.
  -`Butcherburgermenu.json` : Main Menu json file with initial data.
  -`users.json` : Initial Users json file with initial data.
