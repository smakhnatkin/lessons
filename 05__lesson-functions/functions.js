// // // три способа задания функции

// // // 1 – function declaration
// // function functionDeclaration(a) {
// //     return a;
// // }

// // // 2 – function expression
// // const functionExpression = function () {
// //     return true;
// // };

// // // 2.1 – named function expression
// // // const functionExpression = function functionName () {
// // //     return true;
// // // };

// // // 3 – arrow function
// // const arrowFunction = () => {
// //     return true;
// // }; 


class Animal {
    constructor() {
        this.name = '11'
    }
}

// function sum(a, b) { // 1
//     return a + b;
// }

// let x = 0;
// let y;

// x = sum(2, 5); // ошибка? не будет?

// console.log('1', x);

// const sub = function (a, b) {
//     return a - b;
// }

// y = sub(x, 1);



// console.log('2', y);

// // 1 - function declaration
// // var, let, const // undefined
// // построчное выполнение кода



// ===================

// // let xx = {
// //     xx: 0
// // }; 

// // const x = { y: 1 };

const x = {
    y: 10
};

const { y, ccc, ddd = 10 } = x;

console.log(y, ccc, ddd);

// // const some = ({ a, b, ...other }) => ({
// //    a, b, ...other
// // });

// // some({
// //     a: 2,
// //     b: 3,
// //     c: 13
// // })


// // function global() { 
// //     const main = function({ xx }) {
// //         xx = xx + 10;
// //         console.log('111', aa.xx); 
// //     }

// //     main(xx); 

// //     xx.xx = xx.xx + 10;
// //     console.log('222', xx.xx);
// // }

// // global(); 
// // console.log('333', xx.xx);


// // 1, 10
// // 2, 20  // 20
// // 3, 20  // 20



// const person = {
//     name: 'Слава',
//     surname: 'Иванов',
//     methods: {
//         getName: function () {
//             console.log(this);
//             return this.name; 
//         }        
//     }
// }

// const person2 = {
//     name: 'Евгения',
//     surname: 'Иванова',
//     methods: {
//         name:
//         getName: function () {
//             console.log(this);
//             return this.name; 
//         }        
//     }
// }

// const { methods: { getName } } = person;



// const getNamePerson2 = getName.bind(person2);
// const getNamePerson3 = bind(getName, person2);




// console.log(getName())
// console.log(getNamePerson2())





const creator = function () {
    let count = 0;

    const setCount = function (a) {
        if (a < 9 && a > 0) {
            count = a;
        } else {
            throw new Error ('Сорян, давай от 0 до 9');
        }
    }

    const getCount = function () {
        return count;
    }

    return {
        setCount,
        getCount
    };
}


const api = creator()
api.setCount(10);
console.log(api.getCount());

api.setCount(20);
console.log(api.getCount());




function multiply(num) {
    return function (num2) {
        return num * num2
    }
}

const multiTen = multiply(10)
console.log(multiTen(10))