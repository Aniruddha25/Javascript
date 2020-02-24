const add = function(num1,num2){   //Method1
    return num1+ num2;
}
console.log(add(3,4));

const add1 = (num1,num2) => num1+num2 //Arrow_Function
console.log(add1(4,5));
const product=[{
    name:'Mobile',
    price: 10000 ,
    id:1,
    Purchased: true

},{
    name:'PC',
    price:40000 ,
    id :2 ,
    Purchased :false

},{  name : 'Washing machine',
     price : 15000,
     id : 3 ,
     Purchased : true


}]
//Product Application
const isproductsold = product.filter((product)=>  product.Purchased === true)
console.log(isproductsold)
console.log("Enter the product id")
upper = 3
lower = 1
num1=Math.floor(Math.random()*(upper-lower+1))+lower
const searchproductbyid = product.filter((product)=> product.id === num1)
// Searching Particular Product
console.log(searchproductbyid)
const searchproductbyprice = product.filter((product)=> product.price >25000)
console.log(searchproductbyprice)
//Note dont use arrow function as method and constructor inside object// 
//search product by Name
productbyname = product.filter((product)=> product.name === "Mobile")
console.log(productbyname)





