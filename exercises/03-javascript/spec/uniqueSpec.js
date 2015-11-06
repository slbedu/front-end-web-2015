describe('unique', function () {
	it('should throw an error when the first argument is not an array', function () {
		expect(function () {
			unique({});
		}).toThrow();
	});

	it('should return a new array with unique elements', function () {
		var arr = [1,2,2,3,1];
		var expected = [1,2,3];

		var result = unique(arr);

		expect(result).toEqual(expected);
	});

	it('should not modify the passed in array', function () {
		var arr = [1, "are", "", function () {}];
		var expected = arr.slice();

		unique(arr);

		expect(arr).toEqual(expected);
	});
});
