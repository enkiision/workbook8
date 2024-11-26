"use strict"; //this works
 
async function createTodo(todo) {
  let promise = fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json",
    },
  });

  let response = await promise;
  let responseList = await response.json();
  console.log(responseList);
}

let todo = {
  userId: 1,
  title: "do laundry",
  completed: false
};

createTodo(todo);
