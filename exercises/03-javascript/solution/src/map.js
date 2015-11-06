function map(modifier, arr) {
	if (!modifier.call || !modifier.apply || !modifier.constructor) {
		throw 'first argument should be a function';
	}

	var result = [];

	forEach(function (x) {
		result.push(modifier(x));
	}, arr);

	return result;
}
