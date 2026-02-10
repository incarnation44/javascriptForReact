//비동기 작업 처리하기 (async/await)
async function getData() {
  return { name: "kdj", age: 30 };
}

console.log(getData());

function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let flag = false;
      if (flag) {
        resolve({ name: "kdj", age: 30 });
      } else {
        reject("비동기처리 요청 실패");
      }
    }, 1000);
  });
}
setTimeout(() => {
  //console.log(getData2());
});

async function printData() {
  getData2().then((value) => console.log(value));
}
async function printData2() {
  const data = await getData2()();
  console.log(data);
}

printData();
