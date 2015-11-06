function reduce(action, acc, arr) {
	if (!action.call || !action.apply || !action.constructor) {
		throw 'first argument should be a function';
	}

	if (arr.length === 0) {
		return acc;
	}

	return reduce(action, action(acc, head(arr)), tail(arr));
}
