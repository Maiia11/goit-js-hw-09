const formKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");


form.addEventListener("input", onLabelInput);

form.addEventListener("submit", handleSubmit);


fillLabel();

function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(formKey);
    
}


function onLabelInput() {
    const saveInfo = {
        email: form.email.value.trim(),
        message: form.message.value.trim(),
    };
    localStorage.setItem(formKey, JSON.stringify(saveInfo));
    
}

function fillLabel() {
    const savedInform = JSON.parse(localStorage.getItem(formKey));

    if (savedInform) {
        const { email, message } = savedInform;
        form.email.value = email;
        form.message.value = message;
    }
}