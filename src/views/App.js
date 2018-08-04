import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import HeaderLayout from '../navigation/HeaderLayout';
import MenuContainer from './menu/MenuContainer';

const tabs = [
  {
    title: 'Menu Data',
    url: '/',
  },
];
const App = () => (
  <div className="App">
    <Provider store={store}>
      <HeaderLayout tabs={tabs}>
        <Router>
          <Switch>
            <Route exact path="/" component={MenuContainer} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </HeaderLayout>
    </Provider>
  </div>
);

export default App;
