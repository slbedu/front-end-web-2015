'use strict';

function pizzaFactory(name, size) {
  switch (name) {
    case 'margherita':
      return new Margherita(size);
    case 'diavolo':
      return new Diavolo(size);
    default:
      throw new Error('No such pizza');
  }
}

function PizzaOrder(pizzaName, pizzaSize) {
  this._pizza = pizzaFactory(pizzaName, pizzaSize);
  this._onReadyActions = [];
  this._onProgressAcions = [];
}

PizzaOrder.prototype.getPizzaInfo = function () {
  var name = this._pizza.getName();
  var size = this._pizza.getSize();
  var cost = this._pizza.getCost();
  var time = this._pizza.getTimeToPrepare();

  return {
    name: name,
    size: size,
    cost: cost,
    time: time
  };
};

PizzaOrder.prototype.onProgress = function (callback) {
  this._onProgressAcions.push(callback);
};

PizzaOrder.prototype.onReady = function (callback) {
  this._onReadyActions.push(callback);
};

PizzaOrder.prototype.start = function () {
  var pizzaInfo = this.getPizzaInfo();
  var progressInterval = pizzaInfo.time / 10;
  var remainingTime = pizzaInfo.time;
  var self = this;

  var progressIntervalId = setInterval(function () {
    self._onProgressAcions.forEach(function (action) {
      remainingTime = remainingTime - progressInterval;
      action(remainingTime, pizzaInfo.time);
    });
  }, progressInterval);

  setTimeout(function () {
    clearInterval(progressIntervalId);
    self._onReadyActions.forEach(function (action) {
      action(pizzaInfo.name, pizzaInfo.size, pizzaInfo.cost);
    });
  }, pizzaInfo.time);
};
