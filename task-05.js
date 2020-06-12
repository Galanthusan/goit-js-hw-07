let inputRef = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

inputRef.addEventListener('input', handleNameOutput);

function handleNameOutput() {
  if (inputRef.value === '') {
    nameOutput.innerHTML = 'незнакомец';
  } else {
    nameOutput.innerHTML = inputRef.value;
  }
}
