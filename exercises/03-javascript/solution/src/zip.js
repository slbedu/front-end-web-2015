function zip(firstArray, secondArray) {
	if (!Array.isArray(firstArray)) {
		throw "first argument should be an array";
	}

	if (!Array.isArray(secondArray)) {
		throw "second argument should be an array";
	}

	var result = [],
		length = Math.min(firstArray.length, secondArray.length);

	for (var i = 0; i < length; i++) {
		result.push([firstArray[i], secondArray[i]]);
	}

	return result;
}
