import React, { Fragment } from 'react';
import { object, shape, bool, string } from 'prop-types'

const FieldComponent = ({ 
	input,
	meta: {
		touched, error
	}
}) => (
	<Fragment>
		<input {...input} type="text" />
		{ (touched && error) && 
			<span className="error">{error}</span>
		}
	</Fragment>
)

FieldComponent.propTypes = {
	input: object,
	meta: shape({
		touched: bool,
		error: string
	})
}

export default FieldComponent;
