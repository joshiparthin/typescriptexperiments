var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, emp_age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emp_age = emp_age;
        this.name = firstName + " " + lastName;
        this.age = emp_age;
    }
    return Employee;
}());
function sayHelloToInterfaceAndClass(p) {
    return p.firstName + " " + p.lastName;
}
var emp = new Employee("Parth", "Joshi", 18);
console.log(sayHelloToInterfaceAndClass(emp));
console.log(emp.lastName);
