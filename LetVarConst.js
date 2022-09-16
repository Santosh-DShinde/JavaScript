// let var const 

// let num1 = 10;
// var fact = 31;
// const cst = 99;

function Test(no1)
{
    let num1 = 61;
    var fact = 62;
    const cst = 63;
    

    console.log(no1);                      // 65
    console.log('inside block ',num1);     
    console.log('inside block ',fact);     
    console.log('inside block ', cst);     

}

// console.log(no1);        // Error

Test(65);

// console.log('outside block ', fact);
// console.log('outside block ', cst); 
console.log('outside block ', num1);
