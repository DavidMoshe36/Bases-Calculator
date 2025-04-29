

let fromBase = 10;
let toBase = 2;

document.querySelectorAll('#from-base-buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    fromBase = parseInt(btn.dataset.base);
    setSelected(btn, '#from-base-buttons');
  });
});

document.querySelectorAll('#to-base-buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    toBase = parseInt(btn.dataset.base);
    setSelected(btn, '#to-base-buttons');
  });
});

document.getElementById('convertBtn').addEventListener('click', () => {
  const input = document.getElementById('numberInput').value.trim();
  if (!isValid(input, fromBase)) {
    alert('Invalid input for base ' + fromBase);
    return;
  }

  const decimalValue = parseInt(input, fromBase);
  const result = decimalValue.toString(toBase).toUpperCase();

  const fromDisplay = `${input}₍${fromBase}₎`;
  const toDisplay = `${result}₍${toBase}₎`;
  document.getElementById('resultSection').textContent = `Result: ${fromDisplay} = ${toDisplay}`;

  document.getElementById('numberInput').value = '';
});

function setSelected(button, groupSelector) {
  document.querySelectorAll(groupSelector + ' button').forEach(btn => {
    btn.classList.remove('selected');
  });
  button.classList.add('selected');
}

function isValid(value, base) {
  const regexes = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9a-fA-F]+$/,
  };
  return regexes[base].test(value);
}
