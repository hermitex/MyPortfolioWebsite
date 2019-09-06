let dataBtn = document.querySelector(".btn-primary");
let userName = document.querySelector(".name");
let userEmail = document.querySelector("#email");
let userTitle = document.querySelector("#title");
let userMsg = document.querySelector("#message");
let wrongName = document.querySelector(".wrong-name");
let wrongEmail = document.querySelector(".wrong-email");
let wrongTitle = document.querySelector(".wrong-title");
let wrongMessage = document.querySelector(".wrong-msg");


dataBtn.addEventListener("click", () => {
    validateUser();
});

//Validate payment
const validateUser = () => {
    ValidateUserName();
    validateUserEmail();
    ValidateUserTitle();
    validateUserMessage();
};

//Validate Name
const ValidateUserName = () => {
    let nameValue = document.querySelector(".name").value;
    const regX = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/;
    let isValid = regX.test(nameValue);
    validator(wrongName, isValid);
    return isValid;
}

//Validate Email
const validateUserEmail = () => {
    let emailValue = document.querySelector(".email").value;
    const regX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = regX.test(String(emailValue).toLowerCase());
    validator(wrongEmail, isValid);
    return isValid;
}


//Validate Title
const ValidateUserTitle = () => {
    let titleValue = document.querySelector(".title").value;
    const regX = /^[a-zZ-Z]{5,}$/;
    let isValid = regX.test(String(titleValue).toLowerCase());
    validator(wrongTitle, isValid);
    return isValid;
}
//Validate User Message
let validateUserMessage = () => {
    let messageValue = document.querySelector("#message").value;
    const regX = /^[a-zZ-Z]{20,}$/;
    let isValid = regX.test(String(messageValue).toLowerCase());
    validator(wrongMessage, isValid);
    return isValid;
};


//Flag if invalid
const validator = (sibling, isValid) => {
    if (isValid) {
        sibling.classList.remove("error")

    } else {
        sibling.classList.add("error")
    }
}


