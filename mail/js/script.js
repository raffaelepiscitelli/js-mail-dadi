const button = document.querySelector("button");

const listCorrectEmail = ["correctemail@gmail.com", "boolean@gmail.com"]

button.addEventListener("click", function () {
    const emailRequest = (document.getElementById("email-request").value);
    if (listCorrectEmail.includes(emailRequest))
        document.getElementById("verify-email").innerHTML = "The e-mail is correct";
    else if (emailRequest !== listCorrectEmail)
    document.getElementById("verify-email").innerHTML = "The e-mail is not correct";
})