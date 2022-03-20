const button = document.getElementById("btn")

button.addEventListener("click", async function () {
    const module = await import("./file.js")
    module.hello()
})

const aBigNumber = 9007199254740991n
const anotherBigNumber = BigInt(9007199254740991)
console.log(aBigNumber)
console.log(anotherBigNumber)

const promise1 = new Promise((resolve, reject) => reject("reject 1"))
const promise2 = new Promise((resolve, reject) => resolve("resolve 2"))
const promise3 = new Promise((resolve, reject) => resolve("resolve 3"))

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))

console.log(window) // error beacuse we are in Node
console.log(globalThis)

const fooo = null ?? 'default string'
console.log(fooo)

const user = {}
console.log(user.profile.email) // error if profile or email does not exist
const user2 = {}
console.log(user2?.profile?.email)

if(user2?.profile?.email) {
    console.log('user has email')
} else {
    console.log('Error, not email')
}
