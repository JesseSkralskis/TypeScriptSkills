function addy(n1: number, n2: number, pr: boolean) {
  if (pr) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

var result = addy(number1, number2, printResult);

//adding colon to make specific the type the parameter is
//now if the variable is not hte right type then throws error
//js uses dynamic types resolved runtime
//ts uses static types set during dev.
//ts uses type inference for variables so thats why we dont assign
