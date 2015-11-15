var Animal = Class.create({
    init: function (name) {
        this.name = name;
    },
    eat: function () {
        console.log(this.type + "es can eat");
    },
    sleep: function () {
        console.log(this.type + "es can sleep");
    }
});

// Fish inherits from Animal
var Fish = Class.extend(Animal, {
    init: function (name) {
        Animal.prototype.init.call(this, name);

        this.type = "Fish";
        this.legsNumber = 0;
    },
    swim: function () {
        console.log(this.type + "es can swim")
    }
});

// Salmon inherits from Fish
var Salmon = Class.extend(Fish, {
    init: function (name) {
        Fish.prototype.init.call(this, name);

        this.saltWater = false;
    }
});

// Shark inherits from Fish
var Shark = Class.extend(Fish, {
    init: function (name) {
        Fish.prototype.init.call(this, name);

        this.saltWater = true;
    }
});

// Mammal inherits from Animal
var Mammal = Class.extend(Animal, {
    init: function (name) {
        Animal.prototype.init.call(this, name);

        this.type = "Mammal";
    },

    walk: function () {
        console.log(this.type + "es can walk");
    }
});

// Cat inherits Mammal
var Cat = Class.extend(Mammal, {
    init: function (name) {
        Mammal.prototype.init.call(this, name);

        this.legsNumber = 4;
    },
    meow: function () {
        console.log(this.type + "es can meooow");
    }
});


var cat = new Cat("Cat name");
console.log(cat);
console.log(cat.name);
cat.eat();
cat.sleep();
cat.walk();
cat.meow();

console.log("------------------------------------");

var shark = new Shark("Shark name");
console.log(shark);
shark.eat();
shark.sleep();
shark.swim();