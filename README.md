<<<<<<< HEAD
<p>This project a basic menu app with different roles.</p>
<h2><a id="List_of_Components_2"></a>List of Components</h2>
<p>-<code>App</code> : Basic component with a <code>Router</code> and <code>Provider</code>.<br>
-<code>MenuContainer</code> : Middleware Component between <code>Store</code> and <code>Menu</code>.<br>
-<code>Menu</code> : Main Component with integration with <code>Modal</code> and <code>Forms</code> with checking <code>Category</code> and <code>Item</code>.<br>
-<code>LoginContainer</code> : Middleware Component between <code>Store</code> and <code>Login</code>.<br>
-<code>Login</code> : Form Component with integration with <code>Modal</code> and <code>Form</code> to <code>Login</code>.<br>
-<code>Store</code> : Main State-Management <code>Store</code>.<br>
-<code>actions</code> : For calling and updating states in <code>Store</code>.<br>
-<code>menu</code> : For fetching <code>menu</code> updating <code>Category</code> or <code>Item</code> in <code>Store</code>.<br>
-<code>user</code> : For <code>Signin</code> and <code>Signout</code> and TODO: Add and remove users.<br>
-<code>reducers</code> : For storing and updating states in <code>Store</code>.<br>
-<code>menu</code> : For updating and mutating data in <code>menu</code> or <code>Category</code> or <code>Item</code> in <code>Store</code>.<br>
-<code>user</code> : For storing state of <code>user</code> and <code>roles</code>.<br>
-<code>sagas</code> : For fetching data and send to <code>Store</code>.<br>
-<code>menu</code> : Fetching initial <code>menu</code> and send to <code>Store</code>.<br>
-<code>user</code> : For checking user and login and send <code>user</code> info to <code>Store</code>.<br>
-<code>Navigation</code> : Main Navigation component for multiple routers if needed.<br>
-<code>HeaderLayout</code> : Navigation component deal with routing and multiple tabs.<br>
-<code>Header</code> : Navigation component to store and deal with user Management.<br>
-<code>Modals</code> : Main Modals to deal with and mutate data.<br>
-<code>AddCategory</code> : Modal for adding new Category and with validation for duplicate data.<br>
-<code>DeleteCategory</code> : Modal for deleting a specific Category with children.<br>
-<code>EditCategory</code> : Modal for editing a specific Category and with validation for duplicate data.<br>
-<code>AddItem</code> : Modal for adding new Item for a parent Category and with validation for duplicate data.<br>
-<code>DeleteItem</code> : Modal for deleting a specific Item.<br>
-<code>EditItem</code> : Modal for editing a specific Item and with validation for duplicate unique data.<br>
-<code>Public</code> : Contains main <code>assets</code> and <code>index.html</code>.<br>
-<code>Butcherburgermenu.json</code> : Main Menu json file with initial data.<br>
-<code>users.json</code> : Initial Users json file with initial data.</p>
=======
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
>>>>>>> c6f0bf057329f5790a08b037c08c2ca89987fe78
