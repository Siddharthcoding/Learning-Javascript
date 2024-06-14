class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){    // stops giving access
        return `123`
    }
}

const siddharth = new User("siddharth")
// console.log(siddharth.createId());  // can't access

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const apple = new Teacher("apple", "apple@email.com")
apple.logMe();
console.log(apple.createId());  // can't access