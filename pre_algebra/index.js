var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularPares(value) {
  const pares = [];
  for (let i = 0; i <= value; i++) {
    if (i % 2) pares.push(i);
  }
  return pares;
}

function calcularImpares(value) {
  const pares = [];
  for (let i = 0; i <= value; i++) {
    if (i % 2 === 1) pares.push(i);
  }
  return pares;
}
// Função para calcular números primos até um limite
function calcularPrimos(value) {
  const primos = [];
  // é par

  for (let i = 1; i <= value; i++) {
    const max3Divisores = [];
    const currentValue = i;
    console.log("[LOG] currentValue: ", currentValue);

    for (let divisor = 1; divisor <= currentValue; divisor++) {
      // console.log("[LOG] "+currentValue+" é divisivél por "+divisor+"?: ", currentValue % divisor === 0? `${currentValue} SIM! É divisivel`:`${currentValue} NÃO é divisivel`);
      // console.log("[LOG] divisor:", divisor);
      if (currentValue % divisor === 0) {
        max3Divisores.push(divisor);
      }
      if (max3Divisores.length === 3) {
        // console.log("[LOG] "+currentValue+" não é primo");
        break;
      }
      if (currentValue === divisor) {
        // console.log("[LOG] "+currentValue+" é primo!");
        primos.push(currentValue);
      }
    }
  }

  return primos;
}

// Menu principal
leitor.question(
  `Qual módulo pra ler dados no Node.js?\n
  1 - Calcular números pares\n
  2 - Calcular números impares\n
  3 - Calcular números primos\n
  Escolha uma opção: `,
  function (answer) {
    if (answer == 1) {
      leitor.question(
        `Calcular pares até: (Insira um número) `,
        function (value) {
          const limite = parseInt(value, 10);
          if (isNaN(limite) || limite < 2) {
            console.log(
              "Por favor, insira um número válido maior ou igual a 2."
            );
          } else {
            const pares = calcularPares(limite);
            console.log(`Números primos até ${limite}:`, pares);
          }
          leitor.close();
        }
      );
    } else if (answer == 2) {
      leitor.question(
        `Calcular impares até: (Insira um número) `,
        function (value) {
          const limite = parseInt(value, 10);
          if (isNaN(limite) || limite < 3) {
            console.log(
              "Por favor, insira um número válido maior ou igual a 3."
            );
          } else {
            const impares = calcularImpares(limite);
            console.log(`Números impares até ${limite}:`, impares);
          }
          leitor.close();
        }
      );
    } else if (answer == 3) {
      leitor.question(
        `Calcular primos até: (Insira um número) `,
        function (value) {
          const limite = parseInt(value, 10);
          if (isNaN(limite) || limite < 2) {
            console.log(
              "Por favor, insira um número válido maior ou igual a 2."
            );
          } else {
            const primos = calcularPrimos(limite);
            console.log(`Números primos até ${limite}:`, primos);
          }
          leitor.close();
        }
      );
    } else {
      console.log("Opção inválida. Encerrando.");
      leitor.close();
    }
  }
);
