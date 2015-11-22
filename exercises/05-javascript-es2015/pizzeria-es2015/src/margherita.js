import Pizza from './pizza';

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

const NAME = 'Margherita';

class Margherita extends Pizza {
  constructor(size) {
	  var costAndTime = calculateCostAndTime(size);
	  super(NAME, size, costAndTime.cost, costAndTime.time);
  }
}

export default Margherita;
