const names1 = [2, 'sdfsdf', {}];

// список пользователей
const users = [{
    name: 'Вася',
    age: 20,
}, {
    name: 'Коля',
    age: 40,
}, {
    name: 'Сережа',
    age: 30,
}];

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].age);
// }

// let i = 0;
// while (i < users.length) {
//     console.log(users[i].age);
//     i++;
// }

// 3 => 2
// const filteredUsersNames = [];
// users.forEach((user) => {
//     if (user.name !== 'Сережа') {
//         filteredUsersNames.push(user.name);
//     }
// });

// console.log(filteredUsersNames);

// users.push('Василий'); // 4
// [].concat(users, 'Василий');

// const y = [...users, 'Василий'];

// filteredUsersNames.push('Василий');

// 3 -> 3
const names = users
    .filter((user) => {
        return user.name !== 'Сережа';
    })
    .map((user) => {
        return user.name;
    });

// O(n) // 
// O(n2) //

const names4 = users
    .filter(({ name }) => name !== 'Сережа')
    .map(({ name }) => name);

// ??
const filteredUsersNames = [];
users.forEach(({ name }) => {
    if (name !== 'Сережа') {
        filteredUsersNames.push(name);
    }
});

console.log(names);

const media = [{
    name: 'Шерлок',
    type: 'tvshow',
    year: '2016',
    episodes: [{
        name: 'Знакомство с Шерлоком',
        episodeNumber: '10'
    }, {
        name: 'Собака Баскервили',
        episodeNumber: '1'
    }]
}, {
    name: 'Шрек',
    year: '2014',
    type: 'movie'
}, {
    name: 'Декстер',
    type: 'tvshow',
    year: '2010',
    episodes: [{
        name: 'Побег',
        episodeNumber: '2'
    }, {
        name: 'Жизнь после',
        episodeNumber: '3'
    }, {
        name: 'Первая история декстера',
        episodeNumber: '1'
    }]
}, 
];

// список всех эпизодов по порядку
// 1 - получить все tv show
// 2 - episodes // sort
// 3 - ...
['Знакомство с Шерлоком', 'Собака Баскервили', 'Первая история декстера', 'Побег', 'Жизнь после']


// const episodesNames = media
//     .filter((mediaItem) => mediaItem.type === 'tvshow')
//     .sort(mediaItem.)



// films.filter(({ type }) => type === ‘tvshow’).map(({ episodes }) => episodes.sort((it1, it2) => it1.episodeNmber - it2.episodeNumber)).flatten()




items.reduce((acc, item) => {}, 0);  

items.reduce();  
items.map();

const myMap = (array, callback) => array.reduce((result, currentItem) => ([
    ...result, callback(currentItem)
]), []);


myMap(array, func); // array.reduce()
myReduce(array, func); // array.map()
