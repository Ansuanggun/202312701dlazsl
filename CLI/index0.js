#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const i = 0;
const rand_0_9 = Math.floor(Math.random() * 10);
console.clear();
console.log("정답 미리 보기 : ",rand_0_9);

const answerCallback = (answer) => {
  if (answer === String(rand_0_9)) {
    console.log('정답입니다. !');
    rl.close();
  } else if (answer < String(rand_0_9)) {
    console.log('랜덤 수 보다 작습니다.');
    rl.close();
  } else if (answer > String(rand_0_9)) {
    console.log('랜덤 수 보다 큽니다..');
    rl.close();
  } 
  else {
    console.clear();
    console.log('0~9 숫자를 입력해주세요.');
    rl.question('랜덤한 0~9 숫자를 입력하여 정답을 맞춰보세요.  ', answerCallback);
  }
};

rl.question('랜덤한 0~9 숫자를 입력하여 정답을 맞춰보세요.  ', answerCallback);


