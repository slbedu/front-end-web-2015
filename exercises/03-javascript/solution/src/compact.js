function compact(arr) {
	return filter(function (x) {
		return !!x;
	}, arr);
}
