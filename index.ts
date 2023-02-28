type MyType = string|number;
type HyperType = string|number|boolean|[]|{};

let Practice :HyperType[] = [1,323,'4242',true,false,{}];


let MemberList : {member1: string, member2: string} = {member1 : 'John', member2:'Amy'};
let MemberA : {member1?: string, member2?: string} = {member1:'kkk', member2: 'd'};
let MemberB : {member1?: string, member2?: string} = {member2:'hi'};

let game = ['12323',1123,true]; //타입 자동완성


let named = 'Jeon';
// let age = 20;
let whereFrom = 'Daegu';
let favorites:{song:string, singer:string} = {
  song: '호랑이소굴',
  singer: 'Jvcki Wai',
}

// type ProjectType = {member:string[], days:number,started:boolean};
type ProjectType = {[key:string]:string[]|number|boolean};

let project:ProjectType = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}

let HH :(number|string)[] = [1,'2',3]; //배열에 숫자형, 문자형 타입 모두 들어오고 싶을 때
let Obj :{a:number|string|boolean} = {
  a:123
}; // 객체의 속성값에 여러가지 타입 값이 올 수 있도록 하고 싶을 때

let Most:any; //any는 모든 타입 무력화 = 자바스크립트처럼 만들어버림.
Most = 123;
Most = '123';
Most = 123;

let agee:unknown = 1;
agee + 1 // unknown타입 연습

let user:string = 'kim';
let age:undefined|number= undefined;
let married:boolean = false; 
let 철수:(string|undefined|boolean)[] = [user, age, married];


type SchoolType = {
  score : number[]|boolean,
  teacher : string,
  friend: string|string[],
}

let 학교 :SchoolType = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

function canMarry (income:number, home:boolean, attraction:string):string|void {
}

canMarry(700, false, '중');
canMarry(700, true, '상');

//Type Narrowing
function MyFnc(x : string|number) {
	if(typeof (x) === 'string'){
			return x + '1';
		} else {
			return x + 1;
	}
}

// console.log(MyFnc(15));

const cleanUp = (x: string[]|number[]) => {
  
}


cleanUp(['1',2,'3']);

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

// Type Alias
type AnimalType = { name: string , age: number }
let Animals:AnimalType = { name : 'James', age: 13 }
;

//&연산자 타입합치기
type PositionX = { x : number };
type PositionY = { y : number };

type NewType = PositionX & PositionY // {x : number, y: number }

let position: NewType = { x: 10, y: '10'}
let position2: NewType = { x: 10, y: 10}

/* -------------------------------------------------------------------------- */

// type 합치기
type Name = string;
type Age = number;
type Person = Name | Age;
let Hi:Person = false;
let Si:Person = 'hi';
let Ki:Person = 15;

/* -------------------------------------------------------------------------- */

// 동일한 속성이 있는 객체일 경우 = 객체가 합체된다.
type X = { name: string, blah: number }
type Y = { name: string, age: number }
type Future = X & Y;
let futur:Future = { name: 'game', age: 15, blah: 15};
console.log(futur);

/* -------------------------------------------------------------------------- */

// 문제
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
// type alias로 만들어보셈

type TypeA = { 
  color?: string,
  size:number, 
  readonly position : number[]
};

let test:TypeA ={
  size:1,
  position : [ 12,3,4 ]
}

test.position = [4,3,1]; // error but 값은 들어감
console.log(test.position);

/* -------------------------------------------------------------------------- */

// 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type HappyType = { name : string, phone:number, email:string}
// { name : 'kim', phone : 123, email : 'abc@naver.com' }

/* -------------------------------------------------------------------------- */

// literal Type
// 리턴값도 호출값도 정해줄수있다.

function 함수(a:'hello') :(1|0){
	return 1;
}

함수('bye');
함수('hello');

function RPC(x:('가위'|'바위'|'보')) :('가위'|'바위'|'보')[]{
  return ['가위'];
}

/* -------------------------------------------------------------------------- */

// as const
let 자료  = { name : 'kim' as 'kim'} 
function 내함수(a:'kim') {

} 

내함수(자료.name)

/* -------------------------------------------------------------------------- */

// 객체 안 메소드의 type Alias 지정

type plusOneType = (a:number) => number; 

let members = {
  name : 'kim',
  plusOne:plusOneType : (a) =>{return a+1}
  changeName : () => {}
}
