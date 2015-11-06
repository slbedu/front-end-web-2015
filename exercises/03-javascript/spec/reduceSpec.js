describe('reduce', function () {
	it('should throw an error when the first argument is not a function', function () {
		expect(function () {
			reduce({}, [], []);
		}).toThrow();
	});

	it('should throw an error when the third argument is not an array', function () {
		expect(function () {
			reduce(function () {}, [], { length: 100 });
		}).toThrow();
	});

	it('should return proper result with a sum function', function () {
		var arr = [1,2,3,4,5,6,7,8,9,10];
		var expected = 55;

		var actual = reduce(function (acc, x) {
			return acc + x;
		}, 0, arr);

		expect(actual).toBe(expected);
	});

	it('should return proper result with a array building function', function () {
		var arr = [1,2,3,4,5,6,7,8,9,10];
		var expected = ['1','2','3','4','5','6','7','8','9','10'];

		var actual = reduce(function (acc, x) {
			acc.push(x.toString());
			return acc;
		}, [], arr);

		expect(actual).toEqual(expected);
	});

	it('should return proper result with an object building function', function () {
		var arr = [1,2,3,4,5,6,7,8,9,10];
		var expected = {'1': 1,'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9,'10': 10};

		var actual = reduce(function (acc, x) {
			acc[x.toString()] = x;
			return acc;
		}, {}, arr);

		expect(actual).toEqual(expected);
	});

	it('should not modify the passed in array', function () {
		var arr = [1,2,3,4,5,6,7,8,9,10];
		var expected = arr.slice();

		reduce(function (acc, x) {
			acc.push(x.toString());
			return acc;
		}, [], arr);

		expect(arr).toEqual(expected);
	});
});
