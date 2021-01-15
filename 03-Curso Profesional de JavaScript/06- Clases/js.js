// class Curso {
//     constructor(titulo){
//         this.titulo = titulo;
//     }

//     inscribir(usuario){
//         console.log(usuario + "Se ha inscrito");
//     }
// }


// let javaScriptCurso = new Curso("Curso profesional de javascript");
// console.log(javaScriptCurso.titulo);
// javaScriptCurso.inscribir("Juan");

// class Frutas {
//     constructor(color, precio, ubicacion ='Rumania'){
//         this.color = color;
//         this.precio = precio;
//         this.ubicacion = ubicacion;
//     }
// }

// new Frutas ("Eca tenemos descripcion de frutas");



// -------------REQUEST---------------------
// const request = require ('request');

// request ('http://google.com', function(){
//     console.log('Termine la peticion de google');
// });

// console.log('Yo voy despues, en el codigo, de la peticion de Google.')


// -------------PROMISE---------------------

// const rp = require('request-promise');


// // Promise

// rp('http://google.com')
//     .then (function(html){
//         console.log('Termine la peticion de google');
//     }).catch(function(err){
//         console.log(err);
//     })


const request = require('request');

function leer(url){
    return new Promise(function(resolve, reject){
        // aqui
        request (url, function(err, response){
            if (err){
                reject(err);
            }else{
                resolve(response);
            }
        });
    });
}


leer('http://codigofacilito.com')
   .then(function(response){
       console.log(response);
   })
   .catch(function(err){
       console.log(err);
   });