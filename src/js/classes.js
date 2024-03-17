export class Propietario {
    #nombre
    #direccion
    #telefono

    constructor(name, dir, tel) {
        this.#nombre = name
        this.#direccion = dir
        this.#telefono = tel
    }

    // Getters
    get nombre() {
        return this.#nombre;
    }

    get direccion() {
        return this.#direccion;
    }

    get telefono() {
        return this.#telefono;
    }

    // Setters
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    set direccion(nuevaDireccion) {
        this.#direccion = nuevaDireccion;
    }

    set telefono(nuevoTelefono) {
        this.#telefono = nuevoTelefono;
    }

    // metodos
    datosPropietario() {
        return `El nombre del dueño es ${this.#nombre}. El domicilio es: ${this.#direccion}, y el número telefónico de contacto es ${this.#telefono}`
    }
}


export class Animal extends Propietario {
    #tipo

    constructor(name, dir, tel, tipo) {
        super(name, dir, tel)
        this.#tipo = tipo
    }

    get tipo() { return `El tipo de animal es un: ${this.#tipo}` }

}

export class Mascota extends Animal {
    #nombreMascota
    #enfermedad
    constructor(name, dir, tel, tipo, nombreMascota, enfermedad) {
        super(name, dir, tel, tipo)
        this.#nombreMascota = nombreMascota
        this.#enfermedad = enfermedad

    }

    // Getter Setter
    get nombreMascota() {
        return this.#nombreMascota;
    }

    get enfermedad() {
        return this.#enfermedad;
    }

    set nombreMascota(nuevoNombreMascota) {
        this.#nombreMascota = nuevoNombreMascota;
    }


    set enfermedad(nuevaEnfermedad) {
        this.#enfermedad = nuevaEnfermedad;
    }
}