// // реализация в стиле ES5
// function Person (name) {
//     this.name = name;
// }

// // Определяем свойства/методы
// Person.prototype = {
//     eyes: 2,
//     mouth: 1,
//     sleep: function () {
//        return 'zzz';
//     }
// };

// // Создаем человека (Person)
// const person = new Person('Nick');

// // and we can do:
// console.log(
//     `name: ${person.name}`,
//     `eyes: ${person.eyes}`,
//     `mouth: ${person.mouth}`,
//     person.sleep()
// );
// console.log('*** EMPLOYEE ***')


// // Теперь, если у нас есть «класс» сотрудника, то можно наследовать его свойства.
// function Employee (name, salary) {
//     this.name = name;
//     this.salary = salary;
// }

// // Прототип наследования
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee; // Устанавливаем его конструктор

// // Повторяем то же самое
// // Создаем сотрудника
// const employee = new Employee('John', 3000);

// // и прописываем следующее:
// console.log(
//     `name: ${employee.name}`,
//     `salary: ${employee.salary} USD`,
//     `eyes: ${employee.eyes}`,
//     `mouth: ${employee.mouth}`,
//     employee.sleep()
// );















// es6
// ================================
class Person {
  constructor (name) {
    this.name = name;
    this.eyes = 2;
    this.mouth = 1;
  }

  age = 15
}

const x = new Person('Сергей');

console.log(x.age = 9)
// x.setAge(x.getAge() + 10);


class Employee extends Person {
  constructor (name, salary) {
    super(name);
    this.salary = salary;
  }

  sleep2 = super.sleep;
}
const p1 = new Person('Nick');

// теперь можно сделать следующее:
// console.log(
//   `name: ${p1.name}`,
//   `eyes: ${p1.eyes}`,
//   `mouth: ${p1.mouth}`,
//     p1.sleep()
// );

// Создаем сотрудника
const em1 = new Employee('John', 3000);

// // прописываем вот это:
// console.log(
//   // `name: ${em1.name}`,
//   // `salary: ${em1.salary} USD`,
//   // `eyes: ${em1.eyes}`,
//   // `mouth: ${em1.mouth}`,
//     em1.sleep2()
// );