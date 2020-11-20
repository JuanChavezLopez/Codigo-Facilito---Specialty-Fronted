console.log("hol....");

//DOM

//querySelector(recorre) / querySelectorAll(recorre todo el arbol de javascript)
let tabla = document.querySelectorAll(".content");
console.log(tabla);

// 1.- PRIMERO BUSCAMOS A TODOS LOS ELEMENTOS td
// 2.- luego e un bucle forEach, lo que hemos encontrado lo hacemos sencible al evento click.,y el
// console log..nos va a imprimir la celda, con su contenido.

let celdas = document.querySelectorAll("td");

celdas.forEach(function (td) {
  // console.log(celdas);
  // VAMOS A HACER SENCIBLE AL EVENTO CLICK, A TODOS LAS CELDAS.
  td.addEventListener("click", function () {
    console.log(this);
  });
});

//todo: // /////////////////////////////////////////////////////////////
// let link = document.querySelectorAll(".close");

// link.forEach(function(link){
//     // console.log(celdas);
//     // VAMOS A HACER SENCIBLE AL EVENTO CLICK, A TODOS LAS CELDAS.
//     link.addEventListener('click', function(){
//         console.log("perfecto...!");
//     })

// });

// todo:PREVENTDEFAULT
let link = document.querySelectorAll(".close");

link.forEach(function (link) {

  // agregar un evento click a cada uno de ellos - case sensitive
  link.addEventListener("click", function (ev) {
    ev.preventDefault();

    let content = document.querySelector(".content");

    // quitamos las clase de animacion que ya tiene
    // content.classList.remove("animate__animated");
    content.classList.remove("animate__jello");

    //  agregamos  clase de animacion a su salida fadeOutUp
    content.classList.add("animate__fadeOutBottomRight");
    // content.classList.add("animate__animated");

    setTimeout(function () {
      location.href = "../";
    }, 1000);

    // con setInterval, vamos a hacer una secuencia de ejecuciones, cada cierto tiempo.
    // setInterval(function(){
    //     location.href ="../";
    // },1000);

    return false; // esta funcionalidad es para cambiar el comportamiento por defecto de un evento.
  });
});

// todo: CLASSLIST
// todo: buscamos los elementos i, y luego recorremos a todo, con un forEach, le agregamos clases o le quitamos clases.

let iconos = document.querySelectorAll("i");

iconos.forEach(function (icono) {
//   icono.classList.remove("fa-star");
  // icono.classList.add("fa fa-trash");
//   icono.classList.add("fa-code");
});
