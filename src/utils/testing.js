export const writeToField = (subject, field, value) => {
	const input = subject.find(field).first()
	value && input.simulate('change', {target: {value: 'My new value'}})
	input.simulate('blur')

}