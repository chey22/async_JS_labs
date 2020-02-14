// // Promise.then() Chaining

// // first use values 6 and 2

// // if you change the values to 1 and 1, the .catch logs the error to the console because each math function checks for a negative number

// slowMath.add(1, 1).then((value) => {
//     console.log(value);
//     return slowMath.multiply(value, 2)
// }).then((value) => {
//     console.log(value);
//     return slowMath.divide(value, 4)
// }).then((value) => {
//     console.log(value);
//     return slowMath.subtract(value, 3);
// }).then((value) => {
//     console.log(value);
//     return slowMath.add(value, 98);
// }).then((value) => {
//     console.log(value);
//     return slowMath.remainder(value, 2)
// }).then((value) => {
//     console.log(value);
//     return slowMath.multiply(value, 50)
// }).then((value) => {
//     console.log(value);
//     return slowMath.remainder(value, 40)
// }).then((value) => {
//     console.log(value);
//     return slowMath.add(value, 32)
// }).then((value) => {
//     console.log(value);
//     return console.log(`The final reult is ${value}`)
// }).catch((e) => {
//     return console.log(e)
// })


// Async/Await in ES6

doMath = async () => {
    try {
        result = await slowMath.add(6, 2)
        console.log(result);
        result = await slowMath.multiply(result, 4)
        console.log(result)
        result = await slowMath.subtract(result, 3)
        console.log(result)
        result = await slowMath.add(result, 98)
        console.log(result)
        result = await slowMath.remainder(result, 2)
        console.log(result)
        result = await slowMath.multiply(result, 50)
        console.log(result)
        result = await slowMath.remainder(result, 40)
        console.log(result)
        result = await slowMath.add(result, 32)
        console.log(result)
    } catch (error) {
        return console.log(error)
    }
}
doMath();