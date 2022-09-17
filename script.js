function add(a,b){
    console.log(a);
    console.log(b);
    console.log(a+b);
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b === 0){
        clear();
        return "can't divide by 0";
    }
    return a/b;
}

function operate(oper,a,b){
    //check a,b
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    switch(oper){
        case "+" : return add(number1,number2);
        case "-" : return subtract(number1,number2);
        case "*" : return multiply(number1,number2);
        case "/" : return divide(number1,number2);
    }
}

//create button
//digits
const container = document.getElementById("container");
const digits = [];
for(let i=0; i<10; i++){
    digits.push(document.createElement("button"));
    digits[i].textContent = i;
    container.appendChild(digits[i]);
}
//operators
const operators = [];
for(let i=0; i<4;i++){
    operators.push(document.createElement("button"));
    container.appendChild(operators[i]);
}
operators[0].textContent="+";
operators[1].textContent="-";
operators[2].textContent="*";
operators[3].textContent="/";
//equals button
const equalsButt = document.createElement("button");
equalsButt.textContent ="=";
container.appendChild(equalsButt);
//clear button
const clearButt = document.createElement("button");
clearButt.textContent = "clear";
container.appendChild(clearButt);

//div display
const display = document.createElement("div");
container.appendChild(display);

let numberInput =""; 
const dataForCal = [];

//when number clicked
digits.forEach(digit => digit.addEventListener("click",function(){
    numberInput += digit.textContent;
    display.textContent = dataForCal.join(" ") + numberInput;
}));

//when operator clicked
operators.forEach(
    operator => operator.addEventListener("click",function(){
        //put actual number in array
        dataForCal.push(numberInput);
        //check if array have 2 numbers and 1 old operator
        if(dataForCal.length === 3){
            //calculate and store result in temp variable
            let temp = operate(dataForCal[1],dataForCal[0],dataForCal[2])
            //reset array 
            dataForCal.length = 0;
            //push new result and new operator in array
            dataForCal.push(temp);
            dataForCal.push(operator.textContent);
            //reset numberInpput
            numberInput ="";
            display.textContent = dataForCal.join(" ");
        }
        else{ //if not, just push new operator
            dataForCal.push(operator.textContent);
            display.textContent = dataForCal.join(" ");
            numberInput="";
        }
    })
);

//when equal clicked
equalsButt.addEventListener("click",function(){
    //check error
    if(dataForCal.length === 2 && numberInput ===""){
        clear();
        display.textContent ="ERROR";
        return;
    }
    if( !dataForCal.length){
        clear();
        display.textContent ="ERROR";
        return;
    }

    let temp = operate(dataForCal[1],dataForCal[0],numberInput);
    display.textContent = temp;
    clear();
});

function clear(){
    numberInput="";
    dataForCal.length = 0;
}
//when clear click
clearButt.addEventListener("click",function(){
    clear();
    display.textContent="";
});