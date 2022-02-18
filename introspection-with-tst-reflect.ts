import { getType, Type } from "tst-reflect";

interface ITestClass {
  name: string;
  age: number;
}

class TestClass {
  name: string = "Test";
  age: number = 23;
}

const obj = new TestClass();

const typeOfITestClass: Type = getType<ITestClass>();
const typeOfTestClass: Type = getType<TestClass>();

// console.log(typeOfAnimal.isAssignableTo(typeOfIAnimal)); // true
console.log(
  "Type of TestClass is assignable to ITestClass:",
  typeOfTestClass.isAssignableTo(typeOfITestClass)
);
