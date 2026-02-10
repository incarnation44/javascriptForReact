// 1. Spread 연산자
//객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

// 2. Spread 연산자(객체)
let obj1 = {
 a: 1,
 b: 2,
};
let obj2 = {
a: obj1.a,
b: obj1.b,
 c: 3,
 d: 4,
};
/*
let obj2 = {
 ...obj1,
 c: 3,
 d: 4,
};
console.log(obj2);
*/

// 3. Spread 연산자(함수매개변수)
function funcA(p1, p2, p3) {
 console.log(p1, p2, p3);
}
let arr3 = [1, 2, 3];
funcA(...arr3);

// 4. rest 매개변수
// rest는 나머지 , 나머지 매개변수
arr1 = [1, 2, 3];
function funcB(one, ...ds) {
 console.log(ds); //[2, 3] 출력
}
/*
funcB(...arr1);
//주의: rest매개변수 뒤에는 추가로 다른 변수가 올수 없다.
function funcB(one, ...ds, as) { //as 추가로 올 수 없다.
   console.log(ds);
}
   */