import React from 'react'
import { FormWrapper, FormField } from './'

import { mandatory } from '../../utils/validations';

import './Form.css'

const Form = ({ onSave }) => (
	<FormWrapper onSave={onSave}>
		<FormField 
			name="firstName"
			label="First Name"
			component="input"
			type="text"
			validate={mandatory()}
		/>
		<FormField 
			name="lastName"
			label="Last Name"
			component="input"
			type="text"
		/>
		<input type="submit" value="Save"/>
	</FormWrapper>
);

export default Form
