# Exercises

## Exercise 1

Use this code as an example during this exercise:

1. **Complete**Make sure the `api` is running.
   - it may be running from yesterday, if so just skip the following
   - use the `api` folder\directory
   - follow these directions to start it up
1. **Complete**Create a file `post-todo.js`
   - use fetch to post to the todo api and create a new todo
   - you can use your `todo-post.http` file from yesterdays exercise as reference
   - also use this [code example](https://github.com/craigmckeachie/fall2024-workbook7/blob/main/demos/fetch-method-post-async-await.js)
2. **Complete**Create a file `put-todo.js`
   - use fetch to put to the todo api and update an existing todo
3. **Complete**Create a file `delete-todo.js`
   - use fetch to delete from the todo api an existing todo
4. **Complete** Return to the main room once you have completed all these steps

## Exercise 2
1. Call the api and display a list. Use a bootstrap list-group. Here is an example:
"use strict"
async function createData(data) {

  let promise = fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json"
    }
  });

  let response = await promise;
  let responseData = await response.json();
  console.log(responseData);
}

let user = {
  name: "Aubrey Graham",
  username: "drake",
  email: "drake@youngmoney.com",
};

createData(user);

## Exercise 3
1. Call the api to post a new todo.