/* tslint:disable: no-console */

class Student {
  public fullName: string;
  // enum Color { Red, Green, Blue }

  constructor(public firstName: string, public lastName: string, public age: number) {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
  fullName: string;
  age: string;
}

const printName = (person: Person) => {
  console.log("First Name:", person.firstName);
  console.log("Last Name:", person.lastName);
  console.log("Fullname:", person.fullName);
  console.log("Age:", person.age);
};

const user = new Student("Chinmay", "Bag", 24);
console.log(user);
console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n");
// printName(user);

enum Color { Red = 1, Green = 2, Blue = 3 }
const colorNumber: number = Color.Green;
console.log("c :: ", colorNumber);

const colorName: string = Color[2];
console.log("c2 :: ", colorName);

const names: string[] = ["Chinmay", "Akash", "Ribhu"];
console.log("names :: ", names);

let tuple: [number, string, boolean] = [7, "hello", true];
let [a, b, c] = tuple; // a: number, b: string, c: boolean
console.log("a, b, c: ", typeof a, typeof b, typeof c);
