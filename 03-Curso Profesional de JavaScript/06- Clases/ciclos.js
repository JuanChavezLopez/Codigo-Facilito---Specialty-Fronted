
// FOR OF
function saludaATodos(){
    for (nombre of arguments){
        console.log('Hola ' + nombre);
    }
}

saludaATodos('Juan','elena','cristinel','juan shano');



// FOR IN


let usuario ={
    nombre: 'Juan',
    edad:34
}

for(propiedad in usuario){
    console.log(propiedad);
}