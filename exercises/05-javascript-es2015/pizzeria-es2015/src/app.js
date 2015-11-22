import PizzaOrder from './pizza-order';

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

    var order = new PizzaOrder(pizza, size);
    order.onProgress(function (remaining, total) {
      var percent = Math.floor((1 - (remaining / total)) * 100);
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
