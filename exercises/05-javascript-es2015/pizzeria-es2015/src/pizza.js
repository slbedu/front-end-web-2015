class Pizza {
	constructor(name, size, cost, timeToPrepare) {
		this._name = name;
		this._size = size;
		this._cost = cost;
		this._timeToPrepare = timeToPrepare;
	}

	getName() {
		return this._name;
	}

	getSize() {
		return this._size;
	}

	getCost() {
		return this._cost;
	}

	getTimeToPrepare() {
		return this._timeToPrepare;
	}
}

export default Pizza;
