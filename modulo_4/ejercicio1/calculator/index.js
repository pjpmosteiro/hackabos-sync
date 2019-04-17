'use strict';

const calculator = require('./calculator.js');

const { substract, mul, div } = calculator;

const resultSum = calculator.sum(5, 3);

const resultSubstract = substract(5, 3);

mul(3, 4).then((resultMul) => {
    console.log('resultMul', resultMul);
}).catch((err) => {
    console.error('errorMul', err);
});

console.log(`resultSum: ${resultSum}`);
console.log(`resultSubstract: ${resultSubstract}`);

async function startDiv() {
    try {
        const resultDiv = await div(6, 2);
        console.log(`resultDivAsync: ${resultDiv}`);
    } catch (err) {
        console.error('error resultDivAsync', err);
    }
}

startDiv();

// tratar div como un metodo async await
div(4, 2).then((resultDiv) => {
    console.log('resulDiv', resultDiv);
}).catch((err) => {
    console.error('errorDiv', err);
});
