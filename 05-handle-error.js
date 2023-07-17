// Handle Errors in Node/express

// We can handle error in Express and Node Many ways some of the best ways to handle error is :-
// 1. Using Middleware
// 2. Using Async await
// 3. Using try-catch block

//to handle the error inside node we can use try and catch block if the code successuflly runt than it will to into try block else it will go into the catch block
function errorHandling() {
  try {
  } catch (err) {
    console.log(err);
  }
}

// the nodeJs framework express gave us very simple way to handle the error we just have to pass the callback funciton and err as argument and it will handle the error
app.use((err, req, res, nest) => {
  console.log(err);
});
