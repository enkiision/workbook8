"use strict"

let userNameInput = document.getElementById("userNameInput")
let studentRadio = document.getElementById("studentRadio")
let instructorRadio = document.getElementById("instuctorRadio")


function storeData(){
    let user = { name: "", role: "" };
    user.name = userNameInput.value;
    if (studentRadio.checked) {
        user.role = "Student";
    } else if (instructorRadio.checked){
        user.role = "Instructor";
    }
    localStorage.setItem("user", user.name)
}