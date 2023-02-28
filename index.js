let Practice = [1, 323, '4242', true, false, {}];
let MemberList = { member1: 'John', member2: 'Amy' };
let MemberA = { member1: 'kkk', member2: 'd' };
let MemberB = { member2: 'hi' };
let game = ['12323', 1123, true]; //타입 자동완성
let named = 'Jeon';
// let age = 20;
let whereFrom = 'Daegu';
let favorites = {
    song: '호랑이소굴',
    singer: 'Jvcki Wai',
};
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
let HH = [1, '2', 3]; //배열에 숫자형, 문자형 타입 모두 들어오고 싶을 때
let Obj = {
    a: 123
}; // 객체의 속성값에 여러가지 타입 값이 올 수 있도록 하고 싶을 때
let Most; //any는 모든 타입 무력화 = 자바스크립트처럼 만들어버림.
Most = 123;
Most = '123';
Most = 123;
let agee = 1;
agee + 1; // unknown타입 연습
let user = 'kim';
let age = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function canMarry(income, home, attraction) {
}
canMarry(700, false, '중');
canMarry(700, true, '상');
//Type Narrowing
function MyFnc(x) {
    if (typeof (x) === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
// console.log(MyFnc(15));
const cleanUp = (x) => {
};
cleanUp(['1', 2, '3']);
let Animals = { name: 'James', age: 13 };
let position = { x: 10, y: '10' };
let position2 = { x: 10, y: 10 };
let Hi = false;
let Si = 'hi';
let Ki = 15;
let futur = { name: 'game', age: 15, blah: 15 };
console.log(futur);
let test = {
    size: 1,
    position: [12, 3, 4]
};
test.position = [4, 3, 1]; // error but 값은 들어감
console.log(test.position);
// { name : 'kim', phone : 123, email : 'abc@naver.com' }
/* -------------------------------------------------------------------------- */
// literal Type
// 리턴값도 호출값도 정해줄수있다.
function 함수(a) {
    return 1;
}
함수('bye');
함수('hello');
function RPC(x) {
    return ['가위'];
}
/* -------------------------------------------------------------------------- */
// as const
let 자료 = { name: 'kim' };
function 내함수(a) {
}
내함수(자료.name);
