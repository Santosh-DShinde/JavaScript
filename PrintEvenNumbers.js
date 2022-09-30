/*
Write a program which accept one number from user and print that number of
even numbers on screen.
Input :7
Output:2 4 6 8 10 12 14
*/

function printEvenNumbers(iNo)
{
    let i = 0;
    let j = 0;
    if (iNo <= 0)
    {
        return -1;
    }
    else{
        while (j != iNo) {
            if (i % 2 == 0) 
            {
                console.log(i);
                j++;
            }
            i++;
        }
    }
}

function main()
{
    let result = printEvenNumbers(-7);
    if (result == -1) {
        console.log("please pass the valid input ...");     
    }
}

main();
