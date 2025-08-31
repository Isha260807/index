console.log('browser event');
//event -->  it perform action that happen in browser
//monitorEvent() --> to see the visibility
//unmonitorEvent() --> invisibility

//EventListener --> when event was done it was tell us what action performed.
//eventTarget --> addEventLister(),  removeeventlister(),   dispatchevent()

//addeventlistener
document.addEventListener('click', function(){

    console.log('i clicked on document');
});

document.addEventListener('click' , myfunction);

function myfunction(){
    document.getElementById("demo").innerHTML = "Hello jii!"
}
//removeeventlistener
function print()
{
    document.getElementById("d").innerHTML = "i m the best"
}
// add and remove
document.addEventListener('click' , print);

//document.removeEventListener('click', print);

let c = document.querySelector('#wrapper');
c.addEventListener('click' , function(event)
{
    console.log(event);
})
//Phases of an event
//capturing phase,  At target phase, bubbling phase

// the concept of default action -->preventDefault()
let link = document.querySelector('a');
//let th = link[2];

link.addEventListener('click', function(event)
{
    event.preventDefault();
    console.log('maza aya bhut !!');
});   

// How to Avoid too many event
/*let myp = document.createElement('div');

for(let i=0; i<=100; i++)
{
    var newElement = document.createElement('p');
    newElement.textContent = 'This is a para' + i;

    newElement.addEventListener('click' ,function(event)
{
    console.log('i have clicked');
});

    myp.appendChild(newElement);
}
document.body.appendChild(myp); */

// This is a optimized code

let myp = document.createElement('div');

function para(event){
    // console.log('i clicked on para')
    //if we optimize the code use event target
    console.log('i clicked on para' + event.target.textContent);
}
myp.addEventListener('click' , para);

for(let i=0; i<=100; i++)
{
    var newElement = document.createElement('p');
    newElement.textContent = 'This is a para' + i;

    myp.appendChild(newElement);
}  
document.body.appendChild(myp);  

//propety we have use nodeName  --> if we clicked para span alg alg then

/*let element = document.querySelector('#article');
element.addEventListener('click', function(event)
{
    console.log('span per click kia to ' + event.target.textContent);
});   */

let element = document.querySelector('#article');

element.addEventListener('click', function(event)
{
    if(event.target.nodeName === 'SPAN'){
    console.log('span per click kia to ' + event.target.textContent);
    }
}); 


