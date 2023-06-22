//Suma.

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

let resultadoSuma = sumar(6, 9);
let resultadoSuma2 = sumar(10, 12);

console.log("El resultado de suma 1 es:", resultadoSuma);
console.log("El resultado de suma 2 es:", resultadoSuma2);

//Resta..

function restar(numero1, numero2) {
  return numero1 - numero2;
}

let resultadoResta = restar(7, 0);
let resultadoResta2 = restar(1, 17);

console.log("El resultado de resta 1 es:", resultadoResta);
console.log("El resultado de resta 2 es:", resultadoResta2);

//Division

function dividir(numero1, numero2) {
  return numero1 / numero2;
}

let resultadoDivisión = dividir(4, 8);
let resultadoDivisión2 = dividir(10, 15);

console.log("El resultado de division 1 es:", resultadoDivisión);
console.log("El resultado de division 2 es:", resultadoDivisión2);

//multiplicación.

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

let resultadomultiplicacion = multiplicar(6, 8);
let resultadomultiplicacion2 = multiplicar(14, 15);

console.log("El resultado de multiplicacion 1 es:", resultadomultiplicacion);
console.log("El resultado de multiplicacion 2 es:", resultadomultiplicacion2);

//Exportar.

export { sumar, restar, dividir, multiplicar };
