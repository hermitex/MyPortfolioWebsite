let dataBtn = document.querySelector(".btn-primary");


dataBtn.addEventListener("click", () => {

    validateUser()
});

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






