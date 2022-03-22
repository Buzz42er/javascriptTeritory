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
document.write(add)

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
document.write(adition)

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
    document.write("We can doo thiiiis!!")
}
else if (secoundVar > firstVar) {
    document.write("oh nooo")
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
 var i = 0;

 for (; i < 10; ) {
     document.write(i);
 }

 //while loop
 var i = 0;
 while (i<=10) {
     document.write(i + "<br/>")
     i++;
 }