console.log('hello ji ');

//sync function -->occur at same time excute line by line
function sync() {
    console.log('first');
}
sync();
console.log('second');

//async function --> we does not the fun when excute
setTimeout(function() {
    console.log('third');
}, 7000)
function async() {
    console.log('first');
}
async();
console.log('second');  


// This is API
      // Deleting a post
/*etch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  })
    .then(() => {
      console.log('Post deleted');
    })
    .catch(error => {
      console.error('Error deleting post:', error);
    }); */



    //Promise --> if we want to excute code parallel in bckground use it
    // async promise --> time is not decide but run in background

   let myp = new Promise(function(resolve, reject)
  {
    console.log('I am inside promises');
  })
  console.log('First'); 

  //use async
  let myp1 = new Promise(function(resolve, reject)
{
  setTimeout(function()
{
  console.log('Im an async function');
}, 7000);

   // return 2;
   resolve(12909);
  // reject(new Error ('Bhaishab error aye hai'));
   
});

myp1.then((value) => {console.log(value)});

myp1.catch((error) => { console.log("Th")});

/* let myp2 = new Promise(function(resolve, reject)
{
  setTimeout(function()
{
  console.log('Im an async function');
}, 7000);

   // return 2;
   resolve(1200);
   //reject(new Error ('Bhaishab error aye hai'));
   
});  */

console.log('dusra');

//this is called promise chaining
//first promise
let wadaa1 = new Promise(function(resolve, reject)
{
  setTimeout(() => {
    console.log('settimeout1 started');
  }, 2000);
  resolve(9876 );
})

//second promise
let output = wadaa1.then(() => {
  let wadaa2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('settimeout2 started');

    }, 3000);
    resolve("wadaa 2 resolved");
  })
  return wadaa2;
  // third promse
}).then(() =>
 {
  let wadaa3 = new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log('settimeout3 started');
    }, 5000);

    resolve("wada 3 resolved");

  })
  return wadaa3;
}).then((value) => console.log(value));  

// if we want to create so many promise we not use then we use --> async - await
/// strart concept of ---> async-await -> it used to work with promise ,it return promise, make func await
async function  utility() {
  
let delhi = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve("delhi main garmi mousam");
  }, 4000);
});

let hyd = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve("hyderabad main thnd mousam");
  }, 5000);
});
//use await keyward
let dm = await delhi;
let hm = await hyd;

return [dm, hm];
//console.log(dm +" "+ hm);
}

