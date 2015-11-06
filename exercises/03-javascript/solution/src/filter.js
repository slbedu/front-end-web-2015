function filter(predicate, arr) {
	if (!predicate.call || !predicate.apply || !predicate.constructor) {
		throw 'first argument should be a function';
	}

	var result = [];

	forEach(function (x) {
		if (predicate(x)) {
			result.push(x);
		}
	}, arr);

	return result;
}
