function tail(arr) {
	if (!Array.isArray(arr)) {
		throw "first argument should be an array";
	}

	return slice(1, arr.length, arr);
}
