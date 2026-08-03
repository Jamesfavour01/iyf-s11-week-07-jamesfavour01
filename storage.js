// localStorage Example

localStorage.setItem("studentName","James");

const student = localStorage.getItem("studentName");

console.log(student);

localStorage.removeItem("studentName");

// sessionStorage Example

sessionStorage.setItem("course","JavaScript");

const course = sessionStorage.getItem("course");

console.log(course);

// State Persistence Example

const user = {

    name:"James",

    age:22,

    country:"Kenya"

};

localStorage.setItem("user",JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));

console.log(savedUser);