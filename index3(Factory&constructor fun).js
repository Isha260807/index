/** start object in js */
console.log('hello');
let person ={
    Name: 'Doe',
    age: 20,
    Contact:1234
}

let rectangle = {
    length: 1,
    breadth : 2,

    draw: function(){
        console.log('draw');
    }
};

/* Create multiple object us function 
   --> Factory Function -- camlecase ,return vaule
   --> Constructor Function -- pascalcase, not return , using this keyword*/

   /* Factory Function */
   function createRantangle() {
    let rectangle = {
        length: 10,
        breadth : 20, 
        //methods creation 
        draw: function(){
            console.log('drawinng ractangle');
        }
    };
    return rectangle;
}
   // rectangle.breadth;
    //rectangle.length;
    let rectangleObj = createRantangle(); //ojbect create using fun call then we use the object in console

    // use factory function with pass input in parameter
    function createRantangle1(len,bre) {
        return rectangle1 = {
            length: len,
            breadth : bre, 
            //methods creation      
            draw(){
                console.log('drawing  para ractangle');
            }
        };
    }
    //obj craete using fun call in factory fun
    let rectangleObj1 = createRantangle1(4,5);
    //multiple create object
    let rectangleObj2 = createRantangle1(40,50);
    let rectangleObj3 = createRantangle1(4234,87765875);
    let rectangleObj4 = createRantangle1(23,55);


    //Constructor Function -->pascal(1st letter capital)-> NumberOfString
    // prop/methods -> intialise/Define 
    function Rectangle() {
        this.len =1;
        this.bre =2;
        //methods
        this.draw = function()
        {
            console.log('Create a Function');
        }
    }
    //object creation using constructor function --> new keyword
    let rectangleObject = new Rectangle();

    function Rectangle1(len,bre) {
        this.length= len;
        this.breadth = bre;
        this.Nisha = function()
        {
            console.log('Damn soo sweet');
        }
    }
    let rectangleObject1 = new Rectangle1(12,32);
    //Object is Dynamic Nature ->add and delete element
    //addition
    rectangleObject.color = 'yellow';
    console.log(rectangleObject);
    //delete
    delete rectangleObject.color;
    console.log(rectangleObject);

    //constructor property
    let Square = new Function(
        'len','bre',
        `this.length= len;
        this.breadth = bre;
        this.Nisha = function()
        {
            console.log('Damning......');
    }`);
    let squareObj = new Square(4,40);
    console.log(squareObj);
    




    

