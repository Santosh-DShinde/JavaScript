/* variable hosting in js 
varable hosting is only applicable to var variable
it is not applicable to let and const variable 
if we try to perform hosting by the let variale then it shows the reference error
in case of const variable it shows the sysntax error */


b = 'asd';
console.log(b);
var b ;


/*      Function hosting  */

// function finds the double element from the array

arr = [10, 20, 61, 77, 11, 60, 19, 45, 77];

console.log(Double_Occurrence(arr));        // Function Hosting

function Double_Occurrence(Arr)
{
    for(let i = 0; i < Arr.length; i++ )
    {
        for(let j = 0; j < Arr.length; j++)
        {
            if ((Arr[i] == Arr[j]) && (i != j) )  
            {
                return Arr[i];
            }
        }
    }
}

var Arr;                         // Variable hosting 



/*       Normal function call Without hosting       */


function Double_Occurrence(Arr)
{
    for(let i = 0; i < Arr.length; i++ )
    {
        for(let j = 0; j < Arr.length; j++)
        {
            if ((Arr[i] == Arr[j]) && (i != j) )  
            {
                return Arr[i];
            }
        }
    }
}

var arr = [10, 20, 61, 77, 11, 60, 19, 45, 77];

console.log(Double_Occurrence(arr));          
