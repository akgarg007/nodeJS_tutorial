const fetchData  = callback =>{
    setTimeout(()=>{
        callback('Done!');
    }, 1500);
};


// Asynchronous code, because code does not execute immidiately.it waits for the time.
setTimeout(()=>{
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

setTimeout(()=>{
    console.log('This will print first, but after Hello, Hi');
}, 1000);



// Synchronous code
console.log('Hello!');
console.log('Hi!');