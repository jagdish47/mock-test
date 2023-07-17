// 4. What is callback hell? How do you overcome callback hell? Give code examples for each.

// what is callback hell ?
// Whenever we are passing a function to other function's parameter is known as a callback because of callback JS hava asynchronus behavious.

// Callback Problem is :-
// 1-Callback Hell
// 2-Inversion of Control

// Callback hell is whenever we are creating callback inside callback like nested callback is know as callback hell and that is also known as pyramid of doom.

// EXAMPLE :-

function(arr, ()=>{

    function(()=>{

        function(()=>{

            console.log("callback hell");
        });
    });
});


// To overcome from callback - 
1-Promises
2-Async and await



