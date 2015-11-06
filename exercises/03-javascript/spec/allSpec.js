describe('all', function () {
	it('should throw an error when the first argument is not a function', function () {
		expect(function () {
			all({}, []);
		}).toThrow();
	});

	it('should throw an error when the second argument is not an array', function () {
		expect(function () {
			all(function () {}, { length: 100 });
		}).toThrow();
	});

	it('should return true if all values pass the predicate', function () {
		var arr = ['test', 'angular', 'js', 'loops'];

		var actual = all(function (x) {
			return typeof x === 'string';
		}, arr);

		expect(actual).toBe(true);
	});

	it('should return false even if only one value fails the predicate', function () {
		var arr = ['test', 'angular', 42, 'js', 'loops'];

		var actual = all(function (x) {
			return typeof x === 'string';
		}, arr);

		expect(actual).toBe(false);
	});

	it('should return as soon as a failing value is found', function () {
		var arr = ['test', 1, 'angular', 'js', 'loops'];
		var spy = jasmine.createSpy().and.callFake(function (x) {
			return typeof x === 'string';
		});

		var actual = all(spy, arr);

		expect(actual).toBe(false);
		expect(spy.calls.count()).toBe(2);
	});

	it('should not modify the passed in array', function () {
		var arr = [1, 'are', '', {a: 'a'}];
		var expected = arr.slice();

		all(function (x) {
			return x % 2 === 1;
		}, arr);

		expect(arr).toEqual(expected);
	});
});
