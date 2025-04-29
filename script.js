
let fromBase = null;
let toBase = null;

document.querySelectorAll('#fromBase button').forEach(btn => {
  btn.addEventListener('click', () => {
    fromBase = parseInt(btn.dataset.base);
    highlightSelected('#fromBase', btn);
  });
});

document.querySelectorAll('#toBase button').forEach(btn => {
  btn.addEventListener('click', () => {
    toBase = parseInt(btn.dataset.base);
    highlightSelected('#toBase', btn);
  });
});

document.getElementById('convertBtn').addEventListener('click', () => {
  const input = document.getElementById('inputNumber').value.trim();
  const resultDiv = document.getElementById('result');

  if (!fromBase || !toBase) {
    alert("Please select both FROM and TO bases.");
    return;
  }

  if (!isValidInput(input, fromBase)) {
    alert("Invalid number for base " + fromBase);
    return;
  }

  const decimal = parseInt(input, fromBase);
  const converted = decimal.toString(toBase).toUpperCase();

  resultDiv.textContent = `Result: (${fromBase}) ${input} = (${toBase}) ${converted}`;
  document.getElementById('inputNumber').value = "";
});

function highlightSelected(sectionId, selectedBtn) {
  document.querySelectorAll(`${sectionId} button`).forEach(btn => {
    btn.classList.remove('selected');
  });
  selectedBtn.classList.add('selected');
}

function isValidInput(value, base) {
  const patterns = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^\d+$/,
    16: /^[0-9a-fA-F]+$/
  };
  return patterns[base].test(value);
}
