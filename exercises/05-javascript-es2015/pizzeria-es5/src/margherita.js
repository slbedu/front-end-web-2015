var Margherita = (function () {
  'use strict';

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

  function Margherita(size) {
    var costAndTime = calculateCostAndTime(size);
    Pizza.call(this, NAME, size, costAndTime.cost, costAndTime.time);
  }

  Margherita.prototype = Object.create(Pizza.prototype);
  Margherita.prototype.constructor = Margherita;

  return Margherita;
}());
