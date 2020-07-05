// Los valores que declaremos no deben cambiar luego de ser definidos.

function cambiar_residencia(persona, nuevaCiudad){
    persona.ciudad = nuevaCiudad;
    return persona;
}
// Esta funcion devuelve una copia del objeto persona manteniendo la inmutabilidad.
function cambiar_residencia_inmutabilidad(persona, nuevaCiudad){
    return Object.assign({}, persona, {ciudad: nuevaCiudad});
}

const persona = {
    nobmre: 'Robin',
    ciudad: 'Dublin'
}

let nuevaPersona = cambiar_residencia(persona, 'Montreal');

console.log(persona);

// Ejemplos de inmutabilidad
// Map y Filter. Procesan el array sin cambiar el array original.