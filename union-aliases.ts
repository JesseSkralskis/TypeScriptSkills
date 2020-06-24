//aliases are typically used for defining unions to save repeating long code
type Combinable = number | string;
//now we can plug in alias
function combine(
  input1: Combinable,
  input2: number | string,
  //saying we want a string but it must be one of these two
  resultType: "as-number" | "as-text"
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultType === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combineAges = combine(30, 26, "as-number");
const combineStringAges = combine("23", "45", "as-text");

const combineNames = combine("max", "anna", "as-text");

//union types help solve when you need more flexibility;
// adding + infront of a variable makes it have to be a number;
//basically allows us to be insured to get errors in development.
//literal types in conjunction with union types can be very useful;
