function multiply(a, b) {
    return a * b;
}

function multiplyTwo(a) {
    return multiply(a * 2);
}

function multiplyX(x) {
    return function(a) {
        return multiply(a, x);
    }
}

const multiplyX = x => a => multiply(a, x);

const multiplyThree = multiplyX(3); // multiplyThree = function(a) { return multiply(a, 3) }
const multiplyFour = multiplyX(4);

const result1 = multiplyThree(3);
const result2 = multiplyFour(3);

const result1 = multiplyX(3)(3);
const result2 = multiplyX(4)(3);

// () => ((x * a) * b) + c
// a = 2, b = 3, c = 4
const equation = (a, b, c) => x => ((x * a) * b) + c;
const formula = equation(2, 3, 4);  // formula = (x) => ((x * 2) * 3) + 4
const x = 10;
const result = formula(x);

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = x => a => multiply(x, a);
const addX = x => a => add(x, a);

const addFour = addX(4);    // addFour = x => add(4, x);
const multiplyTwo = multiplyX(2);   // multiplyTwo = x => multiply(2, x);
const multiplyThree = multiplyX(3);
const formula = x => addFour(muptiplyThree(multiplyTwo(x)));    // formula = x => add(4, multiply(3, multiply(2, x)))