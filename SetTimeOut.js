function Operations(a , b)
{
    if (a > b) {
        return a - b;
    } else {
        return a + b;
    }
}

setTimeout(function() {
   console.log( Operations(10, 20));
}, 5000);

