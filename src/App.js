import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';

import Greeting from './components/Greeting';

const App = () => (
  <Provider store={store}>
    <div className="cont">
      <Greeting />
    </div>
  </Provider>

);

export default App;
