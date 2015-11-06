function compose() {
	var functions = Array.prototype.slice.apply(arguments).reverse();

	forEach(function (func) {
		if (!func.call || !func.apply || !func.constructor) {
			throw 'All arguments should be functions';
		}
	}, functions);

	return function () {
		var first = functions[0].apply(null, arguments);
		
		return reduce(function (acc, func) {
			return func.call(null, acc);
		}, first, tail(functions));
	};
}
