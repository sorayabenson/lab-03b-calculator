// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1')
const addInput2 = document.getElementById('add-input-2')
const addButton = document.getElementById('add-button')
const addResult = document.getElementById('add-results')

const subInput1 = document.getElementById('sub-input-1')
const subInput2 = document.getElementById('sub-input-2')
const subButton = document.getElementById('sub-button')
const subResult = document.getElementById('sub-results')

const mulInput1 = document.getElementById('mul-input-1')
const mulInput2 = document.getElementById('mul-input-2')
const mulButton = document.getElementById('mul-button')
const mulResult = document.getElementById('mul-results')

const divInput1 = document.getElementById('div-input-1')
const divInput2 = document.getElementById('div-input-2')
const divButton = document.getElementById('div-button')
const divResult = document.getElementById('div-results')

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const number1 = Number(addInput1.value);
    const number2 = Number(addInput2.value);
    const result = number1 + number2;

    addResult.textContent = result;
});

subButton.addEventListener('click', () => {
    const subNumber1 = Number(subInput1.value);
    const subNumber2 = Number(subInput2.value);
    const result = subNumber1 - subNumber2;

    subResult.textContent = result;
});

mulButton.addEventListener('click', () => {
    const mulNumber1 = Number(mulInput1.value);
    const mulNumber2 = Number(mulInput2.value);
    const result = mulNumber1 * mulNumber2;

    mulResult.textContent = result;
});

divButton.addEventListener('click', () => {
    const divNumber1 = Number(divInput1.value);
    const divNumber2 = Number(divInput2.value);
    const result = divNumber1 / divNumber2;

    divResult.textContent = result;
});