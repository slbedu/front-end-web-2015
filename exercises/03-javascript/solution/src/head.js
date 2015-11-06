function head(arr) {
	if (!Array.isArray(arr)) {
		throw 'first argument should be an array';
	}

	return arr[0];
}
