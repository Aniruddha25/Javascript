let aniruddha = {
    name:"Aniruddha",
    age:21,
    gender:'M'
}
let Rana = {
    name:"Rana",
    age : 21,
    gender:'M'
}
let users = new Map()
console.log(typeof users)//OBJECT
users.set("Amk96",aniruddha)
users.set("Rana123",Rana);
console.log(users.size)
console.log(users.keys())//OUTPUT : [Map Iterator] { 'Amk96' }
console.log(users.values())//OUTPUT : [Map Iterator] { { name: 'Aniruddha', age: 21, gender: 'M' } }
console.log("Using foreach loop")
users.forEach((index)=> console.log(index)) 
console.log("Mapping array :")
var arrofarr = [['one',1],['two',2]]
var map2 = new Map(arrofarr)
console.log(map2)//O/P :Map { 'one' => 1, 'two' => 2 }
users.clear();
console.log("After clearing Objects from users")
console.log(users)





