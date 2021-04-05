// bind

// const bind = (fn, context, ...bindArgs) => (...args) => fn.apply(context, ...bindArgs, ...args);




// console.log('Снова функции');

// оператор ...

// const x = {
//     name: 'Елена',
//     age: 28
// };
// const { name, age } = x;
// const y = { ...x };


// const x1 = [ 'Елена', 28 ];
// const y1 = [ ...x1 ];


// const x2 = [ 'Елена', 28, 1, 123, 45 ];
// const [ name1, ...others ] = x2;

// const [ ...spliced ] = x2;


// const sum = (...args) => args.reduce((result, current) => result + current, 0);






// // function declaration
// function sum (...args) {
//     return args.reduce((result, current) => result + current, 0)
// }


// // function expression
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


const x = 1
const ggg = function() {
    return x;
};

console.log(ggg);       // f () {};
console.log(ggg());     // undefined


// const creator = (some) => () => some;

// const return4 = creator(4);


// console.error(return4()); 


const handlerCreator = id => value => ({
    id,
    value
});

const handleAvatarClick = handlerCreator('avatar');
const handleProfileClick = handlerCreator('profile');
const handleContantsClick = handlerCreator('contacts');


// const handleAvatarClick = value => ({
//     id: 'avatar',
//     value
// });

// const handleProfileClick = value => ({
//     id: 'profile',
//     value
// });

// handleContantsClick = value => ({
//     id: 'contacts',
//     value
// });



// каждую секунду

// const timer = setInterval(() => {
//     console.warn((Math.random() * 100).toFixed(0));
// }, 1000);

// const timeout = setTimeout(() => {
//     clearInterval(timer);
//     console.warn('Конец');
// }, 5000);

// clearTimeout(timeout);



const say = () => {
    console.warn((Math.random() * 100).toFixed(0));
}

setTimeout(() => {
    clearTimeout(sayTimeout);
    const sayTimeout = setTimeout(() => {
        say();
    }, 1);
}, 1);