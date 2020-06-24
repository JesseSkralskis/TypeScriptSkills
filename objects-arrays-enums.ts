//common to create global variables like:
// const ADMIN = 0;
// with enum we get more control

enum Role {
  ADMIN = 0,
  READ_ONLY,
  AUTHOR
}

const person =
  //     {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role: [number, string];
  //     } =
  {
    name: "max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    otherRole: Role.ADMIN
  };

//now that tuplet is set we wwill get errors if we try to create an arrray with different structure or length
// push is the exception ts will not catch that the array is now longer than the tuplet length

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
  //now that array is set to string we get all the options for strings
}

//objects

//if you try to add aproperty that doesnt exist then typescript lets you know
//object types are ts objects that show type end in ;
//if set object need to specific about types using curly braces after the :
// for arrays use the what type then the []

//because enum is set we can now

if (person.otherRole === Role.ADMIN) {
  console.log("blah");
}

//avoid any because its the same as vanilla
