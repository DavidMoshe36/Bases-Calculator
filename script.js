document.addEventListener('DOMContentLoaded', function() {
    let fromBase = 10;
    let toBase = 10;
    let inputNumber = document.getElementById('inputNumber');
    let resultDiv = document.getElementById('result');
    let convertButton = document.getElementById('convertButton');

    // Event listeners for the "FROM" buttons
    const fromButtons = document.querySelectorAll('.from-btn');
    fromButtons.forEach(button => {
        button.addEventListener('click', function() {
            fromBase = parseInt(button.getAttribute('data-base'));
            updateButtonStyles(fromButtons, button);
        });
    });

    // Event listeners for the "TO" buttons
    const toButtons = document.querySelectorAll('.to-btn');
    toButtons.forEach(button => {
        button.addEventListener('click', function() {
            toBase = parseInt(button.getAttribute('data-base'));
            updateButtonStyles(toButtons, button);
        });
    });

    // Convert button click handler
    convertButton.addEventListener('click', function() {
        let num = inputNumber.value.trim();

        if (isValidInput(num, fromBase)) {
            let decimalValue = convertToDecimal(num, fromBase);
            let result = convertFromDecimal(decimalValue, toBase);
            resultDiv.innerHTML = `Result: ${num}(${fromBase}) = ${result}(${toBase})`;
            inputNumber.value = '';
        } else {
            alert('Invalid input for the selected base!');
        }
    });

    // Helper function to validate input for the selected base
    function isValidInput(num, base) {
        const validChars = {
            2: /^[01]+$/,
            8: /^[0-7]+$/,
            10: /^[0-9]+$/,
            16: /^[0-9a-fA-F]+$/
        };
        return validChars[base].test(num);
    }

    // Helper function to convert a number to decimal (base 10)
    function convertToDecimal(num, base) {
        return parseInt(num, base);
    }

    // Helper function to convert a decimal number to another base
    function convertFromDecimal(decimalValue, base) {
        return decimalValue.toString(base).toUpperCase();
    }

    // Helper function to update button styles based on selection
    function updateButtonStyles(buttons, selectedButton) {
        buttons.forEach(button => {
            button.style.transform = 'scale(1)';
            button.style.backgroundColor = '';
        });
        selectedButton.style.transform = 'scale(1.2)';
        selectedButton.style.backgroundColor = '#ffde59';
    }
});
