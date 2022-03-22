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
document.write(adition+ "<br/>")

var firstVar = 5;
var secoundVar = 4;

//function ()//&& and, || or , ! not


var firstString = "I am learning";
var secoundString = "JavaScript with SoloLearn.";
document.write(firstString + secoundString);



//this is working now
//I have conented html file with this one

//conditionals and loops
// if statement

if(firstVar > secoundVar) {
    document.write("We can doo thiiiis!!"+ "<br/>")
}
else if (secoundVar > firstVar) {
    document.write("oh nooo"+ "<br/>")
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
}

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
 const i = 0;

 for (; i < 10; ) {
     document.write(i+ "<br/>");
 }

 //while loop
 //same i from before
 while (i<=10) {
     document.write(i + "<br/>")
     i++;
 }

 //do...while loop
 do {
     document.write(i + "<br/>")
     i++;
 }
 while (i<10);

 //FUNCTIONS
 //simple function
 function somesimplef() {
     alert("ahoj")
 }
somesimplef(); //you need to call the function to execute

//parametars, for Functions
function seyHello(name) { //parameter are used by calling the function and placing the value in the parentheses
    alert ("Hi, "+ name);

}
sayHello("Jure"); // and you can call it multiple times with the other value every time

function myAlert(txt) {
    alert("Hello" + txt);
}

myAlert("Stuff"); // as a value you can but any kind of string
myAlert("Test"); //example for more then one value for the same function

// using multiple parametars 

function myFunc(nameF, ageF) {
    document.write(nemeF + "is" + age + "years old.");

}

myFunc("Jure", 22); // more then one value
// you can also use it as = myFunc(x +y)

//return in functions
function myFunction(a,b) {
    return a * b;
}
var sumery = myFunction(5,6);
//return value will end up in x 

//you can also make full calculations inside functions
function addNumbers(a,b) {
    var c = a+b;
    return c;
}
document.write(addNumbers(40,2));

//\n - makes an enter command
//alert, prompt, confirm
//alert
//1 parametar can be accepted by the "alert" function
alert ("hello\nmy dude");

//prompt box
//A prompt box is often used to have the user input a value before entering a page.
//When a prompt box pops up, the user will have to click either OK or Cancel to proceed after entering the input value.
//If the user clicks OK, the box returns the input value. If the user clicks Cancel, the box returns null.

var user = prompt("please enter your name");
alert (user);

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
}

//ok returns true
//cancel returns false


function max(a,b) {
    if (a >= b) return a;
    else return b;
}

//<script src="script.js">

function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    
    console.log(convert(amount, rate));
}
//You are making a currency converter app.
//Create a function called convert, which takes two parameters: the amount to convert, and the rate, and returns the resulting amount.
//The code to take the parameters as input and call the function is already present in the Playground.
//Create the function to make the code work.

function convert(amount, rate) {
     convert = amount * rate
     return convert;
    

}

//OBJECTS
//