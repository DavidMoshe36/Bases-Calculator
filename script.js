
const bases = [
  { name: "Binary", value: 2 },
  { name: "Octal", value: 8 },
  { name: "Decimal", value: 10 },
  { name: "Hexadecimal", value: 16 }
];

let fromBase = 10;
let toBase = 2;

function createBaseButtons(containerId, isFrom) {
  const container = document.getElementById(containerId);
  bases.forEach(base => {
    const btn = document.createElement("button");
    btn.textContent = `${base.name} (${base.value})`;
    btn.setAttribute("data-base", base.value);
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", "false");
    btn.addEventListener("click", () => {
      const siblings = container.querySelectorAll("button");
      siblings.forEach(b => {
        b.classList.remove("selected");
        b.setAttribute("aria-checked", "false");
      });
      btn.classList.add("selected");
      btn.setAttribute("aria-checked", "true");

      if (isFrom) {
        fromBase = base.value;
      } else {
        toBase = base.value;
      }
    });
    container.appendChild(btn);
  });

  // סמן ברירת מחדל
  container.querySelector(`button[data-base="${isFrom ? 10 : 2}"]`).click();
}

createBaseButtons("from-base", true);
createBaseButtons("to-base", false);

document.getElementById("convert-button").addEventListener("click", () => {
  const input = document.getElementById("number-input");
  const value = input.value.trim();

  // בדיקת תקינות קלט
  const validChars = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^\d+$/,
    16: /^[0-9a-fA-F]+$/
  };

  if (!validChars[fromBase].test(value)) {
    alert("Invalid input for base " + fromBase);
    return;
  }

  const decimal = parseInt(value, fromBase);
  const converted = decimal.toString(toBase).toUpperCase();

  const baseSymbols = {
    2: "₂",
    8: "₈",
    10: "₁₀",
    16: "₁₆"
  };

  document.getElementById("result").textContent =
    `Result: ${value}${baseSymbols[fromBase]} = ${converted}${baseSymbols[toBase]}`;

  input.value = "";
});
