describe('repeat', function () {
	it('should throw an error when the first argument is not a number', function () {
		expect(function () {
			repeat({}, []);
		}).toThrow();
	});

	it('should return an array with repeated string', function () {
		var expected = ['a', 'a', 'a', 'a', 'a'];

		var actual = repeat(5, 'a');

		expect(actual).toEqual(expected);
	});

	it('should return an array with repeated array', function () {
		var expected = [['a'], ['a'], ['a'], ['a'], ['a']];

		var actual = repeat(5, ['a']);

		expect(actual).toEqual(expected);
	});

	it('should return an array with repeated object', function () {
		var expected = [{a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}];

		var actual = repeat(5, {a: 1});

		expect(actual).toEqual(expected);
	});
});
