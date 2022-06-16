function add(first, second){
    displayValue = (first+second)+'';
    output.textContent = displayValue;
    displayValue = '0';
    evaluation.secondValue = first+second;
    evaluation.firstValue = 0;
    return;
}

function subtract(first,second){
    displayValue = (first-second)+'';
    output.textContent = displayValue;
    displayValue = '0';
    evaluation.secondValue = first-second;
    evaluation.firstValue = 0;
    return ;
}

function multiply(first,second){
    displayValue = (first*second)+'';
    output.textContent = displayValue;
    displayValue = '0';
    evaluation.secondValue = first*second;
    evaluation.firstValue = 0;
    return;
}

function divide(first,second){
    displayValue = (first/second)+'';
    output.textContent = displayValue;
    displayValue = '0';
    evaluation.secondValue = first/second;
    evaluation.firstValue = 0;
    return ;
}

function operate(operator, first, second){
    if(operator==='+'){
        add(first, second);
    }else if(operator==='-'){
        subtract(first, second);
    }else if(operator==='*'){
        multiply(first, second);
    } else if(operator==='/'){
        divide(first, second);
    }
    return;
}

function updateDisplayValue(e){
    if(displayValue==='0' ){
        displayValue='';
    }
    if(e.target.id==='zero'){
        displayValue+='0';
    }else if(e.target.id==='one'){
        displayValue+='1';
    }
    else if(e.target.id==='two'){
        displayValue+='2';
    }else if(e.target.id==='three'){
        displayValue+='3';
    }else if(e.target.id==='four'){
        displayValue+='4';
    }else if(e.target.id==='five'){
        displayValue+='5';
    }else if(e.target.id==='six'){
        displayValue+='6';
    }else if(e.target.id==='seven'){
        displayValue+='7';
    }else if(e.target.id==='eight'){
        displayValue+='8';
    }else if(e.target.id==='nine'){
        displayValue+='9';
    }
    output.textContent = displayValue;
    if(evaluation.firstValue!=0){
        evaluation.secondValue = parseInt(displayValue);
    }
}

const numbers = document.querySelector('.numbers');
const output = document.querySelector('.output');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const operations = document.querySelector('.operations');
var displayValue = '0';
let evaluation = {
    firstValue: 0,
    secondValue: 0,
    operator: '',
    isMultiple: false
};
numbers.addEventListener('click',(e)=> updateDisplayValue(e));
equals.addEventListener('click', (e)=>{
    if(evaluation.isMultiple){
        evaluation.firstValue = parseInt(displayValue);
        evaluation.isMultiple=false;
    }
    console.log('1. equals'+evaluation.firstValue)
    console.log('2. equals'+evaluation.secondValue)
    operate(evaluation.operator, evaluation.firstValue, evaluation.secondValue);
})
clear.addEventListener('click', (e)=>{
    evaluation.firstValue = 0;
    evaluation.operator = '0';
    evaluation.secondValue = 0;
    displayValue = '0';
    evaluation.isMultiple=false;
    output.textContent = '0';
})
operations.addEventListener('click',(e)=>{

    if(evaluation.firstValue!=0 && evaluation.secondValue!=0){
        evaluation.isMultiple=true;
        operate(evaluation.operator, evaluation.firstValue, evaluation.secondValue);
    }
    evaluation.firstValue = parseInt(displayValue);
    if(evaluation.isMultiple){
        operate(evaluation.operator, evaluation.firstValue, evaluation.secondValue);
    }
    evaluation.operator = e.target.textContent;
    displayValue= '0';
    console.log('1. operations '+evaluation.firstValue)
    console.log('2. operations '+evaluation.secondValue)

})