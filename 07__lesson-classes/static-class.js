// Analog Animal.whatIs = function() {}
class Animal {
    static version = 15
    static whatIs() {
        console.log(this.version)
    }
}

class Dog extends Animal {
    constructor() {
        super()
    }
    setVersion() {
        super.version += 10
    }
}

const y = new Dog();
