// Finally se ejecuta siempre.

const promesa = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 5);
})

promesa.then(respuesta => {
    console.log('Primera Respuesta: ', respuesta);
    return promesa;
}).then(respuesta => {
    console.log('Segunda Respuesta: ', respuesta * 2);
    return promesa;
}).then(respuesta => {
    console.log('Tercera Respuesta: ', respuesta * 2);
}).catch(error => {
    console.log(error);
}).finally(()=>{
    console.log('Se ejecuta siempre');
})