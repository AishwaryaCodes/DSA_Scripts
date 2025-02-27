// Classes 

class human {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
    
greet() {
    console.log(`hello word, my name is ${this.name} and my age is ${this.age}!`);
}

}

const h1 = new human("Alice", 20);
const h2 = new human("Bob", 22);

h1.greet();
h2.greet();

