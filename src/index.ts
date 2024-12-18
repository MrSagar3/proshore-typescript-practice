// tuple =>individual array element can be different
let user: [number, string] =[1,'Sagar']
console.log(user)

// enum => way to define a group of named constant values that we can use to represent a set of options.
enum Direction { Up, Down, Left ,Right}

console.log(Direction[0])

// type aliases and interface
// type aliases allows us to create a new name for existing type, making our code more readable and reusable

type Name= string
type Age = number

let personName: Name= "Sagar"
let personAge: Age= 22

console.log(personName,personAge)

//Interface is also similar to the Alias but they only apply to the object. It is class and object of OOP concept

interface Person{
    name: string
    age: number
    greet(): string
}

let person: Person ={
    name: "Sagar",
    age: 22,
    greet (){
        return `Hello, I'm ${this.name}`
    }
}

console.log(person.greet())

//some more example of interfaces
interface Area{
    height: number
    width: number
    calarea():string
}

let area : Area={
    height: 20,
    width: 10,
    calarea(){
        return `Area is ${this.height*this.width}`
    }

}

console.log(area.calarea())

// union and intersection

//union = allows us to specify that a value can be of multiple types

type StringOrNumber = string | number | boolean

let value1: StringOrNumber
value1=true
let value2: StringOrNumber
value2="Sagar"

console.log(value1)
console.log(value2)

// intersection = allows us to combine the multiple type into one. so, object or an variable of an intersection type must fulfill all the requirements of all combined types. its like creating a derived class from the base class of OOP

interface Animal{
    name:string
    age: number
}

interface CanFly{
    fly():void
}

type Bird =  Animal & CanFly

let bird: Bird ={
    name:"Sparrow",
    age: 2,
    fly(){
        console.log("Flying in the sky!")
    }
}

console.log(bird.name)
console.log(bird.age)
bird.fly()

// casting is the process of changing a value from one type to another

let value: number =42
// using 'as' to cast
let str:string =(value as unknown) as string

console.log(str)

// Generics => define a functionm class or interface with a placeholder type which can be specified when the code is used. this helps to resubability and flexibility of code

const identity=<T>(arg:T):T=>{
    return arg
}

let output =identity(2)
let output1 = identity("sagar")

console.log(output)
console.log(output1)