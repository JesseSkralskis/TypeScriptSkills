function addIt(n1: number, n2: number): number {
  return n1 + n2;
}

function printResults(num: number) {
  console.log("Results:", +num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number)=> void) {
    const result = n1 + n2;
    cb(result);
}

printResults(addIt(3, 4));

//return types
//if you change n1 to n2 to toString() ts will infer now it should be a string
// by adding colon after paramater list then you can explicitly set
// better to let ts infer unless a specific reason to set exlicitly
//void just means there is no return
//undefined is also a type in ts but would be used when a fuction has a return but without a value;

// let combineValues: Function = addIt;
// console.log(combineValues(8, 8));


let combineValues: (a: number, b: number) => number;

combineValues = addIt;

//can define a variable to be a function but then any function will pass


// a call plugging in an ananomous function that matches the criteria for what we set above
// even if you return something it will still not retuyrn because it was defined as void;
//in general ts is strict about paramters but cares less about return types;

addAndHandle(5, 6, (result) => {
    console.log(result)
})