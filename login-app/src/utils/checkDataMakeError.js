export const checkDataMakeError = (dataObj, errorObj) => {
	Object.entries(dataObj).forEach(([key, value]) => {
		if (value === '') {
			errorObj[`${key}Error`] = "Field shouldn't be empty";
		}
	});
};

// Check in dataObj empty values and mark in errorObj
