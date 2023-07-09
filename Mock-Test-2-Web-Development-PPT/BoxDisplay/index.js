function addText() {
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value;
  
    if (inputValue) {
      const outputDiv = document.getElementById('output');
      const newText = document.createElement('p');
      newText.textContent = inputValue;
      outputDiv.appendChild(newText);
      inputBox.value = '';
    }
  }
  