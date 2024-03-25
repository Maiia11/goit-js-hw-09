const formKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");


form.addEventListener("input", onLabelInput);

function onLabelInput(event) {
    const message = event.target.value.trim();
    localStorage.setItem(formEmail, message);
    localStorage.setItem(formMessage, message);
}
