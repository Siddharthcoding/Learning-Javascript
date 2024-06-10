// for each loop

const coding = ["js", "cpp", "java", "ruby", "python"]

// forEach function takes a callback function as argument
// callback function does not have name
// it iterates through each value of array that is passed as a parameter

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // we can pass another function's reference not execute it there ()

// it receives 3 parameters value, index and array

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

// array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js,"
    },
    {
        languageName: "java",
        languageFileName: "java,"
    },
    {
        languageName: "python",
        languageFileName: "py,"
    }
]

myCoding.forEach( (item) => {       // gets an object as parameter
    console.log(item.languageName);
} )
