import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';
import Routes from './routes';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
