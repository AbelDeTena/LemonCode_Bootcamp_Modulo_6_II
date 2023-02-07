//EJERCICIO 1 - ENIGMA
//INPUT DATA
var mensajeEncriptado = () =>
  document.getElementById("encriptado").value.toLowerCase();
var mensajeDesencriptado = () =>
  document.getElementById("desencriptado").value.toLowerCase();
//ALPHABETS
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
//HANDLER BUTTONS + FUNCTIONS

//Primer método de resolución.
//Utilizando una función para encontrar el valor númerico del indice y otra para realizar el desencriptado.

//evento
document.getElementById("desencriptar").addEventListener("click", desencriptar);

//hallar el valor del indice
function findIndex(letter, alphabet) {
  var index = -1;
  for (let i = 0; i < alphabet.length; i++) {
    if (letter === alphabet[i]) {
      index = i;
    }
  }
  return index;
}

//funcion de desencriptado
function desencriptar() {
  var text = "";
  for (var letter of mensajeEncriptado()) {
    var index = findIndex(letter, encryptedAlphabet);
    if (index > -1) {
      text += plainAlphabet[index];
    } else {
      text += letter;
    }
  }
  document.getElementById("desencriptado").value = text;
}

//GENERIC SOLUTION WITH PARAMETERS
//opcional uso de indexOf
document
  .getElementById("encriptar")
  .addEventListener("click", () =>
    generic(
      mensajeDesencriptado(),
      plainAlphabet,
      encryptedAlphabet,
      "encriptado"
    )
  );

// document
//   .getElementById("desencriptar")
//   .addEventListener("click", ()=>
//     generic(
//       mensajeEncriptado(),
//       encryptedAlphabet,
//       plainAlphabet,
//       "desencriptado"
//     )
//   );

function generic(message, alphabet1, alphabet2, output) {
  var text = "";
  for (var letter of message) {
    var index = alphabet1.indexOf(letter);
    index > -1 ? (text += alphabet2[index]) : (text += letter);
  }
  document.getElementById(output).value = text;
}

//To set clear
document.getElementById("limpiar").addEventListener("click", clear);

function clear() {
  document.getElementById("desencriptado").value = "";
  document.getElementById("encriptado").value = "";
}
