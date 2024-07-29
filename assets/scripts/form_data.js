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

function validateForm(name, email, password) {
    let flag = true;

    if (name === "") {
        nameInput.classList.add("error");
        flag = false;
    }

    if (email === "") {
        emailInput.classList.add("error");
        flag = false;
    }

    if (password === "") {
        passwordInput.classList.add("error");
        flag = false;
    }

    return flag;
}