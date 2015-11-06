describe('head', function () {
	it('should throw an error when the first argument is not an array', function () {
		expect(function () {
			head({ length: 100 });
		}).toThrow();
	});

	it('should return undefined when passed an empty array', function () {
		expect(head([])).toBe(undefined);
	});

	it('should return the first item from the array', function () {
		var arr = ["t", 2, {a: 2}, "s"];

		expect(head(arr)).toBe(arr[0]);
	});

	it('should not modify the passed in array', function () {
		var fn = function test() { console.log('test'); };
		var arr = ["t", 2, {a: 2}, "s", fn];
		var expected = arr.slice();

		head(arr);

		expect(arr).toEqual(expected);
	});
});
