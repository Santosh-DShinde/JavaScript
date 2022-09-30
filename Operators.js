// /*  Operators   */

//  + , -, *, /    ( Arithmetic Operator )
//  **     ( Exponential operator )
//  ++ , -- ( increament and decreament operator) / ( shorthand operator )
//  && , || , ! ( logical operator)
//  ==, ===, != , !=== , >, <, >=, <=, ?   ( comparison operator )
//  &, |, ~, ^, <<,>>, >>>  ( Bitwise )  
//  instanceof	( Returns true if an object is an instance of an object type )
//  typeof  (return the type of variable )

function Addition(no1, no2)
{
    return no1 + no2;
}

function Substraction(no1, no2)
{
    return no1 - no2;
}

function Multiplication(no1, no2)
{
    return no1 * no2;
}

function Division(no1, no2)
{
    return no1 / no2;
}

console.log(Addition(50, 5));
console.log(Substraction(50, 5));
console.log(Multiplication(50,5));
console.log(Division(50,5));

// Exponential operator

function Expo(no3, no4)
{
    return no3 ** no4 ;
}
console.log(Expo(3, 4));

console.log();

// increament decrement operator

let iCnt1 = 10;
let iCnt2 = 20;

console.log(  ++iCnt1  ) ;
console.log(  --iCnt2  ) ;

console.log(  iCnt1++  ) ;
console.log(  iCnt2-- ) ;

console.log();

console.log(iCnt1);
console.log(iCnt2);


// // ternary operator 
let a = 10 ;
let b = 1;
((a > b) ? console.log('a is greater') : (a < b)? console.log('b is greater') : (a == b )? console.log ('both values are same'): console.log ('Error : while execution the code'));
