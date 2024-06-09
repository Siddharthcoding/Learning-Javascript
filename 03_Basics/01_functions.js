function sayMyName(){
    console.log("B");
    console.log("A");
    console.log("T");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()     // function name is it's reference & upon adding() it's execution

// function addTwoNumbers(number1, number2){   // parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)     // arguments
// console.log("Result= ", result);

function loginUserMessgae(username = "Sid"){   // giving default value incase user doeas not passes argument
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessgae("Siddharth"));
console.log(loginUserMessgae("Siddharth"));              // undefined if empty


function calculateCartPrice(val1, val2, ...num1){      // rest operator when no. of input parameters are not known
    return num1
}

// console.log(calculateCartPrice(200, 600, 700, 100, 2000)); // returns an array

const user = {
    username: "Siddharth",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// any of these
// handleObject(user)
handleObject({
    username: "Sid",
    price: "500"
})

const myNewArray = [200, 400, 2000, 5000]

function returnSecondValue(getArray) {
    return getArray[1]
}

// any of these
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 100, 500]));