console.log('chalo start krte kuch to interesting!...');
//we use hoe to upadating the content -->
//1. innerhtml  2. outerhtml  3. innertext  4.textcontent

// 1. innnerHtml --> we have use to gt and set the property of element it not avoid br span tag

let a = document.querySelector(".mydiv").innerHTML;
//get the value
document.querySelector("#p3").innerHTML = a;
//set or change the value 
//document.querySelector("#p3").innerHTML = ' ';
//document.querySelector("#p3").innerHTML = 'i have change!';

//3. innerText --> also use to set or return the text of element it not show the hidden text
let b = document.querySelector("#p1").innerText;
//get the value
document.querySelector("#p4").innerText = b;

//3. textContent --> also use to set or return the text of element it  show the hidden text
let c = document.querySelector("#p2").textContent;
//get the value
document.querySelector("#p5").textContent = c;

// important that we have to access the current element using the $0
//like let a = $0;
//a;



//Adding a new element using --->
/*1.   .createElement() method --> create element
  2.   .appendChild() --> add text in create elemnt*/

  // createElement add in only last 
  let mypara = document.createElement('p');
  mypara.textContent = 'I am a text of para';
  document.body.appendChild(mypara); 

 /* 3.  insertAdjacentHtml() --> to add in middle --> there is three method
         beforeBegin, afterbegin,  beforeend, afterend*/
         
         let div = document.querySelector("#myd");
        // pre.insertAdjacentHtml('beforeend',html);
        // pre.insertAdjacentHtml('beforbegin',html);
        div.insertAdjacentHtml("beforebegin","<P>this is a new paragrapgh added .</p>");
        // pre.insertAdjacentHtml('beforbegin',html);


        // we have also remove the element using removeChild() but we now the parrent of element

        //use CSS in jS
        /* --> .style, cssText , aetAttribute, className,  classList */
        //document.querySelector(".mydiv").style.color = "blue";
        //document.querySelector(".mydiv").style.BackgroundColor = "blue";





