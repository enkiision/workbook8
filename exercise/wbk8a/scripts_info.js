"use strict"

const messageDiv = document.getElementById("messageDiv");
// let user = localStorage.getItem("user") not being used bcuz of naming convention
let userAsString = localStorage.getItem("user");
if (userAsString) {
//messageDiv.innerText = localStorage.message;
// OR Below
    let user = JSON.parse(userAsString);
    messageDiv.innerText = `${user.name} ${user.role}`;
}
localStorage.removeItem("message"):
