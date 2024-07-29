let d = document;
let nameInput;
let emailInput;
let passwordInput;

export default function formData(formClass) {
    let form = d.querySelector(formClass);

    nameInput = form.querySelector("#name");
    emailInput = form.querySelector("#email");
    passwordInput = form.querySelector("#password");

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
            form.reset();
            alert("Formulario enviado");
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target === nameInput || e.target === emailInput || e.target === passwordInput) {
            e.target.classList.remove("error");
        }
    });
}


const validateName = (name) => {
    let validRegex = /^[a-zA-Z]{3,16}$/;
    console.log(validRegex.test(name));
    return validRegex.test(name);
}

const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    console.log(validRegex.test(email));
    return validRegex.test(email);
}

const validatePassword = (password) => {
    let validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
    console.log(validRegex.test(password));
    return validRegex.test(password);
}



function validateForm(name, email, password) {
    let flag = true;

    if (!validateName(name)) {
        nameInput.classList.add("error");
        flag = false;
    }

    if (!validateEmail(email)) {
        emailInput.classList.add("error");
        flag = false;
    }

    if (!validatePassword(password)) {
        passwordInput.classList.add("error");
        flag = false;
    }

    return flag;
}