
const logInForm = document.querySelector('.login-form');

logInForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password) {
        return alert('All form fields must be filled in');
    } else {
        console.log(`Email: ${email}, Password: ${password}`);
        form.reset();
    }
}

logInForm.style.display = 'flex';
logInForm.style.flexDirection = 'column';
logInForm.style.gap = '8px';

const label = document.querySelectorAll('label');
label.forEach((item) => {
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.marginLeft = '0px';
});

const input = document.querySelectorAll('input');

input.forEach((item) => {
    item.style.width = '360px';
    item.style.height = '40px';
    item.style.borderColor = '#808080';
    item.style.marginLeft = '0px';
});

const button = document.querySelector('button');

button.style.width = '86px';
button.style.height = '40px';
button.style.borderRadius = '8px';
button.style.background = '#4E75FF';
button.style.color = 'white';
button.style.marginLeft = '0px';
