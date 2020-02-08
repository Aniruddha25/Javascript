const colors = ['Red','Yellow','Green','Blue','Indigo','Violet']
console.log('Colours List :')
let callback = function(Index)//Method 1
{
    
    console.log(Index)
    Index++
}
colors.forEach(callback)

//Method 2
colors.forEach(function(Index){
    console.log(Index)

})
let i
console.log(colors)


for(i=0;i<5;i++)//Pattern
{
colors.pop()
console.log(colors)
}









