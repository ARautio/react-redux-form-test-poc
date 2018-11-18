import React from 'react'
import { reduxForm, Form } from 'redux-form'

import './Form.css'

const FormWrapper = ({ children, handleSubmit, onSave }) => {
	
	const hidingValues = () => {
		console.log("This would hide values but we are interest to see if" +
			" we can override it when testing.");
	}

	const defaultOnSave = (value) => {
		console.log("test");
	}

	return (
		<Form 
			className="formWrapper" 
			onSubmit={handleSubmit(onSave || defaultOnSave)}>
			<button 
				className="hide" 
				onClick={hidingValues}
			>
				Hide
			</button>
			{children}
		</Form>
	);
};

export default reduxForm({
  form: 'form'
})(FormWrapper);
