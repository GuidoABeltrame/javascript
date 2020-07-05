// Creando promesa simple con un timeout

const promesa = new Promise((resolve, reject) => {
    let allOk = true;

    if(allOk){
        setTimeout(resolve, 5000, 'Todo Salio bien');
    }else{
        reject(new Error('Hubbo algun error'));
    }
})

promesa.then(respuesta => {
    console.log(respuesta);
}, error => {
    console.log(error);
});
