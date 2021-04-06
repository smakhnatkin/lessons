
// const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);















// const getMyName = function(age) {
//     return `${this.name}: ${age}`;
// };


// const person1 = {
//     name: 'Илья'
// };
// const person2 = {
//     name: 'Вероника'
// };

// console.log(getMyName());
// console.log(getMyName(45));

// console.log(getMyName.bind(person1)(30));


// const bind = function(fn, context) {
//     return function(...args) {
//         return fn.apply(context, [...args]);
//     }
// };


// const bind = (fn, context, ...bindArgs) => (...args) => fn.apply(context, [...bindArgs, ...args]);



// console.log(bind(getMyName, person1)(30));

















// const bind = (fn, context, ...bindArgs) => (...args) =>
//         fn.apply(context, [...bindArgs, ...args]);







// оператор ...

// const x = {
//     name: 'Елена',
//     age: 28,
//     sex: 'женский'
// };

// const { ...y } = x;
// console.log('keys', y === x);

// const y = { ...x }; // клонирование


// const x1 = [ 'Елена', 28 ];
// const y1 = [ ...x1 ];


// const x2 = [ 'Елена', 28, 1, 123, 45 ];
// const x4 = [ 28, 1, 123, 45 ];

// const [ _, ...numbers ] = x2;
// const [ __, ...some ] = x4;

// console.log(x2.shift());
// console.log(x2.slice(1));
// console.log(x2.filter((item, index) => index !== 0));
// reduce, forEach
// for, while, do while
// console.log(x2.splice(0, 1), x2);
// console.log(x2.splice(1));
// console.log([x2[1], x2[2], x2[3], x2[4]]);
// console.log(x2.reverse().pop(), x2);

// const [ name, ...numbers ] = x2;
// const arr = [
//     ...numbers,
//     ...some
// ];

// function sum(a, b) {
//     return args;
// }


// sum(1, 2, 4, 5) // 12
// sum(1, 2) // 3



// const sum = (...args) => args.reduce((result, current) => result + current);

// console.log(sum(1, 2, 4, 5)) // 12
// console.log(sum(1, 2)) // 3


// console.log(sum(1)(3)(10)(15)(15)(16)) // 8


// const sumAB = function(a) {
//     return function(b) {
//         return a + b;
//     }
// };


// console.log(sumAB(-5)(23)) 












// // function declaration
// function sum (...args) {
//     return args.reduce((result, current) => result + current, 0)
// }

// function expression
// const sum = function (...args) {
//     return args.reduce((result, current) => result + current, 0)
// }


// function expression
// const sum = function (...args) {
//     return args.reduce((result, current) => result + current, 0)
// }
// // named function expression
// const sum = function mySum (...args) {
//     mySum();
//     return args.reduce((result, current) => result + current, 0)
// }


// // arrow function
// const sum = (...args) => args.reduce((result, current) => result + current, 0);


// // 1
// const x = 1
// const ggg = function() {
//     return x;
// };

// // 2
// console.log(xxx);       // f () {};
// console.log(xxx());     // undefined


const sum = (a, b) => a + b;
const sum11 = a => sum(a, 11); 
// const sum11 = sum.bind(null, 11);

// console.log(sum11(1));

// const creator = some => () => some;
// const two = creator(2); // ?
// const four = creator(4); // ?

// two() // 2

// const return4 = creator(4);


// console.error(return4()); 

const handlerCreator = id => value => ({
    id,
    value
});

// const handleAvatarClick = handlerCreator('avatar');
// const handleProfileClick = handlerCreator('profile');
// const handleContantsClick = handlerCreator('contacts');


const handleAvatarClick = value => ({
    id: 'avatar',
    value
});

const handleProfileClick = value => ({
    id: 'profile',
    value
});

handleContantsClick = value => ({
    id: 'contacts',
    value
});



// каждую секунду
const say = ''


const timer = setInterval(() => {
    console.warn((Math.random() * 100).toFixed(0));
}, 1);


const timeout = setTimeout(() => {
    console.warn('Конец');
    clearInterval(timer);
}, 0);

clearTimeout(timeout);



// setTimeout(() => {
//     clearTimeout(sayTimeout);
//     const sayTimeout = setTimeout(() => {
//         say();
//     }, 1);
// }, 1);


























// function factorial(n) {
    //     if (n <= 1) return 1;
    //     let result = 0;
    //     const todoStack = []; // TODO: Plan some tasks
    //     while (todoStack.length > 0) {
    //         const task = todoStack.pop(); // TODO: process the task
    //     }
    //     return result;
    // }
    



    /** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/

// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);



// const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);

// function factorial(n) {
//     let res = 1;
//     for (let i = 2; i <= n; i++) {
//       res *= i;
//     }
//     return res;
//   }







// function factorial(n) {
//     let res = 1;
//     for (let i = 2; i <= n; i++) {
//       res *= i;
//     }
//     return res;
//   }



// // произведение целый от 1 до n 
// const factorial = function f(n) {
//     let result = 1;
//     if (n > 1) {
//         result = n * factorial(n-1);
//     } 
//     return result;
// };  

// const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);
// console.log(factorial(3));


// const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);

// const sumAB = function(a) {
//     if (isTheEnd) {
//         return a
//     } else {
//         return sumAB()
//     }
// };


// function sum(a) {

//     let currentSum = a;
  
//     function f(b) {
//       currentSum += b;
//       return f;
//     }
  
//     f.toString = function() {
//       return currentSum;
//     };
  
//     return f;
//   }
  
// console.log(sumAB(-5)(23)(10)) 



// function sum(n) {
//     var v = function(x) {
//       return sum(n + x);
//     };
  
//     v.valueOf = v.toString = function() {
//       return n;
//     };
  
//     return v;
//   }
  
//   console.log(+sum(1)(2)(3)(4));




const sum = (a, b) => a + b;

const Sum = (a, b) => <div>{alert(111)}</div>;