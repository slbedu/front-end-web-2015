describe('slice', function () {
	it('should throw an error when the third argument is not an array', function () {
		expect(function () {
			slice(1, 2, {});
		}).toThrow();
	});

	it('should return a new array same as the passed array when first and second argument are not convertible to number', function () {
		var arr = [1,2,3];
		var expected = [1,2,3];

		var result = slice(NaN, NaN, arr);

		expect(result).toEqual(expected);
	});

	it('should return a new array starts from the first item if first argument is number less than 0', function () {
		var arr = [1,2,3];
		var expected = [1,2,3];

		var result = slice(-1, NaN, arr);

		expect(result).toEqual(expected);
	});

	it('should return a new array ends with last item if second argument is number less than 0', function () {
		var arr = [1,2,3];
		var expected = [1,2,3];

		var result = slice(NaN, -1, arr);

		expect(result).toEqual(expected);
	});

	it('should convert strings to numbers for first argument', function () {
		var arr = [1,2,3];
		var expected = [2,3];

		var result = slice("1", 3, arr);

		expect(result).toEqual(expected);
	});

	it('should convert strings to numbers for second argument', function () {
		var arr = [1,2,3];
		var expected = [1,2];

		var result = slice(0, "2", arr);

		expect(result).toEqual(expected);
	});

	it('should not convert arrays to numbers for first argument (start position should be 0)', function () {
		var arr = [1,2,3];
		var expected = [1,2,3];

		var result = slice([], 3, arr);

		expect(result).toEqual(expected);
	});

	it('should not convert arrays to numbers for second argument (end position should be array\'s length)', function () {
		var arr = [1,2,3];
		var expected = [1,2,3];

		var result = slice([], 3, arr);

		expect(result).toEqual(expected);
	});


	it('should not modify the passed in array', function () {
		var arr = [1, "are", "", function () {}];
		var expected = arr.slice();

		slice(1, 2, arr);

		expect(arr).toEqual(expected);
	});
});
