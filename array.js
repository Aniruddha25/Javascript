
const subjects = ['maths','physics','chem']//arrays
console.log(subjects[1])
let l=subjects.length
console.log(subjects[l-1])
let print = function(){
    console.log("Print the data")
}
print()//Function in js
let add =  function( a,  b){
    let c
    c=a+b
    console.log(c)

}
add(3,4)
subjects.shift()//shifting element to next position
console.log(subjects)
subjects.unshift('Maths')//Adding element at the start
console.log(subjects)
subjects.pop()//Removes last element from array
console.log(subjects)
subjects.push('English')//adding element at last
console.log(subjects)
subjects.splice(2,1)//delete element from particular position
console.log(subjects)
numbers=[3,5,2,1,6,7,9,8]
numbers.sort()//sorting the numbers
console.log(numbers)
console.log(subjects.concat(numbers))//concatenating two arrays
let b
b=numbers.slice(3,6)//slicing the array to make subarray
console.log(b)
let d = new Date()//Date object
console.log(d)
console.log(d.toDateString())//Date in string format
let i
for(i=0;i<=7;i++){ //for loop
    console.log(numbers[i])
}
let x
let y=''
for(x in subjects)//for-in loop
{
    y+=subjects[x]
}
console.log(y)
i=0
while(i<5)//while loop
{
    do{
        console.log(i)//do-while loop
        i++

    }while(i<2)
    if(i>3){
    console.log(i)
    }
    i++

}
numbers.forEach(){
    
}










