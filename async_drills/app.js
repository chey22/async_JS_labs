// Part II - Timing Out

// steps 1 and 2
myFunc = (msg) => {
    console.log(msg);
}

myFunc('You\'ve got mail!');

// // step 3
setTimeout(() => {
    myFunc('More Mail!');
}, 2000);

// step 4
getWords = (words) => {
    console.log(words);
};

getWords('instant');

setTimeout(() => {
    getWords('3 seconds');
}, 3000);

setTimeout(() => {
    getWords('2 seconds');
}, 2000);

setTimeout(() => {
    getWords('1 second');
}, 1000);


// Part III - Callbacks and Recursion

// Step 1
done = () => {
    console.log('Job\'s done!')
};

// Steps 2 and 3
countDown = (num, callback) => {

setTimeout(() => {

    if (num > 0) {
        console.log(num);
        countDown(num - 1, callback);
    } else {
        callback();
    }
    }, 1000);
}

countDown(7, done);


// Part IV - Promises

// Step 1
let lunchTime = false

orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime == true) {
            let meal = {
                lunch: 'quesadilla',
                drink: 'Baja Blast'
            };
            resolve(meal)
        } else {
            let err = new Error('Not time yet!')
            reject(err)
        }
    });
};

orderMeSomeFood()
    .then(function (meal) {
        console.log(meal)
    })
    .catch(function (err) {
        console.log(err)
    });