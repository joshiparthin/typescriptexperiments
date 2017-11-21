let str = "Parth Joshi";


function sayHelloToStrType(helloStr: string) {
    return "Hello to type, " + helloStr;
}

var message = 10;

// console.log (sayHelloToStrType(message));  

// will generate js but give an error in the console 
// regarding the type.

console.log (sayHelloToStrType(str));
