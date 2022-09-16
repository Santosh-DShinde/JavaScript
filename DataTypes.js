/*   1) Number (2) String (3) Boolean (4) Bigint (5) Undefined (6) Null (7) Symbol */ 

function DataTypes()
{
    let no = 75;
    let str = 'Asus';
    let say = true;
    const budget = 168236745915n;
    let chocolet ;
    let Array = null;
    let smb = Symbol();

    console.log(typeof(no));
    console.log(typeof(str));
    console.log(typeof(say));
    console.log(typeof(budget));
    console.log(typeof(chocolet));
    console.log(typeof(Array));
    console.log(typeof(smb));


    let text = prompt("Enter your age ");
    console.log(text);
}

DataTypes(); 
