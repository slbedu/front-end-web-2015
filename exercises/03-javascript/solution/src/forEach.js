function forEach(action, arr) {
	if (!action.call || !action.apply || !action.constructor) {
		throw 'first argument should be a function';
	}

	if (!Array.isArray(arr)) {
		throw 'second argument should be an array';
	}

	for (var i = 0; i < arr.length; i++) {
		action(arr[i]);
	}
}
