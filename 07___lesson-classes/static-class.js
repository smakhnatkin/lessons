class Dog {
    static version = 15
    static whatIs() {
        console.log(this.version)
    }
}


class Y extends Dog {
    constructor() {
        super()
    }
    setVersion() {
        super.version += 10
    }
}

const y = new Y();
const z = new Y();

y.setVersion()

console.log(z.version, y.version, Dog.version);


// console.log(Dog.whatIs())

// // аналог
// // Dog.whatIs = ...

// // Со static мы можем получить доступ к методам без создания экземпляров нового объекта класса.
// console.log( Dog.whatIs() );


const p = {
    say() {

    }
}

const newObj = Object.assign({}, p);

console.log(newObj);





// const Button extends React.Component (props) {
//     constructor(props) {
//         super(props)
//     }

//     componentWillMount()

//     isReady = get();
//     hanadleClick() {}
//     render() {
//         return <div />
//     }
// }