/*
console.log(1);
//비동기로 처리한 방식(Web APIs 에서 실행된다)
setTimeout(() => {
 console.log(2);
}, 3000);

console.log(3);
*/

// 함수 선언식
function task(a, b) {
  setTimeout(() => {
    let sum = a + b;
    console.log(`a + b = ${sum}`);
  }, 3000);
}

// 함수 호출
task(10, 20);


