import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

import { Form } from './components/Form/';
import 'reset-css';

const rootReducer = combineReducers({  
  form: formReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<Form />
	</Provider>, 
	document.getElementById('root')
);
