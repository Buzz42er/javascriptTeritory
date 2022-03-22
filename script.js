const name = "Jure" ;
var surname ;
const years = 22 ;


//this is a comment, it will be much more of those

//data types
Number = 3 ;
String = "hello, this is a string"
Array = '1', '2', '3' , '4' ;
Boolean = true / false ;


// math operations

add = years + 10;
document.write(add+ "<br/>")

/*
sub = years - 10;
document.write(sub)
mul = years * 10;
document.write(mul)
div = years / 10;
document.write(div)
mod = years % 10;
document.write(mod)
inc = years++;
document.write(inc)
dec = years--;
document.write(dec)
*/

//assingnment operations
adition = 5;
adition += years;
document.write(adition+ "<br/>") //output =27

var firstVar = 5;
var secoundVar = 4;

//function ()//&& and, || or , ! not


var firstString = "I am learning";
var secoundString = "JavaScript with SoloLearn.";
document.write(firstString + secoundString); //output = I am learning JavaScript with SoloLearn.



//this is working now
//I have conented html file with this one

//conditionals and loops
// if statement

if(firstVar > secoundVar) {
    document.write("We can doo thiiiis!!"+ "<br/>")
}
else if (secoundVar > firstVar) {
    document.write("oh nooo"+ "<br/>") //We can doo thiiiis!!
}

switch (3) {
    case 1: 
        Light
        break;
    case 2:
        Dark
        break;
    default:
        "hello you"
} // this doesnt do anything

/*
function main() {
    var themeNumber = parseInt(readLine(), 10)
    /*
    1 - Light
    2 - Dark
    3 - Nocturne
    4 - Terminal
    5 - Indigo
    
    // Your code here
    //switch statement
    switch (themeNumber) {
        case 1: 
            console.log("Light")
            break
        case 2:
            console.log("Dark")
            break
            
        case 3:
            console.log("Nocturne")
            break
            
        case 4:
            console.log("Terminal")
            break
            
        case 5:
            console.log("Indigo")
            break 
            
    }
    
    }
*/

//loops
 
/*for (statement 1; statement 2; statement 3) {
    code block to be executed
 }*/

 //for loop
 var i = 0;

 for (; i < 10; ) {
     document.write(i+ "<br/>");
     i++;
 } //0,1,2,3,4,5,6,7,8,9 but one under another

 //while loop
 //same i from before
 while (i<=10) {
     document.write(i + "<br/>")
     i++;
 }//0,1,2,3,4,5,6,7,8,9,10 but one under another

 //do...while loop
 do {
     document.write(i + "<br/>")
     i++;
 }
 while (i<10);//0,1,2,3,4,5,6,7,8,9

 //FUNCTIONS
 //simple function
 function somesimplef() {
     alert("ahoj") //will call alert and alert will say ahoj
 }
somesimplef(); //you need to call the function to execute

//parametars, for Functions
function sayHello(name) { //parameter are used by calling the function and placing the value in the parentheses
    alert ("Hi, "+ name); //will execute Hi Jure in alert

}
sayHello("Jure"); // and you can call it multiple times with the other value every time

function myAlert(txt) {
    alert("Hello " + txt);
}

myAlert("Stuff"); // as a value you can but any kind of string
myAlert("Test"); //example for more then one value for the same function
//it will execute Hello stuff and then Hello Test
// using multiple parametars 

function myFunc(nameF, ageF) {
    document.write(nameF + " is " + ageF + " years old.");

}

myFunc("Jure", 22); // more then one value //output >> Jure is 22 years old.
// you can also use it as = myFunc(x +y)

//return in functions
function myFunction(a,b) {
    return a * b;
}
var sumery = myFunction(5,6);
document.write(sumery);//output>> 30
//return value will end up in x 

//you can also make full calculations inside functions
function addNumbers(a,b) {
    var c = a+b;
    return c;
}
document.write(addNumbers(40,2)); // output>> 42

//\n - makes an enter command
//alert, prompt, confirm
//alert
//1 parametar can be accepted by the "alert" function
alert ("hello\nmy dude"); // output hello 'new row' my dude

//prompt box
//A prompt box is often used to have the user input a value before entering a page.
//When a prompt box pops up, the user will have to click either OK or Cancel to proceed after entering the input value.
//If the user clicks OK, the box returns the input value. If the user clicks Cancel, the box returns null.

var user = prompt("please enter your name");
alert (user);// ok = true, alert writes what you input, cancel alert writes null (cancel = false)

//confirm box
//A confirm box is often used to have the user verify or accept something.
//When a confirm box pops up, the user must click either OK or Cancel to proceed.
//If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false.

var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert ("Thanks for visiting");

}
else {
    alert("I knew you would stay ;)")
}//works as designed, you will get it , ok =true, cancel=false

//ok returns true
//cancel returns false


function max(a,b) {
    if (a >= b) return a;
    else return b;
}//does not output because there is not command for any kind of output

//<script src="script.js">

