//write an arrow function to sum 2 numbers
const sum = (num1,num2)=>{
    return num1+num2
}
console.log("sum of number:" +sum(5,6))
const add = (a,b)=>{return a+b}
console.log(add(4,5))


//default parameter
const mult =(a,b=2)=> {return a*b}
console.log(mult(4,5))
console.log(mult(4))

//reset parameter
const mysum = (...n)=>{
    console.log(n)
}
mysum(4,5,6,34,2)
////////////
/*
const mysum = (...n)=>{
    let t =0
    n.forEach((i)=>t=t+i)
    console.log(t)
    }
*/ 
/////////////
const mysum2 = (...n)=>{
    return n.reduce((t,i)=>t=t+i)
}
console.log(mysum2(4,5,6,7,89))

//////callback function
const myname = (name1)=>{console.log("Myname is "+name1)}
const greet =(msg,fun)=>{
    console.log("Hi..."+msg)
    fun
}
greet("good morning",myname("sithumi"))
