// variables
const resetBtn = document.querySelector('#reset-btn');
const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const custom = document.querySelector('#custom');
const tipAmount = document.querySelector('#tip-amount');
const billAmount = document.querySelector('#bill-amount');
const small = document.querySelector('.small')

// event-listneres
resetBtn.addEventListener('click', reset)
bill.addEventListener('input', billCalc)
people.addEventListener('input', billCalc)
custom.addEventListener('input', customTip)

let tip;

// functions
function reset(){
    bill.value = 0;
    people.value = 1;
    tipAmount.textContent = '$0.00';
    billAmount.textContent = '$0.00';
}

function billCalc(){
    checkInput()

    // /function for calculation of bill
    if(people.value > 0){
        let selectedTip = tip;
        let tipTotal = (bill.value * selectedTip) / (people.value * 100);
        let billTotal = (bill.value / people.value) + tipTotal;
        tipAmount.textContent = '$' + tipTotal.toFixed(2)
        billAmount.textContent = '$' + billTotal.toFixed(2)

        people.style.outline = '3px solid hsl(172, 67%, 45%)';
        small.style.visibility = 'hidden';
    }
    
}

// function for validation
function checkInput(){
    const peopleValue = people.value;

    if(peopleValue === '0'){
        people.value = '';
        people.style.outline = '3px solid red';
        small.style.visibility = 'visible';
    }
}


// function for setting tips
function customTip(){
    tip = custom.value;
    billCalc()
}

function fiveTip(){
    tip = 5;
    billCalc()
}

function tenTip(){
    tip = 10;
    billCalc()
}

function fifteenTip(){
    tip = 15;
    billCalc()
}

function twentyFiveTip(){
    tip = 25;
    billCalc()
}

function fiftyTip(){
    tip = 50;
    billCalc()
}