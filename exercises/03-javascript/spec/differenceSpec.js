describe('difference', function () {
	it('should throw an error when the first argument is not an array', function () {
		expect(function () {
			difference({}, []);
		}).toThrow();
	});

	it('should throw an error when the second argument is not an array', function () {
		expect(function () {
			difference([], {});
		}).toThrow();
	});

	it('should return a new array of all values from the second array that are not present reference array', function () {
		var arr = [1,2,3,4];
		var reference = [7,6,5,4,3];
		var expected = [1,2];

		var result = difference(reference, arr);

		expect(result).toEqual(expected);
	});

	it('should not modify the passed in arrays', function () {
		var firstArray = [1, "are", "", function () {}];
		var secondArray = [2];
		var expectedFirstArray = firstArray.slice();
		var expectedSecondArray = secondArray.slice();

		difference(expectedFirstArray, expectedSecondArray);

		expect(firstArray).toEqual(expectedFirstArray);
		expect(secondArray).toEqual(expectedSecondArray);
	});
});
