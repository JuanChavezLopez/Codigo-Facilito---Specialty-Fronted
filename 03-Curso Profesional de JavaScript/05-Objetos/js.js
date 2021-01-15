// JSON

let curso ={
    titulo :'Curso de Javascript',
    duracion: 2.2,
    formato: 'video',
    bloque: ['introduccion', 'funciones'],
    inscribir: function (usuario){
        console.log(usuario + " Ahora esta incrito");
    }
}

curso.titulo ='fORMATO DE VIDEO';
console.log(curso.titulo);