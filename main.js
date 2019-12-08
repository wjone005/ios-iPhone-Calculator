const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function getDigit(digit){
    const { displayValue, waitingForSecondOperand } = calculator;
    // Overwrite `displayValue` if the current value is '0' otherwise append to it
    if (waitingForSecondOperand === true){
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
        console.log(calculator);
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}
function inputDecimal(dot){
    if (calculator.waitingForSecondOperand === true) return;

    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)){
        // Append the decimal point
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);

    if  (operator && calculator.waitingForSecondOperand){
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

    if (firstOperand == null){
        calculator.firstOperand =inputValue;
    } else if (operator){
        currentValue = firstOperand || 0;
        const result = performCalculation[operator](firstOperand, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    //'%': (firstOperand, secondOperand) => getPercent() + secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand,
    '%': (firstOperand, secondOperand) => firstOperand/100 || secondOperand/100  
};

function resetCalculator(){
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand =false;
    calculator.operator = null;
    console.log(calculator);
}

function getPercent(){
    if (calculator.firstOperand == true){
        console.log("null"); 
    }   
}

document.getElementsByClassName('')

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    console.log(calculator);
    return;
  }

  if (target.classList.contains('percent')){
      getPercent(target.value);
      updateDisplay();
      console.log(calculator);
      return;
  } 

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
    updateDisplay();
    return;
  }

  getDigit(target.value);
  updateDisplay();
});


/* let clearData = document.getElementById('clears');

deleteData()

function getAdd(){
    document.getElementById();
    return firstOperand + secondOperand;
}

function getSubtraction(){
   return firstOperand - secondOperand;
}

function getMulitpy(){
    return firstOperand * secondOperand;
}

function getDivision(){
    return firstOperand / secondOperand;
}

function operate(operator, firstOperand, secondOperand){
    switch(operator) {
        case '+':
            return getAdd();
        case '-':
            return getSubtraction();
        case '*':
            return getMulitpy();
        case '/':
            return getDivision();
    }
}

function deleteData(clearData){
    Array.from(clearData).forEach(function(clearData){
        clearData.addEventListener('click', function(e){
            alert("This works");
            //document.getElementById("input").input.value = " ";
            //document.getElementById("longParagraph").style.display = "block";
        })
    })
} */