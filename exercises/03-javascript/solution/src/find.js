function find(predicate, arr) {
	if (!predicate.call || !predicate.apply || !predicate.constructor) {
		throw "first argument should be a function";
	}

	if (!Array.isArray(arr)) {
		throw "second argument should be an array";
	}

	var len = arr.length,
		result;

	for (var i = 0; i < len; i++) {
		if (predicate(arr[i])) {
			return arr[i];
		}
	}

	return result;
}
