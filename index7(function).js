console.log('chalo start krte h ab function');
//function-> a block of code that fulfilled specific taask 
// use for --> reuseability, readability

//function declartion  --> we can call fun top or bottom for js Hoisting
walk();
function walk()
{
    console.log('lets walk');
}
//walk();

//function assignment --> 1.named   2.Anonoymous
//1.named 
//sum(); error --> js hoisting not possible in fun assign.
let suma = function b()
{
    console.log('function assignment');
}
suma();
let jump = suma;
jump();
//2.anonoymous
let sums = function()
{
    console.log('mt name is nisha');
}
sums();

// Dynamic nature in function
let x = 1;
x ='a';
console.log(x);

function sum(a,b)
{
    return a+b;
}
console.log(sum(1,2));
console.log(sum(1));           //undifiend
console.log(sum());           //undifiend
console.log(sum(1,2,3,4,5));   //use only two input  
console.log(sum(1,2,3));

//Argument Object ->use to utiliz the useless value in parameter  --> special object
// like this -> console.log(sum(1,2,3,4,5));   //use only two input 
function argu(a,b)
{
    console.log(arguments);
    return a+b;
}
let ans = argu(1,2,3,4,5,6);
console.log(ans);

// to print the sum for iterate the each value
function arg()
{
    let total =0;
    for(let value of arguments)
        total = total+value;
        return total;   
}
let answer = arg(1,2,3,4,5,6);
console.log(answer);

// Rest operator (...)  --> the rest paramtere allow a function to accept no. of argument as an array
function res(num, value , nisha, ...args)
{
    console.log(args);
}
res(1,2,3,4,5);    // fun call

//default parameters
function interest(p,r,y=10)
{
    return p*r*y/100;
}
console.log(interest(10,20));


// Getter Setter method
// Getter --> this keyword use to get the value or access property
/*this is a normal fun use getter setter to chnge the value if u want
let person = {
    fname:'Nisha',
    lname: 'yadav'
};
function fullname()
{
    return `${person.fname} ${person.lname}`;  // use backtik and $placeholder to combine the name

}
console.log(fullname());  */


let person = {
    fname:'Nisha',
    lname: 'yadav',

get fullName()
{
    return `${person.fname} ${person.lname}`;  // use backtik and $placeholder to combine the name

},
// setter method --> change or update the properties
set fullName(value)
{
    if(typeof value !== String)
        {
            throw new error ("you have not to sent a string");
        }
    
    let part = value.split(' ');
    this.fname = part[0];
    this.lname = part[1];
}
};
console.log(person.fullName); 

//Error Handling --> try , catch, throw, finllay
//try -->place that code which error create
//catch --> where handle the error
//throw -->throw the custom error 

try{
      person.fullName = 1;
    }
    catch(e)
    {
        alert('please handle your own error');
    }
    console.log(person.fullName);






    




