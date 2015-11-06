function any(predicate, arr) {
	if (!predicate.call || !predicate.apply || !predicate.constructor) {
		throw 'first argument should be a function';
	}

	if (!Array.isArray(arr)) {
		throw 'second argument should be an array';
	}

	for (var i = 0; i < arr.length; i++) {
		if (predicate(arr[i])) {
			return true;
		}
	}

	return false;
}
