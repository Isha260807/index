console.log('array start krte h ab ->');
// Arrays in JS --> collection of diff. type of items it is reference and object
// create a array
let num = [1,2,3,4,5,556];
console.log(num);

//Access the element
console.log(num[0]);
console.log(num[2]);
console.log(num[3]);

//insertion in array -> three methods, add in 
/* 1. End -> push 
   2. Start -> unshift
   3. Middle -> Splice */
   let num1 = [1,2,3,6,5,7];
   console.log(num1);
  // add in end
   num1.push(8);
   console.log(num1);
  // add in start
   num1.unshift(0);
   console.log(num1);
 // add in middle
   num1.splice(2,0,'a','b');
   console.log(num1);

   //finding the element or Searching ->
   // in Primitive -> 1.indexof() 2.includes()
   //1. Indexof()-> search in primitive array 2.includeof()
   let num2 = [10,20,30,60,5,7];
   console.log(num2);
   //num2.indexOf(8)
   console.log(num2.indexOf(80));
   console.log(num2.includes(70));
   console.log(num2.includes(60));
   console.log(num2.indexOf(40,2));
   
   // Searching Array in objects -> using .find()
   let person = [    // object craete
    {name:'ajay'},
    {age:18}
   ];
    console.log(person);
    //console.log(person.includes( {name:'ajay', age:18}));
    
    /*let p = person.find(function(person)
{
    return person.name ==='ajay';
}) */
    //using arrow
   let p =  person.find(person => person.name ==='ajay');
    console.log(p);

    //Removing element in array --> using
    /* end --> pop()
        start --> shift()
        middle -->splice() */
        let num3 = [1,2,3,4,5,6,10,8,9];
        console.log(num3);
   //remove in end
        num3.pop()
        console.log(num3);
   // start 
        num3.shift()
        console.log(num3);
    //middle    
        num3.splice(3,1);
        console.log(num3);

    // Empty an array -> array.length=0 , array.splice 
    let mark = [1,2,3,4,5];
    console.log(mark);
   let m = mark;
   /* mark = []
    console.log(mark);    // but actually it not empty
    console.log(m); */

    // so we use 
    mark.length =0;
    m.splice(0,mark.length);
    console.log(mark); 
    console.log(m);
    
    // Combining & slice array
    // Combine the two array
    let arr = [1,2,3];
    let brr = [4,5,6];
    
    let add = arr.concat(brr);
    console.log(add);

    //slice the  array
    let marks = [10,20,30,40,50];
    let sliced = marks.slice(2,6);
    console.log(sliced);

    // use spread operator to combine
    let arr1 = [1,2,3];
    let brr2 = [4,5,6];
    
    let combo = [...arr1,'a','v',...brr2,'z']
    console.log(combo);

    //Use For-of and For-Each loop for iteration
    // for-of use for iteration in each array elemenet
    let f = [1,2,3,4,5,6,7];
    for(let value of f)
    {
        console.log(value);
    }
    // foreach loop
    let mp = [3,5,6,8,10,9,4]
    //using arrow 
//mp.forEach(number=> console.log(number));
    mp.forEach(function(number)
{
    console.log(number);
})


//Joining Array method in js
let j = [1,2,3,4,5,6];
const jo = j.join(',');
console.log(jo);

//split into string
let mess = 'this is a my new book';
let sp = mess.split(' ');
console.log(sp);

let sp1 = sp.join('_');
console.log(sp1);

//sorting in js  -> it behave as string sotred
let s = [2,4,50,10,30];
s.sort();
console.log(s);
s.reverse()
console.log(s);
let fruit = ['apple', 'banana','grapes','mango'];
console.log(fruit);
fruit.reverse()
console.log(fruit);

//sorting in numeric -> using function
let point =[2,4,50,10,30];
let po = point.sort(function(a,b)
{
    return a-b;
});
console.log(po);

//Filerting in js --> filter method

let number = [1,2,-2,-4,5];
//let filtered = number.filter(value=> value >=0);  using array function
let filtered = number.filter(function(value)
{
    return value >=0;
});
console.log(filtered);

//Mapping in js use for mapping in value

let items = [3,4,5,6,8,9];
console.log(items);

let it = items.map(function(value)
{
    return 'student_RoolNO' + " " + value;
});
console.log(it);

// Reducing Array in js --> this method use to reduce the array to single value

let no = [1,2,3,5];
// reduce(callbackfun , intitalvalue like 0 )  use two function
// currentvalue =0;
let totalsum = no.reduce((accumator, currentvalue) => accumator +currentvalue ,0);
console.log(totalsum);

