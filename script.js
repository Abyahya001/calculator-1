

document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById('display');
  
    function appendToDisplay(value) {
      display.value += value;
    }
  
    function calculateResult() {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    }
  
    function clearDisplay() {
      display.value = '';
    }
  
    function backspace() {
      display.value = display.value.slice(0, -1);
    }
  
    // Attach event listeners to buttons
    let buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        let buttonText = this.textContent;
        if (buttonText === '=') {
          calculateResult();
        } else if (buttonText === 'C') {
          clearDisplay();
        } else if (buttonText === '⌫') {
          backspace();
        } else {
          appendToDisplay(buttonText);
        }
      });
    });
  });