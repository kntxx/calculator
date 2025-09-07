const clearDisplay = () => {
  document.getElementById("display").value = "";
};

const deleteLastCharacter = () => {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
};

const appendToDisplay = (value) => {
  document.getElementById("display").value += value;
};

const calculateResult = () => {
  try {
    const display = document.getElementById("display");
    display.value = "I Miss you babuuu! 🥰💖 ";
  } catch (error) {
    const display = document.getElementById("display");
    display.value = "Error";
  }
};
