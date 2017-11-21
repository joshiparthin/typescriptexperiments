class Employee{ 
    name: string;
    age: number;

    constructor (public firstName:string, public lastName:string, public emp_age) {
        this.name = firstName + " " + lastName;
        this.age = emp_age;
    }
}

interface Person { 
    firstName : string,
    lastName : string
}

function sayHelloToInterfaceAndClass (p: Person) {
    return p.firstName + " " + p.lastName;
}


let emp = new Employee("Parth","Joshi",18);

console.log(sayHelloToInterfaceAndClass(emp));
console.log (emp.lastName);