const Arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let i = 0;

while (i < Arr.length ) 
{
    if (i == 5) {
        break;
    }
    console.log(Arr[i], i);   
    i++; 
}