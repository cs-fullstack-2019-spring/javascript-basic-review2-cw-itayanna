
//this code counts from input 1 to input 2 in the console log
var num1=parseInt(prompt("enter an number"));
var num2=parseInt(prompt("enter another number"));

function count(x,y) {


    for (i = num1; i <= num2; i++) {
        console.log(i)
    }
}

count(num1,num2);