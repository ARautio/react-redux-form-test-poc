import React from 'react';
import { string, oneOf, func } from 'prop-types'
import { Field } from 'redux-form'

import { FieldComponent } from './index';

const FormField = ({ 
	name, 
	type, 
	label, 
	validate
}) => (
	<div className="inputField">
		<label htmlFor={name}>{label}</label>
		<Field 
			name={name} 
			component={FieldComponent} 
			type={type}
			validate={validate} 
		/>
	</div>
)

FormField.propTypes = {
	name: string.isRequired,
	label: string.isRequired,
	component: oneOf(['input']).isRequired,
	type: oneOf(['text']).isRequired,
	validate: func
}

export default FormField;
