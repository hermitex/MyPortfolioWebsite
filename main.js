/*< !--TASK UPDATES
INDIVIDUAL TASK
    - Update your CV page with a contact form.
- The contact form should have name, email, title and message
    - The contact form should be validated to check if the user:
* Enters the correct format of data for each field
    * Enters at least 4 characters in the name field
        * Enters at least 20 characters for the message
            - Host your contact form on free hosting, preferably, github pages...but any host is fine.
Contact your team lead for submission details. @channel-->*/


//get the button

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






