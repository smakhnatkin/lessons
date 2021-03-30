console.log('Объекты');

// объявление
let movie = {
    title: 'Батя'
};
// console.log(movie);

// movie = new Object({
//     title: 'Батя'
// });

// console.log(movie);

// очередь
const queue = [1, 2, 3, 2];

const position = queue.indexOf(2); // 1
// element[position + 1];


let element3 = {
    id: '3',
};

element3 = null; // ссылку


let element2 = {
    id: '2',
    nextElement: element3
};

let element1 = {
    id: '1',
    nextElement: element2
};


//  console.log(element1.nextElement.id);

const showAd = function() { // метод
    // console.log('Кинотеартр Окко за 1 рубль');
    return;
}


const movie1 = {
    title: 'Батя', // field // поле
    duration: 5200000, 
    cast: [{}, {}],
    getTitle: () => { // метод
        console.log(this);
        return;
    }
};

console.log('+++', movie1.getTitle());

const getTitle = movie1.getTitle;

console.log('---', getTitle());


// 6 спобосов переопределения контекста в js




const movie2 = movie1; // копирование ссылки?
const movie4 = { ...movie1 }; // клонирование // clone

const movie3 = {
    ...movie1,
    cast: { ...movie1.cast },
    nextEpisode: { ...movie1.nextEpisode }
}; // клонирование // clone



movie2.title = 'Шрек';
movie2.duration = 60000000;
movie2.description = 'Мультфильм про доброго монстра';

// console.log(showAd);
// console.log(showAd());


const math = {
    sum: function(a, b) { return a + b } 
}
