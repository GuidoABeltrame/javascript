const primerProceso = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 2);
})

async function llamar_proceso(){
    let valor = await primerProceso;
    return valor * 2;
}

async function llamar_funcion_asincorna(){
    let resultado = await llamar_proceso();
    return resultado * 2;
}

llamar_funcion_asincorna().then(resultado_final =>{
    console.log('Valor final: ', resultado_final);
})