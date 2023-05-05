function setFormMessage(formElement, type, msg) {
    const messageElement = formElement.querySelector(".form-msg");

    messageElement.textContent = msg;
    messageElement.classList.remove("form-msg-success", "form-msg-error");
    messageElement.classList.add(`form-msg-${type}`);
}

function setInputError(inputElement, msg) {
    inputElement.classList.add("form-input-error");

    inputElement.parentElement.querySelector(".form-input-error-msg").textContent = msg;
}

function clearInputError(inputElement, msg) {
    inputElement.classList.remove("form-input-error");

    inputElement.parentElement.querySelector(".form-input-error-msg").textContent = "";
}

/* Basically, we want to alternate our displays according to the options selected by the user */
document.addEventListener("DOMContentLoaded", () => { /* DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed */
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault(); // prevents href link redirect to same login page
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });
        

    document.querySelector("#linkLogin").addEventListener("click", e => {
        createAccountForm.add("form-hidden");
        loginForm.classList.remove("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username or password");
    });
    
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username or password");
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Password must be at least 8 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

