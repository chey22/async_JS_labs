// // Promise.then() Chaining

// // first use values 6 and 2

// // if you change the values to 1 and 1, the .catch logs the error to the console because each math function checks for a negative number

// slowMath.add(6, 2)
//     .then((val) => {
//         console.log(val);
//         return slowMath.multiply(val, 2)
//     })
//     .then((val) => {
//         console.log(val);
//         return slowMath.divide(val, 4)
//     })
//     .then((val) => {
//         console.log(val);
//         return slowMath.subtract(val, 3);
//     })
//     .then((val) => {
//         console.log(val);
//         return slowMath.add(val, 98);
//     })
//     .then((val) => {
//         console.log(val);
//         return slowMath.remainder(val, 2)
//     })
//     .then((val) => {
//         console.log(val);
//         return slowMath.multiply(val, 50)
//     })
//     .then((val) => {
//         console.log(val);
//         return slowMath.remainder(val, 40)
//     })
//     .then((val) => {
//         console.log(val);
//         return slowMath.add(val, 32)
//     })
//     .then((val) => {
//         console.log(val);
//         return console.log(`The final reult is ${val}`)
//     })
//     .catch((error) => {
//         return console.log(error)
//     })


// Async/Await in ES6

doMath = async () => {
    try {
        let result = await slowMath.add(6, 2)
        console.log(result);
        result = await slowMath.multiply(result, 2)
        console.log(result)
        result = await slowMath.divide(result, 4);
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
        console.log(`The final reult is ${result}`)
    } catch (error) {
        return console.log(error)
    }
}
doMath();