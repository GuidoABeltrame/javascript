// Promise.race - Devuelve una promesa con el resultado de la primer promesa ejecutada de la lista.
// En este caso la promesa devuelta es la del primer valor porque se ejecuta antes que el resto

const primera_promesa = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'primer valor');
})
const segunda_promesa = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'segundo valor');
})
const tercera_promesa = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'tercer valor');
})

const lista_promesas = []
lista_promesas.push(primera_promesa);
lista_promesas.push(segunda_promesa);
lista_promesas.push(tercera_promesa);

Promise.race(lista_promesas).then(valores => {
    console.log(valores);
}, error => {
    console.log(error);
})