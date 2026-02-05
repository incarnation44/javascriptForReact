console.log(1);
//비동기로 처리한 방식(Web APIs 에서 실행된다)
setTimeout(() => {
 console.log(2);
}, 3000);

console.log(3);


