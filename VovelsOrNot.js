/*
Accept on character from user and check whether that character is vowel
(a,e,i,o,u) or not.
Input : E  Output : TRUE
Input : d  Output : FALSE
*/

function CheckVovels(char)
{
    if ( ((char == "a") || (char == "A")) || ((char == "e")  || (char == "E")) || ((char == "i")  || (char == "I"))  || ((char == "o")  || (char == "O")) || ((char == "u")  || (char == "U")) ){
        return true;
    }
    else{
        return false;
    }
}

function main()
{
    if(! CheckVovels("a")){
        console.log("sorry it's not vovel.");
    }else{
        console.log("Yes, it is vovel.");
    }
}

main();