describe('find', function () {
	it('should throw an error when the first argument is not a function', function () {
		expect(function () {
			find({}, []);
		}).toThrow();
	});

	it('should throw an error when the second argument is not an array', function () {
		expect(function () {
			find(function () {}, { length: 100 });
		}).toThrow();
	});

	it('should call the callback 3 times for [1,2,3] and not match criteria', function () {
		var cb = jasmine.createSpy();
		var arr = [1,2,3];

		find(cb, arr);

		expect(cb.calls.count()).toBe(arr.length);
	});

	it('should call the callback with proper arguments for ["this","is","me"]', function () {
		var cb = jasmine.createSpy();
		var arr = ['this', 'is', 'me'];

		find(cb, arr);

		expect(cb.calls.argsFor(0).pop()).toBe(arr[0]);
		expect(cb.calls.argsFor(1).pop()).toBe(arr[1]);
		expect(cb.calls.argsFor(2).pop()).toBe(arr[2]);
	});

	it('should return a value from flat array if it can find the item', function () {
		var arr = [1,2,3];
		var expected = 2;

		var result = find(function (x) {
			return x % 2 === 0;
		}, arr);

		expect(result).toEqual(expected);
	});

	it('should return as soon as a passing value is found', function () {
		var arr = ['test', 1, 'angular', 'js', 'loops'];
		var spy = jasmine.createSpy().and.callFake(function (x) {
			return typeof x === 'number';
		});

		var actual = find(spy, arr);

		expect(actual).toBe(1);
		expect(spy.calls.count()).toBe(2);
	});

	it('should return undefined if can not find the item', function () {
		var arr = [1,2,3];
		var expected = undefined;

		var result = find(function (x) {
			return x === 6;
		}, arr);

		expect(result).toEqual(expected);
	});

	it('should return a value from array of objects', function () {
		var arr = [{
			firstName: "FirstName",
			lastName: "LastName",
			age: 25
		}, {
			firstName: "Second",
			lastName: "Person",
			age: 30
		}];

		var result = find(function (x) {
			return x.age > 26;
		}, arr);

		expect(result.firstName).toEqual("Second");
		expect(result.lastName).toEqual("Person");
		expect(result.age).toEqual(30);
	});

	it('should not modify the passed in array', function () {
		var arr = [1, "are", "", function () {}];
		var expected = arr.slice();

		find(function (x) {
			return x + 1;
		}, arr);

		expect(arr).toEqual(expected);
	});
});
