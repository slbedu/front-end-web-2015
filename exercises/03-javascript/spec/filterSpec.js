describe('filter', function () {
	it('should throw an error when the first argument is not a function', function () {
		expect(function () {
			filter({}, []);
		}).toThrow();
	});

	it('should throw an error when the second argument is not an array', function () {
		expect(function () {
			filter(function () {}, { length: 100 });
		}).toThrow();
	});

	it('should call the callback 3 times for [1,2,3]', function () {
		var cb = jasmine.createSpy();
		var arr = [1,2,3];

		filter(cb, arr);

		expect(cb.calls.count()).toBe(arr.length);
	});

	it('should call the callback with proper arguments for ["this","is","me"]', function () {
		var cb = jasmine.createSpy();
		var arr = ['this', 'is', 'me'];

		filter(cb, arr);

		expect(cb.calls.argsFor(0).pop()).toBe(arr[0]);
		expect(cb.calls.argsFor(1).pop()).toBe(arr[1]);
		expect(cb.calls.argsFor(2).pop()).toBe(arr[2]);
	});

	it('should return a new array with the values passing the predicate', function () {
		var arr = [1,2,3,4,5,6,7,8,9];
		var expected = [1,3,5,7,9];

		var result = filter(function (x) {
			return x % 2 === 1;
		}, arr);

		expect(result).toEqual(expected);
	});

	it('should not modify the passed in array', function () {
		var arr = [1, 'are', '', function () {}];
		var expected = arr.slice();

		filter(function (x) {
			return !!x;
		}, arr);

		expect(arr).toEqual(expected);
	});
});
