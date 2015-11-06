function unique(arr) {
	if (!Array.isArray(arr)) {
		throw "first argument should be an array";
	}

	var result = [];

	forEach(function (x) {
		if (result.indexOf(x) === -1) {
			result.push(x);
		}
	}, arr);

	return result;
}
