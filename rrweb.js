var TestObject = (function () {
   function TestObject(name) {
     this.name = name;
   }

  TestObject.prototype.sayHello = function() {
    return "Hello there : " + this.name;
  }
  return TestObject;
} () );

var myTestObject = new TestObject("Test name");
