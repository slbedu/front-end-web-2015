import Pizza from './pizza';

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

const NAME = 'Diavolo';

class Diavolo extends Pizza {
  constructor(size) {
	  var costAndTime = calculateCostAndTime(size);
	  super(NAME, size, costAndTime.cost, costAndTime.time);
  }
}

export default Diavolo;
