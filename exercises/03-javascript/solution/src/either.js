function either(firstFunc, secondFunc) {
	if (!firstFunc.call || !firstFunc.apply || !firstFunc.constructor) {
		throw 'first argument should be a function';
	}

	if (!secondFunc.call || !secondFunc.apply || !secondFunc.constructor) {
		throw 'second argument should be a function';
	}

	return function (x) {
		return firstFunc.call(null, x) || secondFunc.call(null, x);
	};
}
