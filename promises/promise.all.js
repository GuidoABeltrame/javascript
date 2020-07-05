const primera_promesa = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 1);
})
const segunda_promesa = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 2);
})
const tercera_promesa = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 3);
})

const lista_promesas = []
lista_promesas.push(primera_promesa);
lista_promesas.push(segunda_promesa);
lista_promesas.push(tercera_promesa);

Promise.all(lista_promesas).then(valores => {
    console.log(valores);
}, error => {
    console.log(error);
})