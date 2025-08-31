console.log('helloo ji');

//Fetch Api --> communicate with diff. software component , return promise
  async function utility() {
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let ans =  await content.json()
    console.log(ans);
  
  }
  utility();    //func call

    //this is print 100 array
    async function utility1() {

   let response=  await fetch('https://jsonplaceholder.typicode.com/posts')
    let c = await response.json();
    console.log(c);
    }
    utility1();
  
  //fetch api has diff. method --> get, post, retrive, delete
  
  //fetch api post method call
  /*async function  helper() {
    
  let options = {
    method: 'POST',
    body: JSON.stringify({     //convert json in string method  
      title:'nisha ',             // we have send these 3 property in  fetch link
      body: 'smart girl',             
      userId: 2002,
    }),
    headers: {
      'Content-type': 'applocation/json; charset=UFT-8',
    },
  };
  
  let c = await fetch('https://jsonplaceholder.typicode.com/posts', options);
  let co = c.json();
  return co;
  
  }

  async function utility() {
    let ans = await helper();
    console.log(ans);

    
  }
  utility();  */


async function utility2() {
    
 let con=  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({           //convert json in string method  
      title: 'Nisha Kumari',         // we have send these 3 property in  fetch link
      body: 'smarty',
      userId: 3009,
      weight: 44,
      height: 5.5,
      Address: 'Indore',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    let output = await con.json();
     console.log(output); 
}
async function helper() {
    let help = await utility2();
    console.log(help);
    
}
helper();

//Learn the concept of ---> Closure ->  we use nested fun , element store in references 
//scope of variable --> let ,var
let name = "sher";
function init() {

   let name = "pawan";
function display() {
    let name = "babbar";
    ///display();

    console.log(name);

}
display();

}
init();
//let name1 = "mozilla";
function init1() {

   let name1 = "pawan";
function display() {
    ///display();

    console.log(name1);

}
display();

}
 let ab = init1();
 ab();


