const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

// for-of loops accesses values of array directly but for-in loop accesses keys of array

for (const key in programming) {
    // console.log(programming[key]);   
}

// const map = new Map()    
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in map) {   // can't be iterated like this
//     console.log(key);
// }

