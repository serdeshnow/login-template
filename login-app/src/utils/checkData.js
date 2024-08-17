export const checkData = (formData) => {
	return Object.values(formData).every((value) => {
		return value !== '';
	});
};

// Every formData key has value
