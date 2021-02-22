// for
function parse(qs) {
    var queryString = qs.substr(1); // queryString = 'banana=10&apple-20&orange=30'
    var chunks = qs.split('&');
    var result = {};

    for (var i = 0; i < chunks.length; ++i) {
        var parts = chunks[i].split('=');
        var key = parts[0];
        var value = parts[1];
        // var value = Number.isNaN(number(parts[1])) ? parts[1] : Number(parts[1]); // parse to number

        result[key] = value;    // result = { banana: '10' }
    }

    return result;
}

// ES6 forEach()
function parse(qs) {
    const queryString = qs.substr(1); // queryString = 'banana=10&apple-20&orange=30'
    const chunks = qs.split('&');
    let result = {};

    chunks.forEach((chunk) => {
        const parts = chunk.split('=');
        const key = parts[0];
        const value = Number.isNaN(number(parts[1])) ? parts[1] : Number(parts[1]);

        result[key] = value;    // result = { banana: 10 }
    });

    return result;
}

function parse(qs) {
    const queryString = qs.substr(1); // queryString = 'banana=10&apple-20&orange=30'
    const chunks = qs.split('&');
    let result = {};

    chunks.forEach((chunk) => {
        const [ key, value ] = chunk.split('=');
        result[key] = value;    // result = { banana: '10' }
    });

    return result;
}

// ES6 map()
// 각 배열 요소를 정의된 함수를 통해 변환한 결괏값들로 새 배열을  반환함. 배열을 가공하여 새 배열을 만드는 함수
function parse(qs) {
    const queryString = qs.substr(1); // queryString = 'banana=10&apple-20&orange=30'
    const chunks = qs.split('&');
    const result = chunks.map((chunk) => {
        const [ key, value ] = chunk.split('=');
        return { key: key, value: value };
    });
    return result;
}

// reduce()
// reduce(반환 함수, 초기값)
// 배열을 각체로 반환하고 싶을때 사용

function sum (numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

sum([1, 2, 3, 4,5 ,6, 7, 8, 9, 10]) // 55

// 실무에서는 reduce를 배열 -> 특정 자료형 으로 변환하는데 사용함

function parse(qs) {
    const queryString = qs.substr(1); // queryString = 'banana=10&apple-20&orange=30'
    const chunks = qs.split('&');
    return chunks.map((chunk) => {
        const [ key, value ] = chunk.split('=');
        return { key: key, value: value };
    }).reduce((result, item) => {   // result = {}, item = { key: 'banana', value: '10' }
        result[item.key] = item.value;  // result = { banana : '10' }
        return result;
    }, {}); // 초기값으로는 원하는 자료형인 빈 객체 ({}) 전달
}