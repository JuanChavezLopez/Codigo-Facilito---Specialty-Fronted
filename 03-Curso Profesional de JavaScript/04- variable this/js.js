
// ------------ARROW FUNCTIONS (uso de la flecha)------------
let usuario ={
    nombre: "Uriel",
    apellido: 'Hernandez',
    nombreCompleto: function(){
        setTimeout(() => {
            console.log(this.nombre + "" + this.apellido)
        },1000);

    }
}

usuario.nombreCompleto();


function cuadrado(numero){
    return numero*numero;
}

console.log("El cuadrado de 9 es:"+cuadrado(9));

//---------------------------------------------------------------
// --------------------ARREGLOS----------------------------------

let arreglo = [1,3,4,5,7,8];

for (let i =0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

// ------------------METODOS DE LOS ARREGLOS-----------------------

let lenguajes =['ruby', 'python', 'java', 'javascript'];

//FIND
let javascript = lenguajes.find(el => el == 'javascript');
console.log(javascript);


// FILTER
lenguajes = lenguajes.filter((el) => el  != 'ruby');

// FOREACH
lenguajes.forEach(function (elemento){
    console.log(elemento);
});

// MAP(que nos devuelve otro arreglo con nuevos elementos)
let numero = ["1","2","5","9"];

let cubo = numero.map(numero => parseInt(numero));
console.log("El nuevo arreglo, con los numeros al cubo son:" +cubo);