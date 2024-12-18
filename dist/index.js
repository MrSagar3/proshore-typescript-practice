"use strict";
let user = [1, 'Sagar'];
console.log(user);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction[0]);
let personName = "Sagar";
let personAge = 22;
console.log(personName, personAge);
let person = {
    name: "Sagar",
    age: 22,
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};
console.log(person.greet());
let area = {
    height: 20,
    width: 10,
    calarea() {
        return `Area is ${this.height * this.width}`;
    }
};
console.log(area.calarea());
let value1;
value1 = true;
let value2;
value2 = "Sagar";
console.log(value1);
console.log(value2);
let bird = {
    name: "Sparrow",
    age: 2,
    fly() {
        console.log("Flying in the sky!");
    }
};
console.log(bird.name);
console.log(bird.age);
bird.fly();
let value = 42;
let str = value;
console.log(str);
const identity = (arg) => {
    return arg;
};
let output = identity(2);
let output1 = identity("sagar");
console.log(output);
console.log(output1);
//# sourceMappingURL=index.js.map