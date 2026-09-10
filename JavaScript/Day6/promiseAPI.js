// promise.all([p1,p2,p3])
// the above promise run in parallel the output will be an array with value of all this result
// it will wait for all o them to finish then result will be given
// if any one of the promises gets rejected then the output will be error(it won't wait for any other promise)

// promsie.allSettled([p1, p2, p3])
// this also runs the promises in parallel, but when an promise fails it returns the successfull promises as well as the failed one

// promise.race([p1, p2, p3])
// this also runs the promises in parallel, but it returns the value of the first settled promise(either value or error)

// promise.any({p1, p2, p3})
// this also runs the promises in parallel, but returns the value of the first succesful promise, and if all the promises fail then it will give an aggrigated error(combination of all errors)

const p1 = new Promise((resolve, reject) => {
    // setTimeout(()=>resolve("success p1"), 3000);
    setTimeout(()=>reject("p1 failed"), 3000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(()=>resolve("success p2"), 1000);
    setTimeout(()=>reject("p2 failed"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(()=>resolve("success p3"), 2000);
    setTimeout(()=>reject("p3 failed"), 4000);
})

// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res)
// }).catch((err) => {
//     console.error(err);
// });

// Promise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res)
// }).catch((err) => {
//     console.error(err);
// }); // returns an object


// Promise.race([p1, p2, p3]).then(res => {
//     console.log(res)
// }).catch((err) => {
//     console.error(err);
// });

// what is a settled?

Promise.any([p1, p2, p3]).then(res => {
    console.log(res)
}).catch((err) => {
    console.error(err);
    console.log(err.errors);
});