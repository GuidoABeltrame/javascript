// Funciones puras
// Cumplen dos principios:
//  * Dada la misma entrada, deben retornar siempre el mismo valor
//  * No deben tener efecto secundario observable. No deben modificar el estado de la aplicacion.

// Ejemplo no funcional
// Una funcion no debe acceder a una variable fuera de su contexto.
let val1 = 10;

function sumar() {
    return val1 + 1;
}
let resultado = sumar();

// Ejemplo funcional. Le paso el parametro y me lo transforma.

let val2 = 10;

function sumar2(num) {
    return num + 1;
}
let resultado = sumar2(val2);

// -------------------------

// Funcion no pura. Porque al ser llamada modifica el estado de la variable Valor.

let valor = 5;
function incrementar() {
    return valor += 1;
}
incrementar();
console.log(valor);
console.log(incrementar());

// Funcion Pura y con la misma salida para el mismo valor.

let valor2 = 5;

function incrementar2(num) {
    return num + 1;
}
incrementar2(valor2);
console.log(valor2);
console.log(incrementar2(valor2));
