const { reject } = require("bluebird");

let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Hola Mundo'));
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 600, 'Hola segundo Mundo'));

let p3 = Promise.reject();

// p1.then(console.log);

let saluda = () => console.log('Hola a todos');

Promise.all([p1,p2,p3]).then (resultados => {
    console.log(resultados);
    saluda();
}).catch(() => console.log('Falle :('));