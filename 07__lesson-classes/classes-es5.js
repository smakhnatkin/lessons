// реализация в стиле ES5
function Person (name) {
    this.name = name;
}

// Определяем свойства/методы
Person.prototype = {
    eyes: 2,
    mouth: 1,
    sleep: function () {
       return 'zzz';
    }
};

// Создаем человека (Person)
const person = new Person('Nick');

// and we can do:
console.log(
    `name: ${person.name}`,
    `eyes: ${person.eyes}`,
    `mouth: ${person.mouth}`,
    person.sleep()
);
console.log('*** EMPLOYEE ***')


// Теперь, если у нас есть «класс» сотрудника,
// то можно наследовать его свойства.
function Employee (name, salary) {
    this.name = name;
    this.salary = salary;
}

// Прототип наследования
Employee.prototype = Object.create(Person.prototype);

// Устанавливаем его конструктор
Employee.prototype.constructor = Employee;

// Повторяем то же самое
// Создаем сотрудника
const employee = new Employee('John', 3000);

// и прописываем следующее:
console.log(
    `name: ${employee.name}`,
    `salary: ${employee.salary} USD`,
    `eyes: ${employee.eyes}`,
    `mouth: ${employee.mouth}`,
    employee.sleep()
);
