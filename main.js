let dataBtn = document.querySelector(".btn-primary");


dataBtn.addEventListener("click", () => {
    checkMessageLength();
    //  validateUser();
});
/*
//Validate payment
const validateUser = () => {
    userName();
};
let input = document.querySelectorAll("#btn");
input.forEach(element => {
    let currentInput = element;
    currentInput.addEventListener("blur", (e) => {
        let value = currentInput.value;
        let thisSibling = e.target.parentNode.nextElementSibling;
        userName(value, thisSibling)

    });
});

//Validate Name
const userName = (currentValue, sibling) => {
    const regX = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/;
    let isValid = regX.test(currentValue);
    console.log(sibling);
    validator(sibling, isValid);
    return isValid;
}

//Flag if invalid

const validator = (sibling, isValid) => {
    if (isValid) {
        sibling.classList.remove("error")

    } else {
        sibling.classList.add("error")
    }
}
*/

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