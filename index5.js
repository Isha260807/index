console.log('helloo jiii');
//Using In-Built Objects-> Math, String, Template literal, Date time

//1. Math objects ->multiple type of math object
console.log(Math.random());
console.log(Math.round(100.57889));
console.log(Math.max(1,2,3,4,4,5,7,65,4,5));
console.log(Math.min(1,2,3,4,4,5,7,65,4,5));
console.log(Math.floor(4.9));
console.log(Math.pow(8,2));
console.log(Math.sqrt(64));
console.log(Math.abs(-4.8));


//String -> two type 1. primitive type
// also use as 2. object using new string keyword
//primtive
let fname = 'Nisha';
console.log(fname);
//this is object type
let lname = new String('nisha');
console.log(lname);
//different property of String
console.log(lname.length);
lname[0];
console.log(lname.includes('Ni'));
console.log(lname.startsWith('Kumar'));
console.log(lname.indexOf('n'));
console.log(lname.endsWith('isha'));
console.log(lname.replace('isha','car'));

//Template Literal -> Use for 
 let message = 
 `this is 
 my new 
 home 
 swet home`;
 console.log(message);

 // Date & time 
 // how to create a date object
 let date = new Date();
 console.log(date);
 //use different way to create 
 let date2 = new Date('Dec 30 2002 07:15');
 console.log(date2);
 let date3 = new Date(2002, 11, 30, 7);
 console.log(date3);
 // set and get the value
 date3.setFullYear(2002);
 console.log(date3);
 date3.getFullYear(2002);
 console.log(date3);

