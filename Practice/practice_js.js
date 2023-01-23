console.log("Hello, world!");

function printHello() {
    console.log("Hello THere!")
};

function addition(a, b) {
    return a + b
};

function doubleAddition(c, d) {
    var total = addition(c, d)*2;
    return total;
}

// arrow functions
printHello = () => "Hello There!";

//addition function refactored to arrow funciton
addition = (a,b) => a+b;

//refactoring the doubleAddition funciton
doubleAddition = (c,d) => addition(c,d) * 2;

// for loops
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
function listLoop(userList) {
    for (var i=0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}

let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

for (var i=0; i<5; i++) {
    console.log("I am " + i);
}