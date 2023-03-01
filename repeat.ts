/* -------------------------------------------------------------------------- */

//배열 안의 자료형 지정하기
type Member = [string, boolean];
let member:Member = ['kim', true];
let member2:Member = ['kim', 100];
let member3:Member = ['park', false, 9]; //컴파일 시, 9는 그대로 출력된다.

/* -------------------------------------------------------------------------- */

type MemberType = {
  [key: string] :string
}

let john : MemberType = { 
  name : 'kim',
  age : '123',
  age2 : '123',
  age3 : '123',
  age4 : '123',
}

// console.log(john);

/* -------------------------------------------------------------------------- */

class User {
  name:string;
  constructor(name: string){
    this.name = 'cool';
  }
}

// const hi = new class();
// console.log(hi);



//any
// let example:any;
let names = 123;
let kay = 'fff';

let examples:unknown;
// console.log(examples + 3); //unknown과 3은 더 할 수 없다.
 
// let examplez: string|number;
// examplez+1

function 함숭(x:number) :void{
  1+1; 
}
함숭(1);

function 함슐(x?:number):number{
 return x;
}
// console.log( 함슐());

/* -------------------------------------------------------------------------- */

function MyFnc(x:string|number){
  if(typeof x==='string'){
    return x+'카카';
  } else if (typeof x === 'number') {
    return x+10;
  } else {
    return '뭐하냐'
  }
}

console.log(MyFnc(true));

/* -------------------------------------------------------------------------- */

let obj = {
  name : 'kim',
  age : 13,
  isHome : true,
}

// function Test(a:string|number|boolean) {
//   if( 'isHome' in obj ) {
//     console.log('쩌노');  
//   } else if ('home' in obj) {
//     console.log('큉');
    
//   }
// }

// Test();

/* -------------------------------------------------------------------------- */

function Hii(a:string|number){
  let array: number[]=[];
  array[0]= a as number;
}

let n : string = 'kim';

Hii(123);

/* -------------------------------------------------------------------------- */

let x: string | number = "hello";
if (typeof x === "string") {
  console.log(x.toUpperCase());
} else {
  console.log(x.toFixed(2));
}


/* -------------------------------------------------------------------------- */

// function cutZero(a:string):string{
//   let input = a;
//   if(input.charAt(0)==='0'){
//     input = input.substring(0);
//   }
//   return input;
// }

// console.log(cutZero('0하이'));

// // function removeDash(){

// // }

// // 함수1(함수2)

/* -------------------------------------------------------------------------- */

type CutType = (x :string) => string

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result;
}

function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}

type 함수타입1 = (a :string) => string;
type 함수타입2 = (a :string) => number;

function sumFunction (a,b:함수타입1,c:함수타입2) { 
  let results = b(a);
  let results2 = c(results);
  console.log(results2);
}

sumFunction('010-1111-2222', cutZero, removeDash)
