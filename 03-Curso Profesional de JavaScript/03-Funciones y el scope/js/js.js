console.log("Juan hasta las estrellas...");

//------------------------- VARIABLES----------------------

// NUMEROS
let a ="juan";
a = 12;
b = 12.4;
console.log(a-b);

// BOOLEAM
let booleano = new Boolean(true);
console.log(booleano.toString());


// ----------------------------OERADORES DE COMPARACION-------
let edad = 24;
edad == 20;

console.log("juan");

// ---------------------CONDICIONALES-------
let cumple =34;

if(cumple > 18){
    console.log("es mayor de edad");
}else{
    console.log("goood!");
}



//TODO: ------------------ FUNCTIONS----------------

function saluda(){
    console.log("Hasta las estrelllas..Juan.");
}

saluda();

// function cuadrado(numero){
//     return numero * numero;
// }

// let cuadrado_dos = cuadrado(3);
// console.log(cuadrado(9));  /* directamente ingresar la funcion con su valor */

// --------------------------------------------------------------------

function mayor_de_edad(edad){
    if(edad >=18){
        var resultado ="Eres mayor de edad";
        let name ="Juan ....";
        console.log(name);
    }else{
        var resultado = "eres menor de dad";
        let names ="Juan ....";
        // console.log(name);
    }
    console.log(resultado);
    console.log(name);
}

mayor_de_edad();


// -------------------------ARGUMENTS----------------------------------------------

function sumaTodos(){
    return arguments[0] + arguments[1];
}

console.log(sumaTodos(1,2,3,4,5));