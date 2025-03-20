//write boolean function to find a given number is prime
function isPrimeNum(num){
   let isprime =true;
   let fact_count =0;
if(num==0 || num==1){
    isprime= false;
}
else{
    for(let a = 1; a <= num/2;a++)
    {
        if(num%a ==0)
        {
            fact_count++;
        }
    }
}
if(fact_count != 1){
    isprime=false;
}
return isprime;
}
function printMsg(a,isprime)
{if(isprime)
    {
        console.log(a+"is a prime number")
    }
    else{
        console.log(a+"is not a prime number")
    }}
printMsg(3, isPrimeNum(3));
printMsg(10, isPrimeNum(10));