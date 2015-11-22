import Margherita from './margherita';
import Diavolo from './diavolo';

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

class PizzaOrder {
    constructor(pizzaName, pizzaSize) {
        this._pizza = pizzaFactory(pizzaName, pizzaSize);
        this._onReadyActions = [];
        this._onProgressAcions = [];
    }

    getPizzaInfo() {
        var name = this._pizza.getName();
        var size = this._pizza.getSize();
        var cost = this._pizza.getCost();
        var time = this._pizza.getTimeToPrepare();

        return {
            name,
            size,
            cost,
            time
        };
    }

    onProgress() {
        this._onProgressAcions.push(callback);
    }

    onReady() {
        this._onReadyActions.push(callback);
    }

    start() {
        var { name, size, cost, time } = this.getPizzaInfo();
        var progressInterval = time / 10;
        var remainingTime = time;

        var progressIntervalId = setInterval(() => {
          this._onProgressAcions.forEach((action) => {
            remainingTime = remainingTime - progressInterval;
            action(remainingTime, time);
          });
        }, progressInterval);

        setTimeout(() => {
          clearInterval(progressIntervalId);
          this._onReadyActions.forEach((action) => {
            action(name, size, cost);
          });
        }, time);
    }
}

export default PizzaOrder;
