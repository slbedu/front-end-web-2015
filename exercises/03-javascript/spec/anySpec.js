describe('any', function () {
	it('should throw an error when the first argument is not a function', function () {
		expect(function () {
			any({}, []);
		}).toThrow();
	});

	it('should throw an error when the second argument is not an array', function () {
		expect(function () {
			any(function () {}, { length: 100 });
		}).toThrow();
	});

	it('should return true if a value passes the predicate', function () {
		var arr = ['test', 'angular', 'js', 'loops'];

		var actual = any(function (x) {
			return x === 'js';
		}, arr);

		expect(actual).toBe(true);
	});

	it('should return as soon as a passing value is found', function () {
		var arr = ['test', 1, 'angular', 'js', 'loops'];
		var spy = jasmine.createSpy().and.callFake(function (x) {
			return x === 1;
		});

		var actual = any(spy, arr);

		expect(actual).toBe(true);
		expect(spy.calls.count()).toBe(2);
	});

	it('should return false if all values fail the predicate', function () {
		var arr = ['test', 'angular', 'js', 'loops'];

		var actual = any(function (x) {
			return x === 'wrong';
		}, arr);

		expect(actual).toBe(false);
	});

	it('should not modify the passed in array', function () {
		var arr = [1, 'are', '', {a: 'a'}];
		var expected = arr.slice();

		any(function (x) {
			return x % 2 === 1;
		}, arr);

		expect(arr).toEqual(expected);
	});
});
