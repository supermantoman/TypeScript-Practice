type MyType = string|number;
type HyperType = string|number|boolean|[]|{};

let Practice :HyperType[] = [1,323,'4242',true,false,{}];


let MemberList : {member1: string, member2: string} = {member1 : 'John', member2:'Amy'};
let MemberA : {member1?: string, member2?: string} = {member1:'kkk', member2: 'd'};
let MemberB : {member1?: string, member2?: string} = {member2:'hi'};

let game = ['12323',1123,true]; //타입 자동완성


let named = 'Jeon';
let age = 20;
let whereFrom = 'Daegu';
let favorites:{song:string, singer:string} = {
  song: '호랑이소굴',
  singer: 'Jvcki Wai',
}

// type ProjectType = {member:[string,string], days:number,started:boolean};
type ProjectType = {[key:string]:string[]|number|boolean};

let project:ProjectType = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}