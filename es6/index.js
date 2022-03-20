function newFunction(name, age, country) {
    var name = name || 'Irving';
    var age = age || 32;
    var country = country || 'MX'
    console.log(name, age, country)
}

function newFunctionEs6(
    name = 'Irving',
    age = '32',
    country = 'MX'
) {
    console.log(name, age, country)
}

newFunctionEs6()
newFunctionEs6('Lop', '31', 'CO')

let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

let epicPhraseEs6 = `${hello} ${world}`
console.log(epicPhraseEs6)

let multiLine = "one line\n" + "other line"
console.log(multiLine)

let multiLineEs6 = `one line
other line es6
`
console.log(multiLineEs6)

let person = {
    'name': 'Irving',
    'age': 31,
    'country': 'MX'
};
console.log(person.name, person.age);

let { name, age } = person; // you need to use the same name as the objet
console.log(name, age);

let team1 = ['Irving', 'Steve']
let team2 = ['Josep', 'Carls']
let all = ['David', ...team1, ...team2]
console.log(all)

{
    var globalVar = "Global Var"
}

{
    let notGlobal = "Not Global"
}

console.log(globalVar)
console.log(notGlobal) // error

const a = 'a'
a = 'A' // error

let name1 = "Irving"
let age1 = 32

obj = { name1: name1, age1: age1}
console.log(obj)
objEs6 = { name1, age1 }
console.log(objEs6)

const names = [
    {name: 'Irving', age: 31},
    {name: 'Jessica', age: 27}
]

let listOfNames = names.map(function(item) {
    console.log(item.name)
})

let listOfNamesEs6 = names.map(item => console.log(item.name))

const square = num => num * num
console.log(square(3))

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!!')
        } else {
            reject('Ups!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))


class calculator {
    constructor() {
        this.valueA = 0
        this.valuaB = 0
    }

    sum(valueA, valuaB) {
        this.valueA = valueA
        this.valuaB = valuaB
        return this.valueA + this.valuaB
    }
}

const calc = new calculator()
console.log(calc.sum(3,7))

const hello = require('./module') 

console.log(hello())


function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)