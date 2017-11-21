interface Person {
    firstName: string;
    lastName: string;
}

function printPerson(person: Person) {
    return  person.firstName + " " + person.lastName;
}

var samplePerson = {firstName: "Parth", lastName: "Joshi"};


console.log (printPerson(samplePerson));
