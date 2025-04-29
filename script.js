let fromBase = null;
let toBase = null;

document.querySelectorAll('.from').forEach(btn => {
  btn.addEventListener('click', () => {
    fromBase = parseInt(btn.dataset.base);
    document.querySelectorAll('.from').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

document.querySelectorAll('.to').forEach(btn => {
  btn.addEventListener('click', () => {
    toBase = parseInt(btn.dataset.base);
    document.querySelectorAll('.to').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

document.getElementById('convertBtn').addEventListener('click', () => {
  const input = document.getElementById('inputNumber').value.trim();
  if (!fromBase || !toBase || input === '') {
    alert('Please select both bases and enter a number.');
    return;
  }

  const validChars = {
    2: /^[01]+$/i,
    8: /^[0-7]+$/i,
    10: /^[0-9]+$/i,
    16: /^[0-9a-f]+$/i
  };

  if (!validChars[fromBase].test(input)) {
    alert(`Invalid number for base ${fromBase}`);
    return;
  }

  const decimal = parseInt(input, fromBase);
  const converted = decimal.toString(toBase).toUpperCase();

  const result = `Result: (${fromBase}) ${input} = (${toBase}) ${converted}`;
  document.getElementById('result').textContent = result;
  document.getElementById('inputNumber').value = '';
});
