describe('zip', function () {
	it('should throw an error when the first argument is not an array', function () {
		expect(function () {
			zip({}, []);
		}).toThrow();
	});

	it('should throw an error when the second argument is not an array', function () {
		expect(function () {
			zip([], {});
		}).toThrow();
	});

	it('should return a new array out of the two supplied by pairing up equally-positioned items from both lists when first array is bigger than the second', function () {
		var firstArray = [1,2,3,4];
		var secondArray = ["a","b","c"];
		var expected = [[1,"a"],[2,"b"],[3,"c"]];

		var result = zip(firstArray, secondArray);

		expect(result).toEqual(expected);
	});

	it('should return a new array out of the two supplied by pairing up equally-positioned items from both lists when second array is bigger than the first', function () {
		var firstArray = [1,2];
		var secondArray = ["a","b","c"];
		var expected = [[1,"a"],[2,"b"]];

		var result = zip(firstArray, secondArray);

		expect(result).toEqual(expected);
	});

	it('should not modify the passed in arrays', function () {
		var firstArray = [1, "are", "", function () {}];
		var secondArray = [2];
		var expectedFirstArray = firstArray.slice();
		var expectedSecondArray = secondArray.slice();

		zip(firstArray, secondArray);

		expect(firstArray).toEqual(expectedFirstArray);
		expect(secondArray).toEqual(expectedSecondArray);
	});
});
