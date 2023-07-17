// 4. What is callback hell? How do you overcome callback hell? Give code examples for each.

// what is callback hell ?
// Whenever we are passing a function to other function's parameter is known as a callback because of callback JS hava asynchronus behavious.

// Callback Problem is :-
// 1-Callback Hell
// 2-Inversion of Control

// Callback hell is whenever we are creating callback inside callback like nested callback is know as callback hell and that is also known as pyramid of doom.

// EXAMPLE :-

maker(arr, () => {
  () => {
    () => {
      console.log("callback hell");
    };
  };
});

// To overcome from callback -
// 1-Promises
// 2-Async and await

const promise = Promise((resolve, reject) => {});

promise
  .then((res) => res)
  .then((resp) => resp)
  .then((resp) => resp)
  .catch((err) => err);

//to overcome to the callback hell we are using promises using promises we got sure that we will either get output or not there is assurity that we will get something using promises. now using promises the code is more readable and there is assurity weather we will get output or not

const ans = async () => {
  const first = await one();
  const second = await two();
  const three = await three();
};

//the async and await is best way to read and understand the code this will wait till we donot get outptu and this is async opertaion
