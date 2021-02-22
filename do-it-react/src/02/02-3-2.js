// javascript
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, foour: 4, other: -1 };
var combined = {
    one: objectOne.one,
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four,
};

var combined = Object.assign({}, objectOne, objectTwo);
var combined = Object.assign({}, objectTwo, objectOne);

var others = Object.assign({}, combined);
delete  others.other;

//ES6
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, foour: 4, other: -1 };
var combined = {
    ...objectOne,
    ...objectTwo,
};

var combined = {
    ...objectTwo,
    ...objectOne,
}

var { other, ...others } = combined;
// others = { one: 1, two: 2, three: 3, four: 4};