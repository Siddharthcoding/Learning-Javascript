class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    // both getter & setter are written together , one cannot be skipped
    get email(){
        return this._email.toUpperCase()
    }

    // setter don't have return 
    set email(value){
        this._email = value
    }

    // getter's have return
    get password(){
        return `${this._password}siddharth`
    }

    // settting using new variable as both constructor & setter are setting values
    set password(value){
        this._password = value
    }
}

const siddharth = new User("sid@email.com", "abc")
console.log(siddharth.email);