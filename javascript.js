function add(first, second){
    displayValue = (first+second)+'';
    output.textContent = displayValue;
    displayValue = '0';
    evaluation.firstValue = first+second;
    return;
}

function subtract(first,second){
    displayValue = (first-second)+'';
    output.textContent = displayValue;
    displayValue = '0';
    evaluation.firstValue = first-second;
    return ;
}

function multiply(first,second){
    displayValue = (first*second)+'';
    output.textContent = displayValue;
    displayValue = '0';
    evaluation.firstValue = first*second;
    return;
}

function divide(first,second){
    if (second===0) {
        displayValue = 'NAN';
    }else{
        displayValue = Math.round(first/second)+'';
    }
    output.textContent = displayValue;
    displayValue = '0';
    evaluation.firstValue = first/second;
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
    // if(evaluation.firstValue!=0){
    //     evaluation.secondValue = parseInt(displayValue);
    // }
}

const numbers = document.querySelector('.numbers');
const output = document.querySelector('.output');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const operations = document.querySelector('.operations');
var displayValue = '0';
let evaluation = {
    firstValue: 0,
    operator: '',
};
numbers.addEventListener('click',(e)=> updateDisplayValue(e));
equals.addEventListener('click', (e)=>{
    operate(evaluation.operator, evaluation.firstValue, parseInt(displayValue));
})
clear.addEventListener('click', (e)=>{
    evaluation.firstValue = 0;
    evaluation.operator = '';
    displayValue = '0';
    output.textContent = '0';
})
operations.addEventListener('click',(e)=>{

    if(evaluation.firstValue!=0 && parseInt(displayValue)!=0){
        operate(evaluation.operator, evaluation.firstValue, parseInt(displayValue));
    }
    if (evaluation.firstValue===0) {
        evaluation.firstValue = parseInt(displayValue);
    }
    evaluation.operator = e.target.textContent;
    displayValue= '0';

})