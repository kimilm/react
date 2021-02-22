// js
var x = 0;
var y = 0;
var obj = { x: x, y: y };
var randomKeyString = 'other';
var combined = {};
// 연산 결과로 키값을 대입할 때는 키값을 지정할 코드를 추가로 작성해야 함
combined['one' + randomKeyString] = 'some value';
// 객체에 함수를 추가할 때는 변수에 함수를 할당해야 함.
var obj2 = {
    x: x,
    methodA: function() { console.log('method A'); },
    methodB: function() { return 0; }
}

//ES6
var x = 0;
var y = 0;

// 자동으로 키의 이름을 사용하여 키값을 지정
var obj = { x, y };
var randomKeyString = 'other';

// 객체 생성 블록 안에 대괄호를 사용하여 표현식을 작성하면 추가하여 계산된 키값을 생성할 수 있음
var combined = {
    ['one' + randomKeyString]: 'some value',
};

// function 키워드 생략하여 함수 선언 가능
var obj2 = {
    x,
    methodA() { console.log('method A'); },
    methodB() { return 0; }
};

// js
var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;
var temp = item2;
item2 = item1;
item1 = temp;
var obj = {
    key1: 'one',
    key2: 'two',
};
var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'defalut key3 value';
var newKey1 = obj.key1;

// ES6
var list = [0, 1];
var [ item1, item2, item3 = -1, ] = list;
[item2, item1] = [item1, item2];
var obj = {
    key1: 'one',
    key2: 'two',
};
var {
    key1: newKey1,
    key2,
    key3 = 'default key3 value'
} = obj;

var [item1, ...otherItems] = [0, 1, 2];
var { key1, ...others } = { key1: 'one', key2: 'two' };

// otherItems = [1, 2];
// others = { key2: 'two' };
// json 데이터 변환시 유용함