/* -------------------------------------------------------------------------- */
let member = ['kim', true];
let member2 = ['kim', 100];
let member3 = ['park', false, 9]; //컴파일 시, 9는 그대로 출력된다.
let john = {
    name: 'kim',
    age: '123',
    age2: '123',
    age3: '123',
    age4: '123',
};
// console.log(john);
/* -------------------------------------------------------------------------- */
class User {
    constructor(name) {
        this.name = 'cool';
    }
}
// const hi = new class();
// console.log(hi);
//any
// let example:any;
let names = 123;
let kay = 'fff';
let examples;
// console.log(examples + 3); //unknown과 3은 더 할 수 없다.
// let examplez: string|number;
// examplez+1
function 함숭(x) {
    1 + 1;
}
함숭(1);
function 함슐(x) {
    return x;
}
// console.log( 함슐());
/* -------------------------------------------------------------------------- */
function MyFnc(x) {
    if (typeof x === 'string') {
        return x + '카카';
    }
    else if (typeof x === 'number') {
        return x + 10;
    }
    else {
        return '뭐하냐';
    }
}
console.log(MyFnc(true));
/* -------------------------------------------------------------------------- */
let obj = {
    name: 'kim',
    age: 13,
    isHome: true,
};
// function Test(a:string|number|boolean) {
//   if( 'isHome' in obj ) {
//     console.log('쩌노');  
//   } else if ('home' in obj) {
//     console.log('큉');
//   }
// }
// Test();
/* -------------------------------------------------------------------------- */
function Hii(a) {
    let array = [];
    array[0] = a;
}
let n = 'kim';
Hii(123);
/* -------------------------------------------------------------------------- */
let x = "hello";
if (typeof x === "string") {
    console.log(x.toUpperCase());
}
else {
    console.log(x.toFixed(2));
}
let cutZero = function (x) {
    let result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}
function sumFunction(a, b, c) {
    let results = b(a);
    let results2 = c(results);
    console.log(results2);
}
sumFunction('010-1111-2222', cutZero, removeDash);
