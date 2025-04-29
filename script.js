// English and Hebrew content
const content = {
  english: {
    title: "Base Converter",
    description: "Convert numbers between different bases (Binary, Decimal, Hex, Octal).",
    fromLabel: "From:",
    inputLabel: "Enter a number:",
    toLabel: "To:",
    convertButton: "Convert",
  },
  hebrew: {
    title: "המרת בסיסים",
    description: "המרת מספרים בין בסיסים שונים (בינארי, עשרוני, הקסדצימלי, אוקטלי).",
    fromLabel: "מ־:",
    inputLabel: "הכנס מספר:",
    toLabel: "ל־:",
    convertButton: "המר",
  }
};

// Function to update the language
function changeLanguage(language) {
  document.getElementById("title").innerText = content[language].title;
  document.getElementById("description").innerText = content[language].description;
  document.getElementById("from-label").innerText = content[language].fromLabel;
  document.getElementById("input-label").innerText = content[language].inputLabel;
  document.getElementById("to-label").innerText = content[language].toLabel;
  document.getElementById("convert-btn").innerText = content[language].convertButton;
}

// Switch language on button click
document.getElementById("english-btn").addEventListener("click", function() {
  changeLanguage("english");
});

document.getElementById("hebrew-btn").addEventListener("click", function() {
  changeLanguage("hebrew");
});
