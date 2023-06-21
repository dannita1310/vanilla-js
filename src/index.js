//## Ejercicio 4

//1. Escribir un código que modifique el HTML y cada segundo muestre la hora en un elemento de HTML.
//<br />
//<br />
//1. Escribir una función llamada obtenerUsuarios utilizando promesas.
//   * En el package.json existe un script para levantar un servidor local. Ejecutelo y navegue a http://localhost:3000/users
//   * Utilizando la función Fetch, debe llamar al url http://localhost:3000/users y obtener la lista de usuarios.
//   * Una vez obtenga la lista de usuarios, imprimalos en la consola.
//   * Invoque la función para que se ejecute el llamado al servidor.
//<br />
//<br />
//1. Escribir una función llamada obtenerUsuarios.
//   * Modificar la función para que utilice async/await
// Inserte el código aquí

//Parte 1
function obtenerHoraActual() {
  let fecha = new Date();
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  const horaActual = horas + ":" + minutos + ":" + segundos;

  return horaActual;
}

function mostrarHoraActual() {
  let elementoHora = document.getElementById("hora-actual");
  elementoHora.textContent = obtenerHoraActual();
}
setInterval(mostrarHoraActual, 1000);
