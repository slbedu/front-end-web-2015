function slice(start, end, arr) {
	if (!Array.isArray(arr)) {
		throw "third argument should be an array";
	}

	if (isNaN(start) || Array.isArray(start) || start < 0) {
		start = 0;
	} else {
		start = parseInt(start, 10);
	}

	if (isNaN(end) || Array.isArray(end) || end < 0) {
		end = arr.length;
	} else {
		end = parseInt(end, 10);
	}

	var result = [],
		len = Math.min(arr.length, end);

	for (var i = start; i < len; i++) {
		result.push(arr[i]);
	}

	return result;
}
