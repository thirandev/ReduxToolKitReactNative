import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Display from './Display';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Counter />
        <Display />
      </>
    </Provider>
  );
}

export default App;











