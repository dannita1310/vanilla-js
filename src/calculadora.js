//Suma.

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

let resultadoSuma = sumar(6, 9);
let resultadoSuma2 = sumar(10, 12);

console.log(resultadoSuma);
console.log(resultadoSuma2);

//Resta..

function restar(numero1, numero2) {
  return numero1 - numero2;
}

let resultadoResta = restar(7, 0);
let resultadoResta2 = restar(1, 17);

console.log(resultadoResta);
console.log(resultadoResta2);

//Division

function dividir(numero1, numero2) {
  return numero1 / numero2;
}

let resultadoDivisión = dividir(4, 8);
let resultadoDivisión2 = dividir(10, 15);

console.log(resultadoDivisión);
console.log(resultadoDivisión2);

//multiplicación.

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

let resultadomultiplicacion = multiplicar(6, 8);
let resultadomultiplicacion2 = multiplicar(14, 15);

console.log(resultadomultiplicacion);
console.log(resultadomultiplicacion2);

//Exportar.

export { sumar, restar, dividir, multiplicar };
