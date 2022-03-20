let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
console.log(array.flat())
console.log(array.flat(2))

let array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap(value => value * 2))
console.log(array2.flatMap(value => [value, value * 2]))

let hello = '    hello world   '
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())
console.log(hello.trim())

try {

} catch(error) {
    error
}

try {

} catch {
    error
}

let entries = [["name","Irving Dev"], ["age", 31]]
let user = Object.fromEntries(entries)
console.log(user.name)
console.log(user.age)

let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)

