//unknown

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Jesse";

// userInput = userName; gets error because userName must be a string and unknown could be anything
// so we would need to impliment some logic to check

//add a check
if (typeof userInput === "string") {
  userName = userInput;
}

//therefor unknown is better choice than any because it is stricter

//************** never */

function generateError(message: string, code: number): never {
    //in js you can throw objects like so
    throw { message: message, errorCode: code };
    
}


//this function can never produce a value 
//developer puts never to comminicate clearly that this function is never meant to produce a result
const rresult = generateError("error", 500);
console.log(rresult);

//functions that cause infinite loop never could be used;