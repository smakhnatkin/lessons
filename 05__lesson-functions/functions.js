function createSetCounter () {
    let counter = 0;
    return function(value) {
        counter = value;
    }
}

// создание функции setCounter
const setCounter = createSetCounter();

// установка counter, который существует в замыкании
setCounter(10);