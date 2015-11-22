function Pizza(name, size, cost, timeToPrepare) {
  this._name = name;
  this._size = size;
  this._cost = cost;
  this._timeToPrepare = timeToPrepare;
}

Pizza.prototype.getName = function () {
  return this._name;
};

Pizza.prototype.getSize = function () {
  return this._size;
};

Pizza.prototype.getCost = function () {
  return this._cost;
};

Pizza.prototype.getTimeToPrepare = function () {
  return this._timeToPrepare;
};
