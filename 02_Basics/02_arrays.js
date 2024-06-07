const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)   // doesn't merge arrays instead inserts array within array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  // concat returns a new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // spread operator picks single value

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array  = another_array.flat(Infinity)  // a new array with all sub-elements concatenated till given depth
console.log(real_another_array);


console.log(Array.isArray("Siddharth"));    // checks given value is array or not
console.log(Array.from("Siddharth"));      // converts given value to array
console.log(Array.from({name: "Siddharth"})); // can't convert directly we have to specify how to convert to use keys or values to form array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // returns new array from given elements