const string = "Javascript es cool, con Javascript puedo crear el futuro de la web"
const repleacedString = string.replace("Javascript", "Kotlin")
console.log(string)
console.log(repleacedString)
const replacedStringAll = string.replaceAll("Javascript", "Kotlin")
console.log(replacedStringAll)

class Message {
    show(val) {
        this.#privateShow(val)
    }

    #privateShow(val) {
        console.log(val)
    }
}

const message = new Message()
message.show('Hello!')
//message.privateShow('Hello') // error

const promise1 = new Promise((resolve, reject) => reject("reject 1"))
const promise2 = new Promise((resolve, reject) => resolve("resolve 2"))
const promise3 = new Promise((resolve, reject) => resolve("resolve 3"))

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
}

let isTrue = true
let isFalse = false
let unknow = undefined
console.log(isTrue &&= isFalse)
console.log(isTrue ||= isFalse)
console.log(unknow ??= isFalse)
