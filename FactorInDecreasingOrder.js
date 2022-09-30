/*
Write a program which accept number from user and display its factors in
decreasing order.
input  = 12
output = 6 4 3 2 1
*/

function DisplayReverseFactors(no)
{
    if (no < 0) {    
        no = -no;
    }
        function reverseFactorial()
        {   const arr = [];
            for(let i = no/2; i >= 0; i--)
            {
                if ((no % i) == 0) {
                  arr.push(i);  
                }
            }
            console.log(arr.join(' '));
        }
   reverseFactorial();
}

function main()
{
    DisplayReverseFactors(-12)
}

main();
