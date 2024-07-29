let d = document;
let nameInput;
let emailInput;
let passwordInput;
let nameError;
let emailError;
let passwordError;

export default function formData(formClass) {
    let form = d.querySelector(formClass);

    nameInput = form.querySelector("#name");
    nameError = form.querySelector("#name-error");
    emailInput = form.querySelector("#email");
    emailError = form.querySelector("#email-error");
    passwordInput = form.querySelector("#password");
    passwordError = form.querySelector("#password-error");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = new FormData(form);
        let dataObj = {};

        for (let [key, value] of data.entries()) {
            dataObj[key] = value;
        }

        let { name, email, password } = dataObj;

        let flag = validateForm(name, email, password);

        if (flag) {
            resetInputs();
            form.reset();
            alert("Formulario enviado");
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target === nameInput || e.target === emailInput || e.target === passwordInput) {
            e.target.classList.remove("error");

        }

        if(e.target === nameInput) nameError.classList.remove("active");
        if(e.target === emailInput) emailError.classList.remove("active");
        if(e.target === passwordInput) passwordError.classList.remove("active");
        
    });
}

const resetInputs = () => {
    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");

    nameError.classList.remove("active");
    emailError.classList.remove("active");
    passwordError.classList.remove("active");
}

const validateName = (name) => {
    let validRegex = /^[a-zA-Z]{3,16}$/;
    return validRegex.test(name);
}

const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return validRegex.test(email);
}

const validatePassword = (password) => {
    let validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
    return validRegex.test(password);
}



function validateForm(name, email, password) {
    let flag = true;

    if (!validateName(name)) {
        nameInput.classList.add("error");
        nameError.classList.add("active");
        flag = false;
    }

    if (!validateEmail(email)) {
        emailInput.classList.add("error");
        emailError.classList.add("active");
        flag = false;
    }

    if (!validatePassword(password)) {
        passwordInput.classList.add("error");
        passwordError.classList.add("active");
        flag = false;
    }

    return flag;
}