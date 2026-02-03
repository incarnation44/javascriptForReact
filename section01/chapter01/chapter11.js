//함수호이스팅(함수선언, 함수표현식, 화살표함수(익명 함수 간단하게 표현식))

// 함수
let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);

// 호이스팅이란 끌어올리다 라는 뜻
function getArea(width, height) {
 function another() {
  
 // 중첩 함수
 console.log("another");
 }
 another();
 let area = width * height;
 }

