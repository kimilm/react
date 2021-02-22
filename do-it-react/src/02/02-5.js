
add();

function add(first, second) {
    return first + second;
}

// typeof add ==='function'
var add = function(first, second) {
    return first + second;
}

// ES6
var add = (first, second) => {
    return first + second;
}

// just do return, can no block
var add = (first, second) => first + second;

// if return value is object
var addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second });

function addNumber(num) {
    return function (value) {
        return num + value;
    };
}
// same
var addNumber = num => value => num + value;

class MtClass {
    value = 10;
    constructor() {
        var addThis2 = function(first, second) {
            return this.value + first + second;
        }.bind(this);   // callback function 'this' location error -> solution is bind

        // contains bind method
        var addThis3 = (first, second) => this.value + first + second;  
    }
}