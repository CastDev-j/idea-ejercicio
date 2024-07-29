let d = document;

export default function formData(formClass) {
    let form = d.querySelector(formClass);

    let nameInput = form.querySelector("#name");
    let emailInput = form.querySelector("#email");
    let passwordInput = form.querySelector("#password");

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
    return !validRegex.test(name);
}

const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return !validRegex.test(email);
}

const validatePassword = (password) => {
    let validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
    return !validRegex.test(password);
}



function validateForm(name, email, password) {
    let flag = true;

    if (name === "" && validateName(name)) {
        nameInput.classList.add("error");
        flag = false;
    }

    if (email === "" && validateEmail(email)) {
        emailInput.classList.add("error");
        flag = false;
    }

    if (password === "" && validatePassword(password)) {
        passwordInput.classList.add("error");
        flag = false;
    }

    return flag;
}