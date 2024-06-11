// map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// automatically returns values by perfroming operations on each element
// but when {} is written 'return' keyword is used
// const newNums = myNumbers.map ( (num) => num + 10 )


//chaining
const newNums = myNumbers
                .map( (num) => num *10 )  // elemnets are passed to 2nd map after operating
                .map( (num) => num+1 )    // elemnets are passed to filter after operating
                .filter( (num) => num >= 40 )  // elements that satisfy are returned to array

console.log(newNums);