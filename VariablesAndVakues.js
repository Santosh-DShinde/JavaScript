/*
4 Ways to Declare a JavaScript Variable:
    Using var
    Using let
    Using const
    Using nothing
 */

    a = 10;
    console.log(typeof(a));


    // variables declaration using Var keyword 

    var variable1 = 11;
    var variabl
        var variable1 = 11;
        var variable2 = 21.72;
        var variable3 = "JavaScript";
        var variable4 = NaN
        var variable5 = 12365478932145645645435468n;
    
    console.log(`value of variable 1 is : ${variable1}  value of variable 2 is : ${variable2}
        value of variable 3 is : ${variable3} value of variable 4 is : ${variable4}   
        value of variable 5 is : ${variable5}`);
    
    e2 = 21.72;
    var variable3 = "JavaScript";
    var variable4 = NaN
    var variable5 = 12365478932145645645435468n;

console.log(`value of variable 1 is : ${variable1}  value of variable 2 is : ${variable2}
    value of variable 3 is : ${variable3} value of variable 4 is : ${variable4}   
    value of variable 5 is : ${variable5}`);



    // variables declaration using let keyword 

let var1 =  51;
let var2 = 18.63;
let var3 = "Hello JavaScript";
let var4 = NaN;
let var5 = 3456454564564564654564654654564n
let var6 = false;

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);


    // variables declaration using const keyword 

const num = 34;
const float = 66.34;
const string = "hello world";
const nan = NaN;
const big_int = 5456407880258700n;
const T_F = false;

console.log(`\n ${num} \n ${float}\n ${string}\n ${nan}\n ${big_int}\n ${T_F}`);



let num1 = 11;
var variable1 = 55;
const cst = 99;


// let num1 = 80;       // Error
var variable1 = 59;
// const cst = 785;    // Error


num1 = 10;
variable1 = 22;
// cst = 44;           // Error


console.log(num1);
console.log(variable1);
console.log(cst);


// we cant redeclare let variables but we can reassign using let keyword (after reassigning we get new updated value)
// we cant redeclare const variables as well as we cant reassign it
// we can re-declare ass well as reassign var variables

var mentos;
let almond;
// const Kitkat;        Error 

console.log(mentos);
console.log(almond);
// console.log(Kitkat); 
