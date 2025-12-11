const display = document.querySelector(".dis");




function appendToDisplay(value){
    if ( display.value === "" && value === "0")
    return;

if ( display.value === "0" && value === "")
    return;

if ( display.value === "." && value === ".")
    return;

if ( display.value === "*" && value === "*")
    return;

if ( display.value === "+" && value === "+")
    return;

if ( display.value === "-" && value === "-")

    return;
 
display.value += value;
}

function clearDisplay(){

    display.value = "";
}




function calculate(){
  
        try {
              display.value = eval(display.value)
        }
    catch(error){
        display.value = "error";
    }
}


function BackSpace(){
    display.value = display.value.slice(0, -1);
}

function percentage(){

    // display.value = display.value / 100;
    let dis = display.value;
    const  lastOpIndex = dis.search(/[\+\-\*\/](?!.*[\+\-\*\/])/);

    const afterValue = dis.slice(lastOpIndex + 1);
    const operator = dis.slice(lastOpIndex, lastOpIndex + 1)
    
    if(['*', '/'].includes(operator)) {
        const percentageValue = afterValue / 100;
        let newExpr = dis.slice(0, lastOpIndex + 1) + percentageValue;
        
        display.value = newExpr;
    }

    if(['+', '-'].includes(operator)) {
        let previousExp = dis.slice(0, lastOpIndex);

        const lastOperator = previousExp.search(/[\+\-\*\/](?!.*[\+\-\*\/])/);

        let percentageValue = 0;
        if(lastOperator === -1) {
            percentageValue = Number(previousExp) / 100 * Number(afterValue);
        } else {
            const afterValue2 = previousExp.slice(lastOperator + 1);
    
            percentageValue = Number(afterValue) * Number(afterValue2) / 100;
        }

        const newExpr = previousExp + operator + percentageValue;
        display.value = newExpr;
    }
}

document.addEventListener ("keydown" , function (e) {

    let key = e.key;
    const operator = ["+", "-", "/", "*"];

    if ( key >= "0" && key <= "9"){
    display.value += key ;
    e.preventDefault();
}

if ( key === "Enter"){
    calculate();
}


if ( key === "Backspace"){
    BackSpace();
}

if ( key === "Backspace"){
    BackSpace();
}
if(key === "%"){
    percentage();
}

if (operator.includes(key)) {
    display.value += key;
}

if (key === "Delete"){
clearDisplay();
}


});