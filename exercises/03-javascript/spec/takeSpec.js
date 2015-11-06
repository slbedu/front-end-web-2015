describe('take', function () {
	it('should throw an error when the first argument is not an array', function () {
		expect(function () {
			take(1, {});
		}).toThrow();
	});

	it('should return a new array with one value when first argument less than 0', function () {
		var arr = [1,2,3];
		var expected = [1];

		var result = take(-1, arr);

		expect(result).toEqual(expected);
	});

	it('should return a new array with one value when first argument is float point number', function () {
		var arr = [1,2,3];
		var expected = [1];

		var result = take(2.3, arr);

		expect(result).toEqual(expected);
	});

	it('should return a new array with one value when first argument is NaN', function () {
		var arr = [1,2,3];
		var expected = [1];

		var result = take(NaN, arr);

		expect(result).toEqual(expected);
	});

	it('should return a new empty array when first argument is zero', function () {
		var arr = [1,2,3];
		var expected = [];

		var result = take(0, arr);

		expect(result).toEqual(expected);
	});

	it('should return a new array with two values when first argument is two', function () {
		var arr = [1,2,3];
		var expected = [1,2];

		var result = take(2, arr);

		expect(result).toEqual(expected);
	});

	it('should return a new array same as the passed array when first argument is greater than the array\'s length ', function () {
		var arr = [1,2,3];
		var expected = [1,2,3];

		var result = take(5, arr);

		expect(result).toEqual(expected);
	});

	it('should not modify the passed in array', function () {
		var arr = [1, "are", "", function () {}];
		var expected = arr.slice();

		take(1, arr);

		expect(arr).toEqual(expected);
	});
});
