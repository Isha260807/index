console.log('hello ji js dom');
// access the element in js 
/*1. getElementById()
2. getElementByClassName()
3.getElementByTagName()
4. QuerySelector()  --> it return 1st ele with document match
5. querySelectorAll()  --> it return all the match*/ 

//this is getelementbyid() to fetch only one 
const element = document.getElementById("demo");
element.style.color = "red";

//this is getelementbyclassname() to fetch mutiple value
const e = document.getElementsByClassName("cont");
for(let i=0; i<e.length; i++)
{
    e[i].style.color = "pink";

}
const eye = document.getElementsByClassName("c");
for(let i=0; i<eye.length; i++)
{
    eye[i].style.backgroundColor = "Blue";
}

/*let d = getElementsByTagName("p");
for(let i=0; i<d.length; i++)
    {
        d[i].style.cssText = 'font-size:4em';
    } */


      //4. queryselector it use for css selector -->it return olny one or 1st one
      //use in id
      /*let q = document.querySelector("#footer")
        q.style.color = "red";
       //use in class
        let qq = document.querySelector(".hidden")
        qq.style.backgroundColor = "red";
       // use in tags
        let qu = document.querySelector("h1")
        qu.style.backgroundColor = "yellow";  */

      //5. use queryselectorall it return multiple match 
          let q = document.querySelectorAll("#footer");
          for(let i=0; i<q.length; i++)
          {
            q[i].style.color = "red";
          }

          /*let qq = document.querySelectorAll(".hidden")
          for(let i=0; i<q.length; i++)
            {
              qq[i].style.backgroundColor = "orange";
            }  */
  
           let qq = document.querySelectorAll("div")
            for(let i=0; i<q.length; i++)
            {
              qq[i].style.backgroundColor = "pink";
            }  

      


            


