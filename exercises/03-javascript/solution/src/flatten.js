function flatten(arr) {
	return reduce(function (acc, x) {
		if (Array.isArray(x)) {
			return acc.concat(flatten(x));
		}

		return acc.concat(x);
	}, [], arr);
}
