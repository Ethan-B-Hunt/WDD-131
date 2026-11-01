const form = document.querySelector("#eventTicket");
const eventType = document.querySelector("#eventType");
const codeContainer = document.querySelector("#codeContainer");
const codeInput = document.querySelector("#code");
const output = document.querySelector("#output");

function updateCodeField() {
    const value = eventType.value;
    const label = document.querySelector("label[for='code']");

    if (value === 'student') {
        codeContainer.classList.remove("hidden");
        codeInput.required = true;
        if (label) label.textContent = "Student ID#";
    } else if (value === 'guest') {
        codeContainer.classList.remove("hidden");
        codeInput.required = true;
        if (label) label.textContent = "Access Code";
  } else {
        codeContainer.classList.add("hidden");
        codeInput.required = false;
        codeInput.value = "";
    }
}

eventType.addEventListener("change", updateCodeField);
updateCodeField();

function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = eventType.value;
    const eventDate = form.eventDate.value;
    const codeValue = codeInput.value.trim();

    if (type === 'student') {
        if (!codeValue) {
            output.textContent = "Please add a Student ID#";
            return;
        }
        if (codeValue.length !== 9 || isNaN(codeValue)) {
            output.textContent = "Student ID# must be 9 digits";
        return;
        }
    }

    if (type === 'guest' && !codeValue) {
        output.textContent = "Please add an access code";
        return;
    }

    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    output.innerHTML = `
        <h3>Ticket Created</h3>
        <p>${firstName} ${lastName}</p>
        <p>${type}</p>
        <p>${eventDate}</p>
    `;

    form.reset();
    updateCodeField();
});