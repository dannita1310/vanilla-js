class animal {
  nombre = "";
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludo() {
    console.log("Hola, el animal se llama", this.nombre);
  }
}

const animal1 = new animal("Unicornio");
