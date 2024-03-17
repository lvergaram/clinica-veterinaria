import { Propietario, Animal, Mascota } from "./classes.js";

const mascotas = []

// DOM
const infoAgregada = document.getElementById("infoAgregada")
const nuevaConsultaForm = document.getElementById("nuevaConsultaForm")
const infoAgregadaRender = document.getElementById("infoAgregadaRender")

nuevaConsultaForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e)

    // Acceder a los elementos del formulario a través del evento submit
    const elementosFormulario = e.target.elements;
    console.log(elementosFormulario)   
    
    // valores de los campos
    const nombreDueno = elementosFormulario['nombreDueno'].value;
    const telefono = elementosFormulario['telefono'].value;
    const lugarResidencia = elementosFormulario['lugarResidencia'].value;
    const nombreMascota = elementosFormulario['nombreMascota'].value;
    const tipoMascota = elementosFormulario['tipoMascota'].value;
    console.log(tipoMascota)
    const motivoConsulta = elementosFormulario['motivoConsulta'].value;

    const mascota = new Mascota(nombreDueno, lugarResidencia, telefono, tipoMascota, nombreMascota, motivoConsulta)

    console.log("nueva mascota: ", mascota)

    infoAgregadaRender.innerHTML = `
    <ul>
        <li>${mascota.datosPropietario()}</li>
        <li>${mascota.tipo}, mientras que el nombre de la mascota es: 
        ${mascota.nombreMascota} y la enfermedad es: ${mascota.enfermedad}</li>
    </ul>`
    
    


})
