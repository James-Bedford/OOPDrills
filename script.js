let person1 = {
  name: "George",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

let person2 = {
  name: "Sarah",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
let person3 = {
  name: "Joe",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
let person4 = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
let person5 = {
  name: "Emma",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

//Now usinf pseudo classes.

function Person(name, age, city) {
  this.n = name;
  this.a = age;
  this.c = city;
}
Person.prototype.SayHello = function () {
  alert(`My name is ${this.n} I am ${this.a} and I live in ${this.c}  `);
};

let Person1 = new Person(`George`, 17, `New York`);
let Person2 = new Person(`Sarah`, 28, `Dublin`);

Person1.SayHello();
Person2.SayHello();

//ES6 Class way

class People {
  constructor(name, age, city) {
    this.n = name;
    this.a = age;
    this.c = city;
  }
  sayHello() {
    alert(
      `My name is ${this.n} and I am ${this.a} years old and I live in ${this.c}`
    );
  }
}

let p1 = new People(`George`, 17, `Reading`);
let p2 = new People(`Sarah`, 28, `Colcester`);

p1.sayHello();
p2.sayHello();
console.log(p1); //People {n: 'George', a: 17, c: 'Reading'}
console.log(p2.n); //sarah

class Vehicle {
  constructor(make, type, wheels) {
    this.m = make;
    this.t = type;
    this.w = wheels;
  }
  about() {
    alert(
      `Make of Vehicle ${this.m}, type ${this.t} and number of wheels ${this.w}`
    );
  }
}

let v1 = new Vehicle(`Ford`, `Car`, `Four`);
let v2 = new Vehicle(`Honda`, `Motor Bike`, `Two`);

v1.about();
v2.about();

class Truck extends Vehicle {
  constructor(make, type, wheels, doors, truckBed) {
    super(make, type, wheels);

    this.d = doors;
    this.tb = truckBed;
  }
  about() {
    alert(
      `Make of Vehicle ${this.m}, type ${this.t} and number of wheels ${this.w} and ${this.d} doors and does it have a bed ${this.tb}?`
    );
  }
}

let t1 = new Truck(`Bedford`, `Truck`, `Six`, `two`, true);
t1.about();

class Sedan extends Vehicle {
  constructor(make, type, wheels, doors, mpg) {
    super(make, type, wheels);
    this.d = doors;
    this.mp = mpg;
  }
  about() {
    alert(`This sedan does ${this.mp} to the gallon has ${this.d} doors
    has ${this.w} made by ${this.m}`);
  }
}

let s1 = new Sedan(`Bruce`, `sedan`, 4, 4, 38);
s1.about();

class MotorBike extends Vehicle {
  constructor(make, type, wheels, handleBars, doors) {
    super(make, type, wheels);
    this.hb = handleBars;
    this.nd = doors;
  }
  about() {
    alert(`This motorBike has ${this.nd} doors and ${this.hb} handlebars `);
  }
}
let mb1 = new MotorBike("Honda", "racer", 2, 1, 0);

mb1.about();
