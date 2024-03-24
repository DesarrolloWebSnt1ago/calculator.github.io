const numbers = document.querySelectorAll(".num");
const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("result");

let operator = "";

numbers.forEach((button) => {
  button.addEventListener("click", function () {
    display.textContent += this.value;
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    operator = this.value;

    switch (operator) {
      case "/":
        display.textContent += operator;

        break;
      case "*":
        display.textContent += operator;

        break;
      case "+":
        display.textContent += operator;

        break;
      case "-":
        display.textContent += operator;

        break;
      // --------------------------------
      case "c":
        display.textContent = "";
        break;
      case "x":
        if (display.textContent.length > 0) {
          display.textContent = display.textContent.slice(0, -1);
        }
        break;
      case ".":
        display.textContent += operator;

        break;
      case "=":
        try {
          const resultado = eval(display.textContent);
          if (resultado === Infinity || resultado === -Infinity) {
            display.textContent = "¡Error!";
          } else {
            display.textContent = resultado;
          }
        } catch (error) {
          // Manejar el error de forma adecuada
          // Mostrar un mensaje de error al usuario
          display.textContent = error.message;

        }
        break;
    }
  });
});
