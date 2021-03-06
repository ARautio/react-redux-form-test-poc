import React from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider as ReduxProvider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({  
  form: formReducer
})

const store = createStore(rootReducer)

export default function Provider({ children }) {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
};