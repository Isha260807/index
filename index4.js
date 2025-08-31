console.log("hello ji");
//Data Type -> 1.primitive (Number, string,boolean..) 2.Objects(array, function,objects)

//Primitive -> copied by value 
let a = 10;
let b = a;
a++;
console.log(a);
console.log(b);

//objects -> point to the same address

let a1 = {value:10};
let b1 = a1;
a1.value++;
console.log(a1.value);
console.log(b1.value);

//using functions
//primitive
let ab = 10;
function inc(ab)
{
a++;
console.log(ab);
}
 inc(ab);  // fun call
console.log(ab);

//reference(object)
let ab1 = {val:10};
function incre(ab1)
{
ab1.val++;
//console.log(ab1);
}
 incre(ab1);  // fun call
console.log(ab1.val);

// for-in , for-of loop -> use for iterate in objects
//for-in
let react = {
    len :2, 
    bre:4,
};
    for(let key in react){
       // console.log(key);
       //to print the value use []bracket
        console.log(key,react[key]);
    }
    
    //for-of loop
    let react1 = {
        len :20, 
        bre:40,
    };
        for(let key of Object.keys(react1)){
           // console.log(key);
           //to print the value use []bracket
            console.log(key,react1[key]);
        }




     //Object cloning -> copy of object using --
     /* 1. Iteration
        2. Assign
        3.Spread operator */  
        // 1 iteration
        let it =
         {v:100,
          x:200,
          z:300  
         };
        let des ={}; // empty object for use copy
        for(let key in it)
            {
               des[key] = it[key];
            } 
        console.log(des);
        
        //2. Assign
        let Ass =
         {v:10,
          x:20,
          z:30  
         };
        let dest = Object.assign({}, Ass); // empty object for use copy
        
        console.log(dest);

        // spread 
        let spra =
         {v:1,
          x:2,
          z:3  
         };
        let desti ={...spra}; // empty object for use copy
         
        console.log(desti);