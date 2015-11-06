function difference(reference, arr) {
	if (!Array.isArray(reference)) {
		throw "first argument should be an array";
	}

	if (!Array.isArray(arr)) {
		throw "second argument should be an array";
	}

	var result = [];

	forEach(function (x) {
		if (reference.indexOf(x) === -1) {
			result.push(x);
		}
	}, arr);

	return result;
}
