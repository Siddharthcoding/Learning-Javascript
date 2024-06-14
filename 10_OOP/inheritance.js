
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

}

class Teacher extends User {
    constructor(username, email, password)
    {
        super(username)  // sets username in parent class and returns it
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sirji = new Teacher("sirji", "sirji@gmail.com", "123")
sirji.addCourse()
sirji.logMe()

const mam = new User("mam")
mam.logMe()

console.log(sirji instanceof User);