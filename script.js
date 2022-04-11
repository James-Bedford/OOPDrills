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
