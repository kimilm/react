let num = 1;
num = mum * 3;

let str = '문자';
str = '다른 문자';

let arr = [];
arr = [1, 2, 3];

let obj = {};
obc = { name: '새 객체' };

const num = 1;
num = 3;    // error

const str = '문자';
str = '다른 문자';  // error

const arr = [];
arr = [1, 2, 3];    // error

const obj = {};
obc = { name: '새 객체' };  // error

const arr2 = [];
arr2.push(1);   // arr2 = [1]
arr2.splice(0, 0, 0);   // arr2 = [0, 1]
arr2.pop(); // arr2 = [1]

const obj2 = {};
obj2['name'] = '내 이름';   // obj2 = { name: '내 이름' }
Object.assign(obj2, { name: '새 이름' });   // obj2 = { name: '새 이름' }
delete obj2.name;   // obj2 = {}

const num1 = 1;
const num2 = num1 * 3;
const str1 = '문자';
const str2 = str1 + '추가';
const arr3 = [];
const arr4 = arr3.concat(1);
const arr5 = [...arr4, 2, 3];
const arr6 = ar5.slice(0, 1);
const [first, arr7] = arr5; // first = 1, arr7 = [2, 3]
const obj3 = { name: '내 이름', age: 20 };
const objValue = { name: '새 이름', age: obj3.age };
const obj4 = { ...obj3, name : '새 이름' }  // obj4 = { name: '새이름', age: 20 }
const { name, ...obj5 } = obj4; // obj5 = { age: 20 }