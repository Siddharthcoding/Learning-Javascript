// var c = 300
// global scope
let a = 300

if(true) {          // block scope
    let a = 10
    const b = 20
    // console.log("Inner = ",a);
}


// console.log(a);
// console.log(b);
// global scope in browser console & node local environment are different

function one(){
    const userName = "Siddharth"

    function two(){
        const website = "youtube"
        console.log(userName);      // inner func can access outer func variables
    }
    // console.log(website);         // can't access

    two()
}

// one()


if(true) {
    const userName = "Siddharth"
    if(userName == "Siddharth") {
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);      // can't access
}

// console.log(username);   // can't access


//***********Interesting(hoisting)********

console.log(addone(5))      // can be accessed when declared like this

function addone (num) {     // function
    return num + 1
}

addTwo(5)                   // can't be accessed before declared             

const addTwo = function(num){   // function or expression
    return num + 2
}

