/*
4. Accept one character from user and convert case of that character.
Input :  asus  Output : ASUS
Input :  ASUS  Output : asus
*/

function CaseChanger(name)
{
    if (name === name.toUpperCase()) 
    {
        console.log(name.toLowerCase());
    }
    else if (name === name.toLowerCase()) 
    {
        console.log(name.toUpperCase());
    }
    else{
        console.log("Please Enter Valid input...");
    }
}


function main()
{
    CaseChanger("ASUS");
}

main();
