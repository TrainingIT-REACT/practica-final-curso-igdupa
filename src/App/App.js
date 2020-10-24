import React from 'react';
import Menu from './Menu';

// Css
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Menu />
    </Provider>
  </div>
);

export default App;
