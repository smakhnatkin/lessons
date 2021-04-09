
// __proto__
const personMethods = {
    sleep: function () {
        console.log('zzz');
    }
}

const studentMethods = {
    __proto__: personMethods,
    name: 'studentMethods',
    learn: function () {
        console.log(this.name);
    }
}

const studentMGUMethods = {
    __proto__: studentMethods,
    learn: function () {
        console.log('wow wow wow');
    }
}









// создание
// let neeObject = {};
let neeObject = new Object(); // <--

// console.log('neeObject', neeObject, neeObject2, neeObject === neeObject2);



// функцию() -> объект
function Person(name) {
    this.name = 'Person';
    this.sleep = function () {
        console.log('zzz')
    };
}

function X() {}

const student = new Person('Сергей');
// console.log(Person.prototype.constructor = X); 
// {
//     constructor: Person
// }

// console.log(Person.prototype, student.constructor);
// console.log(student instanceof Person);

Person.prototype = {
    name: 'studentMethods',
    learn: function () {
        console.log(this.name);
    }    
}

function StudentMGU(name) {
    this.name = name;
    this.learn = function () {
        console.log(this.name + 'читает учебник');
    }
}

StudentMGU.prototype = Object.create(Person.prototype);
StudentMGU.prototype.set = function() {} 

const ivanov = new Person('Вася');

for (let key in ivanov) {
    if (ivanov.hasOwnProperty(key)) {
        console.log(key);
    }
}






// const x = Object.create(personMethods, {
//     run: function() {}
// });


// console.log(x);



