let inputRef = document.getElementById('font-size-control');
let textRef = document.getElementById('text');

inputRef.addEventListener('input', handleFontSizeChange);

function handleFontSizeChange() {
  textRef.style.fontSize = event.currentTarget.value + 'px';
}
