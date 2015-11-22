var Diavolo = (function () {
  'use strict';

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

  function Diavolo(size) {
    var costAndTime = calculateCostAndTime(size);
    Pizza.call(this, NAME, size, costAndTime.cost, costAndTime.time);
  }

  Diavolo.prototype = Object.create(Pizza.prototype);
  Diavolo.prototype.constructor = Diavolo;

  return Diavolo;
}());
