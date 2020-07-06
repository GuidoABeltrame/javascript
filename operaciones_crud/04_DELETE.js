// Ejemplo de request con promesas
// Los metodos GET no deben incluir parametros en el body.

class RequestHandler {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/posts/1';
        this.color = 'color: purple;';
        this.green = 'background: green; color: white; display: block;';
        this.red = 'background: red; color: white; display: block;';
    }

    getHeader(){
        return {
            "Content-type": "application/json"
        }
    }

    hacer_request(request, params, tipoRequest){
        return new Promise((resolve, reject) => {
            console.log('%c enviando request con los parametros =>', this.color, params);
            fetch(this.url + (request || ''), {
                headers: this.getHeader(),
                method: tipoRequest,
                body: tipoRequest !== 'GET' ? JSON.stringify(params) : null
            })
                .then(response => {
                    if (!response.ok){
                        throw  Error(response.statusText);
                    }
                    return response;
                })
                .then(response => { return response.json(); })
                .then(data => { console.log('%c datos recibidos => ', this.green); resolve(data); })
                .catch(error => {
                    console.log('%c Request fallo', this.red, error);
                    reject(new Error(error));
                });
        });
    }
}
const requests_handler = new RequestHandler();
requests_handler.hacer_request(null,
    {
        "id": 110,
    }
    , 'DELETE').then(datos => console.log(datos));