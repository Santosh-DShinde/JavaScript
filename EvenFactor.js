/*
Write a program which accept number from user and print even factors of that
number.
Input :24
Output: 1 2 4 6 8 12
*/

function PrintEvenFactors(Num)
{
    arr = [];
    if(Num < 0)
    {
        Num = -Num;
    }

    for(let i = 0; i <= Num/2; i++)
    {
        if (((Num % i) == 0) && ((i % 2) == 0))
        {
            arr.push(i);
        }
    }
    console.log(arr.join(' '));
    
}

function main()
{
    PrintEvenFactors(24);
}

main();
