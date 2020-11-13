const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        //reject('Something went wrong');
        // Can only resolve one argument. If more needed, use an object
        resolve('This is my resolved data');
        // This line gets ignored.  A promise is resolved or rejected once.
        //resolve('this is my other resolved data'); 
    }, 1500);
});

console.log('before');

// promise.then((data) => {
//     console.log('0', data);
// });

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('This is my other promise ');
        }, 1500);
    });
}).then( (str) => {
    console.log('does this run?', str);
}).catch( (error) => {
    console.log('error', error);
});

// Can pass a second argument into then. This argument is treated as the reject method

console.log('after');