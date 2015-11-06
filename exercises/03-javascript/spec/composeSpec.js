describe('compose', function () {
	it('should throw an error when the first argument is not a function', function () {
		expect(function () {
			forEach({}, function () {});
		}).toThrow();
	});

	it('should throw an error when the second argument is not a function', function () {
		expect(function () {
			forEach(function () {}, { length: 100 });
		}).toThrow();
	});

	it('should return proper value from the composition of 3 functions', function () {
		var expected = -80;

		function inc(x) { return ++x; }
		function neg(x) { return -x; }
		var f = compose(inc, neg, Math.pow);

		var result = f(3, 4);

		expect(result).toBe(expected);
	});

	it('should return proper value from the composition of 4 functions', function () {
		var expected = '-17';

		function toString(x) { return x.toString(); }
		function inc(x) { return ++x; }
		function neg(x) { return -x; }
		function add(a, b, c, d) { return a + b + c + d; }

		var f = compose(toString, inc, neg, add);
		var result = f(3, 4, 5, 6);

		expect(result).toBe(expected);
	});
});
