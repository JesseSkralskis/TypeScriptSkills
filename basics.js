"use strict";
function addy(n1, n2, pr) {
    if (pr) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var result = addy(number1, number2, printResult);
//adding colon to make specific the type the parameter is
//now if the variable is not hte right type then throws error
//js uses dynamic types resolved runtime
//ts uses static types set during dev.
//ts uses type inference for variables so thats why we dont assign
