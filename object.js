let Employee ={
    name:'Aniruddha Kulkarni',//Object Defination 
    empid:'112',
    work:'Coding',
    welcome:function()
    {
        console.log('Hello ' + this.name)
        console.log('Welcome to '+ this.work + ' world!!')
    }
};

console.log(Employee.welcome())