(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _pizzaOrder = require('./pizza-order');

var _pizzaOrder2 = _interopRequireDefault(_pizzaOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  'use strict';

  var pizzaSelect = document.getElementById('pizzas-select');
  var sizeSelect = document.getElementById('sizes-select');
  var orderButton = document.getElementById('order-button');
  var progressBar = document.getElementById('progress-bar');
  var pizzaAlert = document.getElementById('pizza-alert');

  orderButton.addEventListener('click', function () {
    var pizza = pizzaSelect.value;
    var size = sizeSelect.value;

    if (pizza === "default" || size === "default") {
      return;
    }

    progressBar.style.width = 0;
    pizzaAlert.style.visibility = 'hidden';

    var order = new _pizzaOrder2.default(pizza, size);
    order.onProgress(function (remaining, total) {
      var percent = Math.floor((1 - remaining / total) * 100);
      progressBar.style.width = percent + '%';
    });

    order.onReady(function (name, size, cost) {
      progressBar.style.width = '100%';

      pizzaAlert.textContent = 'Your ' + size + ' ' + name + ' is ready. Bill: ' + cost + ' lv.';
      pizzaAlert.style.visibility = 'visible';
    });

    order.start();
  });
};

},{"./pizza-order":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pizza = require('./pizza');

var _pizza2 = _interopRequireDefault(_pizza);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function calculateCostAndTime(size) {
	switch (size) {
		case 'Small':
			return { cost: '6.3', time: 6300 };
		case 'Medium':
			return { cost: '7.2', time: 7200 };
		case 'Large':
			return { cost: '8', time: 8000 };
	}
}

var NAME = 'Diavolo';

var Diavolo = (function (_Pizza) {
	_inherits(Diavolo, _Pizza);

	function Diavolo(size) {
		_classCallCheck(this, Diavolo);

		var costAndTime = calculateCostAndTime(size);
		return _possibleConstructorReturn(this, Object.getPrototypeOf(Diavolo).call(this, NAME, size, costAndTime.cost, costAndTime.time));
	}

	return Diavolo;
})(_pizza2.default);

exports.default = Diavolo;

},{"./pizza":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pizza = require('./pizza');

var _pizza2 = _interopRequireDefault(_pizza);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function calculateCostAndTime(size) {
	switch (size) {
		case 'Small':
			return { cost: '5.5', time: 5500 };
		case 'Medium':
			return { cost: '6.5', time: 6500 };
		case 'Large':
			return { cost: '7.2', time: 7200 };
	}
}

var NAME = 'Margherita';

var Margherita = (function (_Pizza) {
	_inherits(Margherita, _Pizza);

	function Margherita(size) {
		_classCallCheck(this, Margherita);

		var costAndTime = calculateCostAndTime(size);
		return _possibleConstructorReturn(this, Object.getPrototypeOf(Margherita).call(this, NAME, size, costAndTime.cost, costAndTime.time));
	}

	return Margherita;
})(_pizza2.default);

exports.default = Margherita;

},{"./pizza":5}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _margherita = require('./margherita');

var _margherita2 = _interopRequireDefault(_margherita);

var _diavolo = require('./diavolo');

var _diavolo2 = _interopRequireDefault(_diavolo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pizzaFactory(name, size) {
  switch (name) {
    case 'margherita':
      return new _margherita2.default(size);
    case 'diavolo':
      return new _diavolo2.default(size);
    default:
      throw new Error('No such pizza');
  }
}

var PizzaOrder = (function () {
  function PizzaOrder(pizzaName, pizzaSize) {
    _classCallCheck(this, PizzaOrder);

    this._pizza = pizzaFactory(pizzaName, pizzaSize);
    this._onReadyActions = [];
    this._onProgressAcions = [];
  }

  _createClass(PizzaOrder, [{
    key: 'getPizzaInfo',
    value: function getPizzaInfo() {
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
    }
  }, {
    key: 'onProgress',
    value: function onProgress(callback) {
      this._onProgressAcions.push(callback);
    }
  }, {
    key: 'onReady',
    value: function onReady(callback) {
      this._onReadyActions.push(callback);
    }
  }, {
    key: 'start',
    value: function start() {
      var _this = this;

      var _getPizzaInfo = this.getPizzaInfo();

      var name = _getPizzaInfo.name;
      var size = _getPizzaInfo.size;
      var cost = _getPizzaInfo.cost;
      var time = _getPizzaInfo.time;

      var progressInterval = time / 10;
      var remainingTime = time;

      var progressIntervalId = setInterval(function () {
        _this._onProgressAcions.forEach(function (action) {
          remainingTime = remainingTime - progressInterval;
          action(remainingTime, time);
        });
      }, progressInterval);

      setTimeout(function () {
        clearInterval(progressIntervalId);
        _this._onReadyActions.forEach(function (action) {
          action(name, size, cost);
        });
      }, time);
    }
  }]);

  return PizzaOrder;
})();

exports.default = PizzaOrder;

},{"./diavolo":2,"./margherita":3}],5:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pizza = (function () {
	function Pizza(name, size, cost, timeToPrepare) {
		_classCallCheck(this, Pizza);

		this._name = name;
		this._size = size;
		this._cost = cost;
		this._timeToPrepare = timeToPrepare;
	}

	_createClass(Pizza, [{
		key: "getName",
		value: function getName() {
			return this._name;
		}
	}, {
		key: "getSize",
		value: function getSize() {
			return this._size;
		}
	}, {
		key: "getCost",
		value: function getCost() {
			return this._cost;
		}
	}, {
		key: "getTimeToPrepare",
		value: function getTimeToPrepare() {
			return this._timeToPrepare;
		}
	}]);

	return Pizza;
})();

exports.default = Pizza;

},{}]},{},[1]);
