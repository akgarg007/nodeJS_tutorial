const person = {
    name: 'Ashwani',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

person.greet();

const hobbies = ['sports', 'cookies', 1, true, {
    name: 'Ashwani',
    age: 29
}];

for(let hobby of hobbies){
    console.log(hobby);
}

// JS spread operator