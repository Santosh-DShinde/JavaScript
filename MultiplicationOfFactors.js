/*Write a program which accept number from user and display its multiplication of
factors.
Input  :  12  
Output :  144   ( 1 * 2 * 3 * 4 * 6)
*/


function FindFactors(Num)
{
    if(Num < 0){ Num = -Num}
    function MultiplicationOfFactors()
    {

        let mult = 1;
        for(let i = 1; i <= Num/2; i++)
        {
            if ((Num % i) == 0) {
                mult *= i;
            }
        }
        return mult;
    }
    return MultiplicationOfFactors();
}


let main = function()
{
    console.log("Multiplication of factors is : %d ", FindFactors(12));    
}

main();
