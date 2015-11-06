describe('flatten', function () {
	it('should throw an error when the first argument is not an array', function () {
		expect(function () {
			flatten({ length: 100 });
		}).toThrow();
	});

	it('should flatten an array with two levels of nesting', function () {
		var arr = [1,2,[3,4], 5, [6,7]];
		var expected = [1,2,3,4,5,6,7];

		var actual = flatten(arr);

		expect(actual).toEqual(expected);
	});

	it('should flatten an array with three levels of nesting', function () {
		var arr = [1,[[2]],['3','4'], 5, [6,[7,8,9]]];
		var expected = [1,2,'3','4',5,6,7,8,9];

		var actual = flatten(arr);

		expect(actual).toEqual(expected);
	});

	it('should flatten an array with four levels of nesting', function () {
		var arr = [1,[[[2]]],[3,'4'], 5, [6,[[7],8,['9']]]];
		var expected = [1,2,3,'4',5,6,7,8,'9'];

		var actual = flatten(arr);

		expect(actual).toEqual(expected);
	});

	it('should not modify the passed in array', function () {
		var arr = [1,[[['2']]],[3,4], 5, [6,[['7'],8,[9]]]];
		var expected = arr.slice();

		flatten(arr);

		expect(arr).toEqual(expected);
	});
});
