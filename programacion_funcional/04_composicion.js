function estrella(str) { return str + '*'};
function exclamacion(str) { return str + '!'}

function crearComposicion(f1, f2) {
    return function(texto){return f1(f2(texto))};
}

const estrella_y_exclamacion = crearComposicion(estrella, exclamacion);
let frase1 = estrella_y_exclamacion('Muy Feliz');


console.log(frase1);