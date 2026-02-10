/*
function task(){
  setTimeout(()=>{
    console.log("안녕");
    if(true){
    }else{
        //reject 상태
      }
    
  }, 3000)
}
//task();

//pending 상태
let promise = new Promise(()=>{
setTimeout(()=>{
    console.log("안녕");
     if(true){
      //resolve 상태
    }else{
      //reject 상태
      }
  }, 3000)
});
*/

//console.log(promise);

/*
//resolve 상태
let promise2 = new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("안녕");
     if(true){
      resolve("promise 안녕")
    }else{
      //reject 상태
      }
  }, 2000);
});
setTimeout(()=>{
  console.log(promise2);
},3000);
*/

//reject 상태
/*
let promise3 = new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("안녕3");
     if(false){
      resolve("promise 성공")
    }else{
      reject("promise 실패");
      }
  }, 2000);
});
setTimeout(()=>{
  console.log(promise3);
},3000);
*/

/*
//4. Promise 를 실제로 활용해보자.
const promise4 = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor
  setTimeout(() => {
    const num = "10";
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});
setTimeout(() => {
  console.log(promise4);
}, 3000);
*/

/*
//4.2 promise에서 catch 메소드는 실패했을때만 실행해주는 함수이다.
const promise5 = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor
  setTimeout(() => {
    const num = null;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});
promise5.then((value) => {
  console.log(value);
});
promise5.catch((error) => {
  console.log(error);
});
*/

/*
//4.3 promise chain 방법으로 진행할수 있다
const promise6 = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor
  setTimeout(() => {
    const num = null;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});
promise6
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
  */

/*
//5. 함수를 통해서 실행하기
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });
  return promise;
}
const p = add10(0);
p.then((result) => {
  console.log(result);
});
*/

/*
// 2단계
let promise = add10(100)
  .then((value) => {
    console.log(`성공한 결과 ${value}`);
    let _promise = add10(value);
    _promise.then((value) => {
      console.log(`성공한 결과 ${value}`);
    });
  })
  .catch((value) => console.log(`실패한 결과 ${value}`));
*/

/*
// 2단계 수정
let promise = add10(100)
  .then((value) => {
    console.log(`성공한 결과 ${value}`);
    //promise return
    return add10(value);
  })
  .then((value) => console.log(`성공한 결과 ${value}`))
  .catch((value) => console.log(`실패한 결과 ${value}`));
*/

/*
// 3단계
let promise = add10(100)
  .then((value) => {
    console.log(`성공한 결과 ${value}`);
    // promise return
    return add10(value);
  })
  .then((value2) => {
    console.log(`성공한 결과 ${value2}`);
    return add10(value2);
  })
  .then((value3) => console.log(`성공한 결과 ${value3}`))
  .catch((value) => console.log(`실패한 결과 ${value}`));
  */

//============================================
// 1단계 음식을 주문하는 상황
function orderFood2(food) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor
    setTimeout(() => {
      console.log(food + "음식주문");
      let flag = true;
      if (flag === true) {
        resolve(food + "음식완료");
      } else {
        reject(food + "음식미완료");
      }
    }, 2000);
  });
  return promise;
}
// orderFood2('백숙')
// .then((value) => {
// console.log(value);
// })
// .catch((error) => {
// console.log(error);
// });

// 1단계 음식을 차게주문하는 상황
function coolFood2(food) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor
    setTimeout(() => {
      console.log(food + "차게주문");
      let flag = true;
      if (flag === true) {
        resolve(food + "차게완료");
      } else {
        reject(food + "차게미완료");
      }
    }, 3000);
  });
  return promise;
}
// coolFood2('백숙')
// .then((value) => {
// console.log(value);
// })
// .catch((error) => {
// console.log(error);
// });

// 1단계 음식을 냉동주문하는 상황
function freezeFood2(food) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor
    setTimeout(() => {
      console.log(food + "냉동주문");
      let flag = true;
      if (flag === true) {
        resolve(food + "냉동완료");
      } else {
        reject(food + "냉동미완료");
      }
    }, 3000);
  });
  return promise;
}
// freezeFood2('백숙')
// .then((value) => {
// console.log(value);
// })
// .catch((error) => {
// console.log(error);
// });

//2단계 음식주문 => 차게주문
// orderFood2('백숙')
// .then((value) => {
// console.log(value);
// return coolFood2('백숙');
// })
// .then((value) => {
// console.log(value);
// })
// .catch((error) => {
// console.log(error);
// });

//3단계 음식을 주문하고 => 음식을 차게주문사항 => 음식얼게 주문사항
orderFood2("백숙")
  .then((value) => {
    console.log(value);
    return coolFood2("백숙");
  })
  .then((value) => {
    console.log(value);
    return freezeFood2("백숙");
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
