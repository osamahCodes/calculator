function add(first, second){
    return first+second;
}

function subtract(first,second){
    return first-second;
}

function multiply(first,second){
    return first*second;
}

function divide(first,second){
    return first/second;
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
    if(displayValue==='0'){
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
}

const numbers = document.querySelector('.numbers');
const output = document.querySelector('.output');
var displayValue = '0';
numbers.addEventListener('click',(e)=> updateDisplayValue(e));