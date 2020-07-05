// Encadenamiento de promesas

// Se ejecuta setTimeout y despues de unos segundos devuelve un resolve con un argunto como parametro.
const promesa = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 5);
})

// La funcion then siempre retorna una promesa.
// Se puede llamar a then concatenandolo con otro then. Hay que devolver la respuesta para que la tome el proximo then.
// promesa.then(respuesta => {
//     console.log('Primera Respuesta: ', respuesta);
//     return respuesta;
// }).then(respuesta => {
//     console.log('Segunda Respuesta: ', respuesta * 2);
// }).catch(error => {
//     console.log(error);
// })

// Si algun then lanza una excepcion a partir de ahi no se ejecuta y va al catch.
// promesa.then(respuesta => {
//     console.log('Tercera Respuesta: ', respuesta);
//     return respuesta;
// }).then(respuesta => {
//     console.log('Cuarta Respuesta: ', respuesta * 2);
//     throw new Error('Ha sucedido un error');
//     return respuesta * 2;
// }).then(respuesta => {
//     console.log('Quinta Respuesta: ', respuesta * 2);
// }).catch(error => {
//     console.log(error);
// })

// Tambien se pueden encadenar promesas en vez de los valores. Se usa para usar la misma promesa para varias cosas en varios then distintos.
promesa.then(respuesta => {
    console.log('Tercera Respuesta: ', respuesta);
    return promesa;
}).then(respuesta => {
    console.log('Cuarta Respuesta: ', respuesta * 2);
    return promesa;
}).then(respuesta => {
    console.log('Quinta Respuesta: ', respuesta * 2);
}).catch(error => {
    console.log(error);
})