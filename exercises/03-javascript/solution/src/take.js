function take(n, arr) {
	if (!Array.isArray(arr)) {
		throw "second argument should be an array";
	}

	if (isNaN(n) || Math.floor(n) !== n || n < 0) {
		n = 1;
	}

	var len = Math.min(arr.length, n),
		result = slice(0, len, arr);

	return result;
}
