const myMethodSymbol = Symbol("myMethod");

class MyClass {
    // You can define a method using a symbol as a property key
    [myMethodSymbol]() {
      console.log("Hello from myMethod!");
    };

  // Create a "regular" method that accesses the symbol-defined method
  callMyMethod() {
    this[myMethodSymbol]();
  }
}

const instance = new MyClass();
instance[myMethodSymbol](); // Output: Hello from myMethod!
