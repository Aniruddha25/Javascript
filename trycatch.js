const convertto$ = (Rs)=> {

if(typeof Rs === 'number')//function defination
{
    return Rs*75
 }
 else
 {
     throw Error('value should be number')

 }
}
try{
console.log(convertto$('a'))//Function call
}
catch(error)
{
    console.log(error)
    
}
console.log("ERROR !!!!")