
function primera_promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'primer valor');
    });
}
function segunda_promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'segundo valor');
    });
}
function tercera_promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, 'tercer valor');
    })
}

async function llamaTodas(){
    let primerValor = await primera_promesa();
    let segundoValor = await segunda_promesa();
    let tercerValor = await tercera_promesa();

    console.log(primerValor, segundoValor, tercerValor);
}

llamaTodas();