function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password)
{
    // SetUsername(username)  // reference is not hold after execution
    // passes current execution context to another function
    SetUsername.call(this, username)  // will use this function's context

    this.email = email
    this.password = password
}

const sid = new createUser("Sid", "sid@email.com", "123")

console.log(sid);