const textInput = document.getElementById('name-input');
const output = document.getElementById('name-output');

const getInputValue = ({ currentTarget }) => {
    if (currentTarget.value.trim() !== '') {
        output.textContent = currentTarget.value.trim();
    } else {
        output.textContent = 'Anonymous';
    }
};

textInput.addEventListener('input', getInputValue);