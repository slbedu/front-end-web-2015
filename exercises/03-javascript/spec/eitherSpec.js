describe('either', function () {
	it('should throw an error when the first argument is not a function', function () {
		expect(function () {
			either({}, function () {});
		}).toThrow();
	});

	it('should throw an error when the second argument is not a function', function () {
		expect(function () {
			either(function () {}, []);
		}).toThrow();
	});

	it('should return result from first function if it is truthy', function () {
		var firstFunc = function (x) { return x > 10; };
		var secondFunc = function (x) { return x; };

		var newFunc = either(firstFunc, secondFunc);
		var result = newFunc(11);

		expect(result).toBe(true);
	});

	it('should return result from second function if first is not truthy', function () {
		var firstFunc = function (x) { return x > 10; };
		var secondFunc = function (x) { return x; };

		var newFunc = either(firstFunc, secondFunc);
		var result = newFunc(8);

		expect(result).toBe(8);
	});
});
