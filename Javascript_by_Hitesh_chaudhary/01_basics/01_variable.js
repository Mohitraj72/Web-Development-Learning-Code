const accountId = 144553
let accountEmail = "Mohit@gmail.com"
var accountPassword = "1234"
accountCity = "Bihar"

/* 
accountId = 2 not allowed
*/

accountEmail = "mohit@.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/* Prefer not to use var because of issue in block scope and functional acope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])