function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    
    console.log(convert(amount, rate));
}//it was a test on SoloLearn, its not functional by it self, its half of the code


//You are making a currency converter app.
//Create a function called convert, which takes two parameters: the amount to convert, and the rate, and returns the resulting amount.
//The code to take the parameters as input and call the function is already present in the Playground.
//Create the function to make the code work.

function convert(amount, rate) {
     convert = amount * rate
     return convert;
    

}

//OBJECTS
//JavaScript variables are containers for data values. 
//Objects are variables too, but they can contain many values.

var person = {
    name: "Jure" ,//this is a property
    age:22,
    favColor: "blue",
    height:172

};//no output
//accessing object properties
//2 ways
objectName.propertyName //this is 90% of typescript kinda
//or
objectName['propertyName'] // no output, just a property


var course = {name: "JS", lessons: 41};
document.write(course.name.length);//output is 2, because we wanted the total number of caracters in property name

//object Metods
//An object method is a property that contains a function definition. its like a function
objectName.methodeName() 
// also, this is called a dot syntax, because you divide object from the property by the dot(.)
//example >> write() function is a method of the document object

//The Object Constructor >> creating "object type"
function person( name , age, color ) {
    this.name = name ;
    this.age = age ;
    this.favColor = color ;//doesn't have to be the same name as this.example
}

var firstPerson = new person("John" , 42 , "green") //new >> create new instance if an object
var secoundPerson = new person("Amy" , 21 , "red")
//output under >> green 
document.write(firstPerson.favColor + "<br/>");
//output under >> 21 // had some problems with comments on the end of the syntax(unexpected end of input) so i put it above
document.write(secoundPerson.age + "<br/>");

//Object Initialization
//object literal or initializer syntax to create single objects
var John = {name: "John", age: 25};
var James = {name: "James", age: 21};

//adding methods
//Methods are functions that are stored as object properties(I think that I already said that, but better twice than none)ž

function person(name, age) {
    this.name = name; //this means >> the current object
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

var p = new person("Brandon", 21);
p.changeName("John");//changes the initial name
document.write(p.name);

function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  //name of this function is actually name that we chose in first function(yearOfBirth)
  function bornYear() {
    return 2022 - this.age;
  }
  
  var p = new person("jeremy", 43)
  
  document.write(p.yearOfBirth()); 

//Contact Manager
//Quest
//You are working on a Contact Manager app.
//You have created the contact object constructor, which has two arguments, name and number.
//You need to add a print() method to the object, which will output the contact data to the console in the following format: name: number
//The given code declares two objects and calls their print() methods. Complete the code by defining the print() method for the objects.

function contact(name, number) {
    this.name = name;
    this.number = number;
    //only thing you have to add
    this.print = function print() {
    console.log(name + ':' ,number);//+ >> nema razmaka / , >> radi 1 razmak uvijek
    };
    //to here, everything else is already provided
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
//output under >> David: 12345,(novi red) Amy: 987654321
a.print();
b.print();


//CORE OBJECTS
//Arrays  []
//array is an object
//Arrays store multiple values in a single variable.
var courses = new Array("HTML", "CSS", "JS");

var courses = new Array("HTML", "CSS", "JS"); 
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element 

//arr = short for array
//other ways to create arrays

var courses = new Array();//you can add elements any time you want
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
//An array is a special type of object
//An array uses numbers to access its elements ; an object uses names to access its members

//array literal
var courses =["HTML", "CSS", "JS"]; // same as * new Array() *

//The length property
var courses = ["HTML", "CSS", "JS"];
document.write(courses.length); // output >> 3

//Combining Arrays
contact()//joins arrays

var c1 = ["html", "css"];
var c2 = ["js", "c++"];
var courses = c1.concat(c2); //combines c1 and c2 in one array

document.write(courses[2]);

//Associative Arrays >> pretvara array u object
var person = [];
person["age"] = 23; //numbers into strings
person["name"] = "harry";
document.write(person["name"]); // harry

//it is better to use an OBJECT when you want the index to be a string
//Use an array when you want the index to be a number

//math object
//The Math object allows you to perform mathematical tasks, and includes several properties
document.write(Math.PI);//its a constant PI

//setInterval
//setInterval()
//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds)
//clearInterval()
//It will continue calling the function until clearInterval() is called or the window is closed

function myAlert () {
    alert("hello");
}
setInterval(myAlert, 5000);
clearInterval();

//The Date Object
var d = new Date();
//d stores the current date and time

new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

//JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC). One day contains 86,400,000 millisecond.

//a clock
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);


//Store Manager Quest
//You are working on a Store Manager program, which stores the prices in an array.
//You need to add functionality to increase the prices by the given amount.
//The increase variable is taken from user input. You need to increase all the prices in the given array by that amount and output to the console the resulting array.

function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    //I'm using for loop to loop trough every value in array and increasing it by increase var
    //
    for(var i=0; i<=prices.length-1 ; i++) {
        prices[i]=prices[i] + increase;
    }
    console.log(prices);
}
