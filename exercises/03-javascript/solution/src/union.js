function union(firstArray, secondArray) {
	if (!Array.isArray(firstArray)) {
		throw "first argument should be an array";
	}

	if (!Array.isArray(secondArray)) {
		throw "second argument should be an array";
	}

	return unique(firstArray.concat(secondArray));
}
