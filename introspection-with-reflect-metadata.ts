import "reflect-metadata";

class TestClass {
  name: string = "Test";
  age: number = 23;
}

Reflect.defineMetadata("getClass", "TestClass", TestClass.prototype, "");

const className = new TestClass();

let metadataValue = Reflect.getMetadata("getClass", className, "");

console.log("Name of the class is : ", metadataValue);
