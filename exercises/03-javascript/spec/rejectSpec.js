describe('reject', function () {
	it('should throw an error when the first argument is not a function', function () {
		expect(function () {
			reject({}, []);
		}).toThrow();
	});

	it('should throw an error when the second argument is not an array', function () {
		expect(function () {
			reject(function () {}, { length: 100 });
		}).toThrow();
	});

	it('should return a new array with the values failing the predicate', function () {
		var arr = [1,2,3,4,5,6,7,8,9];
		var expected = [2,4,6,8];

		var result = reject(function (x) {
			return x % 2 === 1;
		}, arr);

		expect(result).toEqual(expected);
	});

	it('should not modify the passed in array', function () {
		var arr = [1, 'are', '', function () {}];
		var expected = arr.slice();

		reject(function (x) {
			return !!x;
		}, arr);

		expect(arr).toEqual(expected);
	});
});
