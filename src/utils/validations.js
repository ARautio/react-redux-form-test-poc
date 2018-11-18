export const mandatory = () => {
	return (value, ...data) => {
		return value !== undefined ? undefined : 'Error';
	}
};