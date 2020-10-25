import React, { Suspense } from 'react';
import Loading from './Loading';

// Css
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

const Menu = React.lazy(() => import('./Menu'));

const App = () => (
  <div className="App">
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Menu />
      </Provider>
    </Suspense>
  </div>
);

export default App;
