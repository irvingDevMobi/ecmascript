const obj = {
    name: 'Irving',
    age: 32,
    country: 'MX'
}

let { name, ...all } = obj
console.log(all)

const info = {
    name: 'Irving',
    age: 32
}

const info1 = {
    ...info,
    country: 'MX'
}
console.log(info1)

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finishing'))
