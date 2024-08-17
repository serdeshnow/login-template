export const checkHasError = (formError) => {
	return Object.values(formError).some((value) => {
		return value !== null;
	});
};

// Any formError key has value
