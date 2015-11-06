describe('union', function () {
	it('should throw an error when the first argument is not an array', function () {
		expect(function () {
			union({}, []);
		}).toThrow();
	});

	it('should throw an error when the second argument is not an array', function () {
		expect(function () {
			union([], {});
		}).toThrow();
	});

	it('should return a new array of all unique values in both arrays when first array has more elements than the second array', function () {
		var firstArray = [1,2];
		var secondArray = [1,2,3];
		var expected = [1,2,3];

		var result = union(firstArray, secondArray);

		expect(result).toEqual(expected);
	});

	it('should return a new array of all unique values in both arrays when second array has more elements than the first array', function () {
		var firstArray = [1,2,3];
		var secondArray = [1,2];
		var expected = [1,2,3];

		var result = union(firstArray, secondArray);

		expect(result).toEqual(expected);
	});

	it('should not modify the passed in arrays', function () {
		var firstArray = [1, "are", "", function () {}];
		var secondArray = [2];
		var expectedFirstArray = firstArray.slice();
		var expectedSecondArray = secondArray.slice();

		union(firstArray, secondArray);

		expect(firstArray).toEqual(expectedFirstArray);
		expect(secondArray).toEqual(expectedSecondArray);
	});
});
