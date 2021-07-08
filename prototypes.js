let personPrototype = {
    greet: function (person) {
        return "Hello, " + person.firstName;
    }
};

function personFactory(firstName, lastName) {
    let person = Object.create(personPrototype, {
        firstName: {writeable: false, value: firstName},
        lastName: {writeable: false, value: lastName}
    
    });
        return person;
}

let johnDoe = personFactory("John", "Doe");
let janeSmith = personFactory("Jane", "Smith");