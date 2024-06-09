// const meetUser = new Object() // Singleton object
const meetUser = {}              // Non singleton object

meetUser.id = "123abc"
meetUser.name = "Siddharth"
meetUser.isLoggedIn = false

// console.log(meetUser);

const regularUser = {                // object within object
    email: "siddharth@email.com",
    fullname: {
        userfullname: {
            firstname: "Siddharth",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}

// {} baracket is given to assure that it is target and rest elements are source 
// it's not necessary if we not do that rest values will treat obj1 as target to merge
// const obj3 = Object.assign({}, obj1, obj2, obj4) 

const obj3 = {...obj1, ...obj2, ...obj4}  // combine using spread operator mostly used
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "siddharth@gmail.com"
    },
    {
        id: 1,
        email: "siddharth@gmail.com"
    },
    {
        id: 1,
        email: "siddharth@gmail.com"
    },
]

// log(users[1].email)
// console.log(meetUser);

// console.log(Object.keys(meetUser));    // returns an array of keys 
// console.log(Object.values(meetUser));   // returns an array of values
// console.log(Object.entries(meetUser));   // creates an array having array of elements with 1st property it's key and 2nd iyt's value

// console.log(meetUser.hasOwnProperty('isLoggedIn'));  // to check if object has this property


const course = {
    coursename: "Js tutorial",
    price: "1000",
    courseInstructor: "Siddharth"
}

// course.courseInstructor

// object destructuring
const {courseInstructor: instructor} = course // renaming property for easy use

// console.log(courseInstructor);
console.log(instructor);

// this type of destructuring is used in React instead of writing props.company we use{}
// const navbar = ({company}) => {
// }
// navbar(company = "Siddharth")


// JSON looks like:

// {
//     name: "Siddharth",
//     coursename: "JS Tutorial",
//     "price": "free"
// }

// we can also get response in form of array of objects
//[
//      {},
//      {},
//      {},
// ]