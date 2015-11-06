describe('compact', function () {
	it('should throw an error when the first argument is not an array', function () {
		expect(function () {
			compact(function () {});
		}).toThrow();
	});

	it('should filter out the falsey values', function () {
		var fn = function () {};
		var arr = [false, 1, 'are', '', fn, 0, 2, null, '3', undefined, NaN];
		var expected = [1, 'are', fn, 2, '3'];

		var actual = compact(arr);

		expect(actual).toEqual(expected);
	});

	it('should not modify the passed in array', function () {
		var arr = [1, 'are', '', function () {}];
		var expected = arr.slice();

		compact(arr);

		expect(arr).toEqual(expected);
	});
});
