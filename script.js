// 1-Write a logic to print the Fibonacci series 

let fibonacciNum = parseInt(prompt("Enter a number"));
let num1 = 0;
let num2 = 1;
let nextTerm;
console.log('Fibonacci Series:');
for (let i = 1; i <= fibonacciNum; i++) {
    console.log(num1);
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}



// 2-Write a logic to find the factorial of a given a number 

let factNum = parseInt(prompt("Enter a number to find its factorial"));
let factorial = 1;
for (let i = factNum; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(`factorial of ${factNum} is ${factorial}`);



// 3-Remove all the occurrences of the given character. 

let string = prompt("Enter a string.");
let character = prompt("Enter the Character you want to remove.")
console.log(string.replaceAll(character, " "));


// 4-How will you reverse an string.

let stringRev = prompt("Enter a string to reverse it");
for (let i = stringRev.length - 1; i >= 0; i--) {
    console.log(stringRev[i]);
}



// // 5-How to apply getter and setter method with the help of using object? 

const getAndSet = {
    name: "Rao Rabi"
}
console.log(getAndSet.name);

//set a new name
getAndSet.name = "Ali"

console.log(getAndSet.name);



// 6-Can you print the first repeating character from the string 

let stringRep = "Hello There!";

for (let i = 0; i < stringRep.length - 1; i++) {
    for (let j = 1; j < stringRep.length; j++) {
        if (stringRep[i] == stringRep[i + j]) {
            console.log(stringRep[i]);
        }
    }
}



// 7-How would you check if the given number is integer or not? 

let numCheck = parseFloat(prompt("Enter a number or integer"));
if (numCheck % 1 == 0) {
    console.log(`${numCheck} is integer`);
}
else {
    console.log(`${numCheck} is not an integer`);
}


// 8-Write an function that would you allow to call a function like this functionName(param1)(param2)

sum = (num1, num2) => {
    return (num1 + num2)
}
console.log(sum(35, 45));