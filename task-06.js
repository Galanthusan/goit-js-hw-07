const inputRef = document.getElementById('validation-input');
const dataLength = inputRef.getAttribute('data-length');
const maxLength = 6;

inputRef.addEventListener('blur', handleInputBlur);

function handleInputBlur() {
  if (inputRef.value.length === maxLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
  if (inputRef.value.length !== maxLength) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.add('validation-iput');
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
  }
}
