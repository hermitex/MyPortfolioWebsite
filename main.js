let dataBtn = document.querySelector(".btn-primary");
let userName = document.querySelector(".name");
let userEmail = document.querySelector("#email");
let userTitle = document.querySelector("#title");
let wrongName = document.querySelector(".wrong-name");
let wrongEmail = document.querySelector(".wrong-email");
let wrongTitle = document.querySelector(".wrong-title");
console.log(wrongName);

dataBtn.addEventListener("click", () => {
    // checkMessageLength();
    validateUser();
});

//Validate payment
const validateUser = () => {
    ValidateUserName();
    validateUserEmail();
    ValidateUserTitle();
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


//Validate Name
const ValidateUserTitle = () => {
    let nameValue = document.querySelector(".title").value;
    if (nameValue < 4) {
        validator(wrongEmail, isValid);
        return isValid;
    } else {
        console.log("hello1")
        isValid = true;
        validator(wrongEmail, isValid);
        return isValid;
    }

}

//Flag if invalid

const validator = (sibling, isValid) => {
    if (isValid) {
        sibling.classList.remove("error")

    } else {
        sibling.classList.add("error")
    }
}

/*
//Message length
let checkMessageLength = () => {
    let message = document.querySelector(".msg");
    let isLong = 20;

    if (message.textContent.length >= isLong) {
        console.log("long");
        deleteErrorMessage(message);
    } else if (message.textContent.length <= isLong) {
        console.log("short");
    }
};


let deleteErrorMessage = (element) => {

    let errorPara = document.createElement("p");
    errorPara.textContent = ("Your Message should be at least twenty charaters long...");
    errorPara.classList.add("fail");
    element.insertAdjacentHTML("afterend", errorPara.textContent);

};
*/
