// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet === " ") {
        continue            // skips printing space
    }
    // console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map()    // has only unique values in order of entry
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {   // accessing both key and value
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObjectbject) {   // not iterable like this
//     console.log(key, ':-', value);
// }