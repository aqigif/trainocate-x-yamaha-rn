import * as React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigations/Navigation';
import{ persistor, store } from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
