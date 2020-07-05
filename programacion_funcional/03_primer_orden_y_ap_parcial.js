// Orden Superior

const func = function(){}

function miFunction(foo) {
    foo();
    return function () {};
}

miFunction(func);

Promise.resolve(5).then(val => {console.log(val)});

document.getElementById('boton').addEventListener('click', event => console.log(event));

setTimeout(function () {}, 0);

// Aplicacion Parcial
// Aplicar algunos, no todos los argumentos.

function crear_saludo(saludo){
    return function (nombre) {
        console.log(`${saludo}  ${nombre}`)
    }
}

let saludoManana = crear_saludo('Buenos Dias!');
let saludoTarde = crear_saludo('Buenas Tardes!');
saludoManana('Guido');
saludoTarde('Guido');