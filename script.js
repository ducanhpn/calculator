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

function operate(oper,a,b){
    switch(oper){
        case "+" : return add(a,b);
        case "-" : return subtract(a,b);
        case "*" : return multiply(a,b);
        case "/" : return divide(a,b);
    }
}

//create button
const container = document.getElementById("container");
const digits = [];
for(let i=0; i<10; i++){
    digits.push(document.createElement("button"));
    digits[i].textContent = i+1;
    container.appendChild(digits[i]);
}
const addOper = document.createElement("button");
addOper.textContent = "+";
container.appendChild(addOper);
const subOper = document.createElement("button");
subOper.textContent ="-";
container.appendChild(subOper);
const mulOper = document.createElement("button");
mulOper.textContent ="*";
container.appendChild(mulOper);
const divOper = document.createElement("button");
divOper.textContent= "/";
container.appendChild(divOper);

const clearButt = document.createElement("button");
clearButt.textContent = "clear";
container.appendChild(clearButt);