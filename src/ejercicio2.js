//1. Realice el ejercicio en el archivo: ejercicio1.js
//2. Cree una clase con:
//* Una propiedad valor inicializada en 0
//* Un método siguiente que incremenente el valor en 1.
//3. Defina una variable llamada "instancia" que inicialice una instancia de la clase.

class numero {
  valor = 0;
  siguiente() {
    this.valor += 1;
    return this.valor;
  }
}
// Inserte el código aquí
const instancia = new numero();
export { instancia };
