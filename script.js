// number 1

const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
  return regExp.test(str);
};

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

// number 2

const interval = () => {
  const timer = setInterval(() => {
    console.log("Прошла одна секунда");
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
  }, 3000);
};

interval();

// number 3

const count = () => {
  let i = 1;

  const interval = setInterval(() => {
    console.log(i);
    i++;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
};

count();

// number 4

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");

let seconds = 50;
let intervall = null;

const timer = (sec) => {
  let secs = sec % 60;
  result.innerHTML = secs;
};

start.addEventListener("click", () => {
  if (intervall) return;
  intervall = setInterval(() => {
    seconds--;
    timer(seconds);
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(intervall);
  intervall = null;
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  intervall = null;
  seconds = 0;
  timer(seconds);
});

// number 5

const block = document.querySelector(".block");

block.addEventListener("click", () => {
  block.classList.toggle("red");
});

// number 6

const request = new XMLHttpRequest();

request.open("GET", "test.json");
request.setRequestHeader("Content-Type", "application/json");
request.send();

request.onload = () => {
  const data = JSON.parse(request.response);
  console.log(data);
};

// number 7

const input = document.querySelector("#loginInput");
const btn = document.querySelector("#checkBtn");
const user = document.querySelector("#userCard");
const message = document.querySelector("#message");

btn.addEventListener("click", () => {
  const loginValue = input.value.trim();
  if (!loginValue) {
    message.innerText = "Введите логин";
    userCard.innerHTML = "";
    return;
  }
  const request2 = new XMLHttpRequest();

  request2.open("GET", "test.json");
  request2.setRequestHeader("Content-Type", "application/json");
  request2.send();

  request2.onload = () => {
    const user = JSON.parse(request.response);
  };
});
