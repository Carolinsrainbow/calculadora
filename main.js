//Para que esconda el resultado y lo guarde
function borrarpantalla() {
  document.getElementById("pantalla").value = "";
}

function agregarCaracter(num) {
  if (calculado) {
    borrarpantalla();
    calculado = false;
  }
  document.getElementById("pantalla").value += num;
}

function mostrarEnVisor(valor) {
  document.getElementById("pantalla").value = valor;
}

function fijarOperacion(operando) {
  operacion = operando;
  valor1 = parseInt(document.getElementById("pantalla").value);
  borrarVisor();
}

function calcular() {
  valor2 = parseInt(document.getElementById("pantalla").value);
  switch (operacion) {
    case "división":
      mostrarEnVisor(valor1 / valor2);
      break;
    case "multiplicación":
      mostrarEnVisor(valor1 * valor2);
      break;
    case "resta":
      mostrarEnVisor(valor1 - valor2);
      break;
    case "suma":
      mostrarEnVisor(valor1 + valor2);
      break;
    default:
      console.log("calcular(): Default");
      break;
  }
  calculado = true;
}

let valor1;
let valor2;
let operacion;
let calculado;
