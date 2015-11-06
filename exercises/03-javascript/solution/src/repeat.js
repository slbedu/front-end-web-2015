function repeat(times, x) {
	if (Math.floor(times) !== times) {
		throw 'first argument should be a number';
	}

	return map(function () { return x;}, Array(times));
}
