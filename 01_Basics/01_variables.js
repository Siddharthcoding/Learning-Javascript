const accountId = 144553
let accountEmail = "siddharth@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2  //Not allowed

accountEmail = "hc@google.com"
accountPassword = "21765"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);