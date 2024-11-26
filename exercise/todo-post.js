"use strict"; //this works

async function updateTodo(todo) {
  let promise = fetch("http://localhost:3000/todos/", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json",
    },
  });

  let response = await promise;
  let responseTodo = await response.json();
  console.log(responseTodo);
}

let todo = {
  userId: 1,
  title: "brush teeth (don't forget to take cap off)",
  completed: false
};

updateTodo(todo);