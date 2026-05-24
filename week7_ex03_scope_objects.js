let globalCount = 0;

function localScopeDemo() {
  let localCount = 10;
  console.log("Inside function:", localCount);
}

localScopeDemo();
// console.log(localCount); // This would cause an error because localCount is only inside the function

function modifyVariables() {
  globalCount = globalCount + 1;

  let localCount = 5;
  localCount = localCount + 1;

  console.log("Inside function - globalCount:", globalCount);
  console.log("Inside function - localCount:", localCount);
}

modifyVariables();
console.log("Outside function - globalCount:", globalCount);

function Student(firstName, lastName, age, grade) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.grade = grade;
}

const student1 = new Student("Aisha", "Naidoo", 18, "A");
const student2 = new Student("Liam", "Smith", 17, "B");
const student3 = new Student("Zara", "Peters", 19, "A+");

console.log(student1);
console.log(student2);
console.log(student3);

const me = {
  name: {
    firstName: "imaad",
    lastName: "bassadien",
  },
  age: 25,
  contact: {
    email: "imaad@gmail.com",
    phone: "123-456-7890",
  },
  hobbies: ["coding", "cars", "gaming"],
};

console.log(me);
console.log(me.name.firstName);
console.log(me.contact.email);
