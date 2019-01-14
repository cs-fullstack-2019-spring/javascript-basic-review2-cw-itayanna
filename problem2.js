
//this code logs pin "pin is set" if both inputs are equal and gives an error if they do not

var pin=prompt("enter a 4 digit pin");
var confirm=(prompt("re-enter your 4 digit pin"));

if (pin===confirm){
    console.log("pin is set")
}
else {
    console.log("ERROR: PINS DO NOT MATCH")
}

