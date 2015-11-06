describe('tail', function () {
	it('should throw an error when the first argument is not an array', function () {
		expect(function () {
			tail({});
		}).toThrow();
	});

	it('should return a new array without the first value', function () {
		var arr = [1,2,3];
		var expected = [2,3];

		var result = tail(arr);

		expect(result).toEqual(expected);
	});

	it('should not modify the passed in array', function () {
		var arr = [1, "are", "", function () {}];
		var expected = arr.slice();

		tail(arr);

		expect(arr).toEqual(expected);
	});
});
