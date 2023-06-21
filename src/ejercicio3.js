// Inserte el código aquí
//Parte 1.
function clonarArreglo() {}
let Audi = "Serie A";

let nuevoAudi = [...Audi];
nuevoAudi.filter(Solo Audi);

console.log(Audi, nuevoAudi);

//Parte 2.

function clonarObjeto() {}
let Mercedes = "Auto Serie A";

let nuevoMercedes = [...cls350];
nuevoMercedes.push(Mercedes);

console.log(Mercedes, nuevoMercedes);

//Parte 3.
function sumar(valores, valorActual) {
  let suma = [1, 2, 3, 4].reduce(sumaTotal, 0);

  let sumarActual = valores + valorActual;
  console.log(sumarActual);

  return sumarActual;
}

console.log(sumar);
console.log(valores);
console.log(valorActual);


//Parte 4.

function saludar(nombre = "Desconocido") {
    console.log("Hola", nombre);
  }
  
  saludar();
  saludar("nombre");

// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };
