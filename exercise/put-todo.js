"use strict"; //this works

async function updateTodo(todo) {
  let promise = fetch("http://localhost:3000/todos/" + todo.id, {
    method: "PUT",
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
  completed: false,
  id: 4
};

updateTodo(todo);

// difference for PUT:
// 1)) Copy and Pasted from POST, Add the id in the url by: + todo.id
// 2)) Update the HTTP method
// 3)) Match function, parameters and variables names
// 4)) Add id to body as well


