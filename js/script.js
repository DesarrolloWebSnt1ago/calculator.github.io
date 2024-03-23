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
            display.textContent = "No se puede dividir entre cero";
          } else {
            display.textContent = resultado;
          }
        } catch (error) {
          // Manejar el error de forma adecuada
          // Mostrar un mensaje de error al usuario
          console.log(error.message);
        }
        break;
    }

    // primerValor = document.getElementById("resultado").textContent;
  });
});

// const igualButton = document.getElementById("igual");

// igualButton.addEventListener("click", function () {
//   if (operador === "" || primerValor === "" || ultimoValor === "") {
//     // Mostrar mensaje de error
//     return;
//   }

//   // Realizar la operación y actualizar la pantalla
//   ultimoValor = document.getElementById("resultado").textContent;
// });
