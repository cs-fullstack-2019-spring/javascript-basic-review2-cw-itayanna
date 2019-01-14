
//the user inputs are saved to a varible
var numInput=parseInt(prompt("enter a number"));
var input2=prompt("enter anything you want");
//this funtion checks in the first input is a number
// if it is then it adds 5 to it and logs it in the console
function response(x) {
    if (isNaN(x)){
        console.log("ERROR")
    }
    else {console.log(x+5)}


}
//this function checks if the second input is a string
// if it is it adds is awsome to it
function response2(y) {
    if (isNaN(y)){
        console.log(y+" is awsome")
    }
    else {
        console.log("ERROR")
    }

}
//the functions above are called
response(numInput);
response2(input2);