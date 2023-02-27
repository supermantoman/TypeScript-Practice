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

let Most:unknown;
Most = 123;
Most = '123';
Most = 123;

let agee:unknown = 1;
agee + 1

let user:string = 'kim';
let age:undefined|number= undefined;
let married:boolean = false; 
let 철수:(string|undefined|boolean)[] = [user, age, married];
