//Example 1, Bob the Builder
class Person {
    constructor(name, age, job) {
        //properties here
        this.name = name;
        this.age = age;
        this.job = job;
    }
    //methods here
    talks() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} and I work as a ${this.job}`);
    }
    work() {
        console.log(`I am going to fix this, because I am ${this.name}, the ${this.job}.`)
    }
}
//create a new instance of the class
const bob = new Person ("Bob", 41, "builder");

bob.talks();
bob.work();


//Example 2, Stanley the dog
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    walks() {
        console.log(`Taking ${this.name} the ${this.breed} for a walk!`);
        return this;
    }
    eats() {
        console.log(`${this.name} has had some food!`);
        return this;
    }
}
const stanley = new Dog("Stanley", "German Shepherd");

stanley.walks().eats();

//Example 3,
class Animal {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
    }
    drinks() {
        this.health += 5;
        return this;
    }
    eats() {
        this.health += 5;
        this.hunger += 10;
        console.log (`${this.name}'s health is ${this.health}`);
        return this;
    }
    stats() {
        return console.table({
            name: this.name,
            health: this.health,
        });
    }
}

class Dog extends Animal {
    constructor(name, happy) {
        //Dog specific properties here
        super (name,happy);
        this.happy = happy;
    }
    //Dog specific methods
    playBall() {
        this.health += 10;
        this.hunger -= 10;
        console.log (`${this.name} is happy`);
        return this;
    }
    walks() {
        console.log(`Taking ${this.name} for a walk, they are ${this.happy}`);
        return this;
    }
}
class Cat extends Animal {
    constructor (name, content) {
        super(name, content);
        this.content = content;
    }
    playWool() {
        this.health += 10;
        this.hunger -= 10;
        console.log(`${this.name} is taking a lovely nap, they are ${this.content}`);
        return this;
    }
}