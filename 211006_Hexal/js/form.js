const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const form = document.getElementById("form");

const formErrors = document.getElementById("form-errors");
const formSuccess = document.getElementById("form-success");

let errorArray;

form.addEventListener("submit", (e) => {
    errorArray = [];
    if (name.value === "" || name.value == null) {
        errorArray.push("Name is required");
    }
    if (email.value === "" || email.value == null) {
        errorArray.push("Email is required");
    }
    if (subject.value === "" || subject.value == null) {
        errorArray.push("Subject is required");
    }
    if (subject.value.length > 60) {
        errorArray.push("Subject cannot be longer than 60 characters");
    }
    if (message.value === "" || message.value == null) {
        errorArray.push("Message is required");
    }

    //check if there are any errors in the form
    if (errorArray.length > 0) {
        //if any errors occur, prevent page from submitting the form and displays all the errors on the screen separated by comma
        e.preventDefault();
        formErrors.style.display = "block";
        formErrors.innerText = errorArray.join("\n");
    } else {
        errorArray = [];
        formErrors.innerText = "";
        formSuccess.style.display = "block";
    }
});
