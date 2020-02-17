let gmail = 'aniruddhakulkarni191'
let password ='amk123'
let passlength=8
let Instaid = 'AMK96'
console.log("Check Password validity of user")
let userchecker = function(user_string){
    if(user_string.includes(123) && user_string.length>=6)//Here length is property not a function
         console.log('Valid')
    else
        console.log('Invalid')
//.includes(str) function checks whether main string contains given substring or not 

}
console.log(userchecker(password))
// Note to learn more about javascript search mdn Javascript on google
console.log('UPPER CASE')
console.log(gmail.toUpperCase())
console.log('LOWER CASE')
console.log(Instaid.toLowerCase())
console.log('Removing Blank space using trim function')
let a ='     amk    '
console.log(a.trim())