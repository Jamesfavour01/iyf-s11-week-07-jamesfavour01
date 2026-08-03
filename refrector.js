// Good Variable Names

const firstName = "James";

const lastName = "Kimani";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// Small Functions

function add(a,b){

    return a+b;

}

function subtract(a,b){

    return a-b;

}

function multiply(a,b){

    return a*b;

}

function divide(a,b){

    return a/b;

}

console.log(add(5,3));

console.log(subtract(10,4));

console.log(multiply(5,6));

console.log(divide(12,4));

// Arrays

const fruits=["Apple","Orange","Banana"];

fruits.forEach(function(fruit){

    console.log(fruit);

});

// Objects

const student={

    name:"James",

    age:22,

    course:"JavaScript"

};

console.log(student.name);