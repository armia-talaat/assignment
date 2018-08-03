import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import HeaderLayout from '../navigation/HeaderLayout';
import MenuContainer from './menu/MenuContainer';

const tabs = [
  {
    title: 'Menu Data',
    url: '/'
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <HeaderLayout tabs={tabs} homeUrl="/">
            <Router>
              <Switch>
                <Route exact path="/" component={MenuContainer} />

                <Redirect to={'/'} />
              </Switch>
            </Router>
          </HeaderLayout>
        </Provider>
      </div>
    );
  }
}

export default App;
